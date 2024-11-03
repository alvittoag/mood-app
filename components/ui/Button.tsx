import {
  View,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import React from "react";
import Icon from "./Icon";
import Text from "./Text";
import { TitleMoodName } from "@/constants/Data";

type ButtonProps = {
  onPress: (data: any) => void;
  title: TitleMoodName;
  icon: ImageSourcePropType;
  color: string;
  active: boolean;
  backgroundColor: string;
};

export default function Button({
  onPress,
  icon,
  color,
  title,
  active,
  backgroundColor,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          borderColor: active ? color : "transparent",
        },
      ]}
    >
      <Icon color={color} size={40} source={icon} />
      <Text size="lg" weight="semiBold" style={{ color: color }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginBottom: 20,
    borderWidth: 1,
  },
});
