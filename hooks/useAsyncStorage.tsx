type Listener = (specificKey?: string) => void;

class SimpleEventEmitter {
  private listeners: Listener[] = [];

  emit(specificKey?: string) {
    this.listeners.forEach((listener) => listener(specificKey));
  }

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useCallback, useEffect } from "react";

const eventEmitter = new SimpleEventEmitter();

interface UseAsyncStorageOptions<T> {
  key: string;
  initialData?: T[];
}

interface UseAsyncStorageReturn<T> {
  data: T[];
  isLoading: boolean;
  error: any;
  refetch: () => Promise<void>;
  setData: (newData: T[]) => Promise<void>;
  removeData: () => Promise<void>;
}

export const triggerGlobalRefetch = (specificKey?: string) => {
  eventEmitter.emit(specificKey);
};

export function useAsyncStorage<T>({
  key,
  initialData = [],
}: UseAsyncStorageOptions<T>): UseAsyncStorageReturn<T> {
  const [data, setInternalData] = useState<T[]>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      const jsonValue = await AsyncStorage.getItem(key);
      const value = jsonValue != null ? JSON.parse(jsonValue) : [];

      const safeValue = Array.isArray(value) ? value : [];
      setInternalData(safeValue);
    } catch (e) {
      setError(e);
      setInternalData([]);
    } finally {
      setIsLoading(false);
    }
  }, [key]);

  const setData = async (newData: T[]): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      // Memastikan newData selalu array
      const safeData = Array.isArray(newData) ? newData : [];
      const jsonValue = JSON.stringify(safeData);
      await AsyncStorage.setItem(key, jsonValue);

      setInternalData(safeData);

      // Trigger global refetch untuk key ini
      triggerGlobalRefetch(key);
    } catch (e) {
      setError(e);
      setInternalData([]); // Set empty array on error
    } finally {
      setIsLoading(false);
    }
  };

  const removeData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);

      await AsyncStorage.removeItem(key);
      setInternalData([]); // Set empty array instead of null

      // Trigger global refetch untuk key ini
      triggerGlobalRefetch(key);
    } catch (e) {
      setError(e);
      setInternalData([]); // Set empty array on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = eventEmitter.subscribe((specificKey?: string) => {
      if (!specificKey || specificKey === key) {
        fetchData();
      }
    });

    fetchData();

    return () => {
      unsubscribe();
    };
  }, [fetchData, key]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
    setData,
    removeData,
  };
}

export function useGlobalRefetch() {
  return {
    refetchAll: () => triggerGlobalRefetch(),
    refetchKey: (key: string) => triggerGlobalRefetch(key),
  };
}
