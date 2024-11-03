import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function Card({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}) {
  return <View style={[styles.border, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 4,
  },
});
