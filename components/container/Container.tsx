import { ViewStyle } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../ui/Text";

export default function Container({
  children,
  title,
  align = "center",
  gap = 5,
  style,
}: {
  children: React.ReactNode;
  title?: string;
  align?: "center" | "left" | "right";
  gap?: number;
  style?: ViewStyle;
}) {
  return (
    <SafeAreaView
      style={[
        {
          paddingHorizontal: 15,
          paddingVertical: 20,
          gap: gap,
        },
        style,
      ]}
    >
      <Text size="xl" weight="semiBold" style={{ textAlign: align }}>
        {title}
      </Text>

      {children}
    </SafeAreaView>
  );
}
