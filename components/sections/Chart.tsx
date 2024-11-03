import { Dimensions } from "react-native";
import React from "react";
import { PieChart } from "react-native-chart-kit";
import Card from "../ui/Card";
import { DataMood } from "@/app/(tabs)";
import { TypeChart } from "@/app/(tabs)/settings";
import BarChart from "../ui/BarChart";
import { calculatePercentageStats } from "@/utils";

export default function Chart({
  data,
  type,
}: {
  data: DataMood[];
  type: string;
}) {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  let content;

  switch (type) {
    case TypeChart.bar:
      content = <BarChart data={calculatePercentageStats(data) ?? []} />;
      break;

    default:
      content = (
        <PieChart
          hasLegend={false}
          data={data ?? []}
          width={screenWidth - 32}
          height={234}
          chartConfig={chartConfig}
          accessor="count"
          backgroundColor="transparent"
          paddingLeft="0"
          center={[screenWidth / 4, 0]}
        />
      );
      break;
  }

  return <Card>{content}</Card>;
}
