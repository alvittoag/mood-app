import React from "react";
import Container from "@/components/container/Container";
import { FlatList } from "react-native";
import { dataDisplay } from "@/constants/Display";
import ListSetting from "@/components/sections/ListSetting";
import { useAsyncStorage, useGlobalRefetch } from "@/hooks/useAsyncStorage";
import { isIos } from "@/utils";
import Error from "@/components/ui/Error";

export enum TypeChart {
  bar = "Display Bar Chart",
  pie = "Display Pie Chart",
}

export default function Settings() {
  const {
    data: type,
    setData,
    error,
  } = useAsyncStorage<string>({
    key: "type-chart",
  });

  const { refetchKey } = useGlobalRefetch();

  const handleAction = (title: any) => {
    setData([title]);

    refetchKey("type-chart");
  };

  if (error) return <Error />;

  return (
    <Container title="Settings" gap={isIos() ? 20 : 15} style={{ flex: 1 }}>
      <FlatList
        data={dataDisplay}
        renderItem={({ item }) => (
          <ListSetting
            item={item}
            type={type?.[0] ?? TypeChart.pie}
            handleAction={handleAction}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </Container>
  );
}
