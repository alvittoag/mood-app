import { DataMood } from "@/app/(tabs)";
import { Platform } from "react-native";

const sortedDataByName = (data: any) => {
  return data.sort((a: any, b: any) => a.name.localeCompare(b.name));
};

export const calculatePercentageStats = (data: DataMood[]) => {
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);

  const result = data.map((item) => ({
    ...item,
    percentage: Math.round((item.count / totalCount) * 100),
  }));

  return sortedDataByName(result);
};

export const isIos = () => {
  const os = Platform.OS === "ios";

  return os;
};
