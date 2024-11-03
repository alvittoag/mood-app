import { DataMood } from "@/app/(tabs)";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Icon from "./Icon";

const CHART_WIDTH = Dimensions.get("window").width - 32;

const BarChart = ({ data }: { data: DataMood[] }) => {
  const maxValue = 100;

  return (
    <View style={styles.chartContainer}>
      {data.map((item, index) => {
        const barHeight = ((item?.percentage as number) / maxValue) * 180;

        return (
          <View key={index} style={styles.barWrapper}>
            <Icon
              style={styles.emoji}
              source={item.icon}
              size={25}
              color={item.color}
            />

            <View
              style={[
                styles.bar,
                {
                  height: barHeight,
                  backgroundColor: item.color,
                },
              ]}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    height: 234,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 32,
  },
  barWrapper: {
    alignItems: "center",
    width: CHART_WIDTH / 4.8,
  },
  bar: {
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  emoji: {
    marginBottom: 8,
    position: "absolute",
    top: -38,
  },
});

export default BarChart;
