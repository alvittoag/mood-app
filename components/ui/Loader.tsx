import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function Loader() {
  return (
    <ActivityIndicator
      size={"large"}
      color={Colors.tint}
      style={styles.indicator}
    />
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
