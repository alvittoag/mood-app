import { FlatList } from "react-native";
import React from "react";
import Container from "@/components/container/Container";
import Chart from "@/components/sections/Chart";
import { useAsyncStorage } from "@/hooks/useAsyncStorage";
import StatsNotFound from "@/components/sections/StatsNotFound";
import { calculatePercentageStats, isIos } from "@/utils";
import ListPercentage from "@/components/sections/ListPercentage";
import { DataMood } from ".";
import { TypeChart } from "./settings";
import Loader from "@/components/ui/Loader";
import Error from "@/components/ui/Error";

export default function Statistics() {
  const {
    data: dataMood,
    isLoading: loadingData,
    error: errorGetData,
  } = useAsyncStorage<DataMood>({
    key: "mood-data",
  });

  const {
    data: typeChart,
    isLoading: loadingTypeChart,
    error: errorGetType,
  } = useAsyncStorage<string>({
    key: "type-chart",
  });

  const renderContent = () => {
    if (errorGetData || errorGetData) return <Error />;
    if (loadingData || loadingTypeChart) return <Loader />;

    let content;

    switch (dataMood.length) {
      case 0:
        content = <StatsNotFound />;
        break;

      default:
        content = (
          <FlatList
            ListHeaderComponent={() => (
              <Chart type={typeChart[0] ?? TypeChart.pie} data={dataMood} />
            )}
            ListHeaderComponentStyle={{ marginBottom: 20 }}
            keyExtractor={({ name }) => name}
            numColumns={2}
            data={calculatePercentageStats(dataMood)}
            columnWrapperStyle={{
              gap: 15,
            }}
            renderItem={({ item }) => <ListPercentage item={item} />}
          />
        );
        break;
    }

    return content;
  };

  return (
    <Container title="Statistics" style={{ flex: 1 }} gap={isIos() ? 20 : 15}>
      {renderContent()}
    </Container>
  );
}
