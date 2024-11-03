import React from "react";
import { FlatList, ImageSourcePropType } from "react-native";
import Container from "@/components/container/Container";
import { DataButtonMood, TitleMoodName } from "@/constants/Data";
import ListChooseMood from "@/components/sections/ListChooseMood";

import { useAsyncStorage, useGlobalRefetch } from "@/hooks/useAsyncStorage";
import { isIos } from "@/utils";
import Loader from "@/components/ui/Loader";
import Error from "@/components/ui/Error";

export type DataMood = {
  name: string;
  count: number;
  color: string;
  icon: ImageSourcePropType;
  timestamp: Date;
  percentage?: number;
};

export default function Home() {
  const [selectedMood, setSelectedMood] = React.useState<TitleMoodName | null>(
    null
  );
  const {
    data: dataMood,
    setData,
    error,
  } = useAsyncStorage<DataMood>({ key: "mood-data" });

  const { refetchKey } = useGlobalRefetch();

  const handleAction = async (item: DataButtonMood) => {
    setSelectedMood(item.title);

    try {
      let updatedMoods: DataMood[] = [...dataMood];

      const existingMoodIndex = updatedMoods.findIndex(
        (mood) => mood.name === item.title
      );

      if (existingMoodIndex !== -1) {
        updatedMoods[existingMoodIndex] = {
          ...updatedMoods[existingMoodIndex],
          count: updatedMoods[existingMoodIndex].count + 1,
        };
      } else {
        updatedMoods.push({
          name: item.title,
          count: 1,
          color: item.color,
          icon: item.icon,
          timestamp: new Date(),
        });
      }

      setData(updatedMoods);

      refetchKey("mood-data");
    } catch (err) {
      console.log(err);
    }
  };

  if (error) return <Error />;

  return (
    <Container
      title="How are you feeling right now?"
      align="left"
      gap={isIos() ? 10 : 5}
    >
      <FlatList
        data={DataButtonMood}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ListChooseMood
            item={item}
            handleAction={handleAction}
            selectedMood={selectedMood}
          />
        )}
      />
    </Container>
  );
}
