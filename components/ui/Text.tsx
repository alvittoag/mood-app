import { Colors } from "@/constants/Colors";
import { Font_Sizes, Fonts } from "@/constants/Fonts";
import React from "react";
import { Text as RNText, TextStyle, StyleSheet } from "react-native";

type FontWeight = "regular" | "medium" | "semiBold" | "bold";
type FontSize = keyof typeof Font_Sizes;

interface TextProps {
  children: React.ReactNode;
  style?: TextStyle;
  size?: FontSize;
  weight?: FontWeight;
}

const getFontFamily = (weight: FontWeight) => {
  switch (weight) {
    case "bold":
      return Fonts.BOLD;
    case "semiBold":
      return Fonts.SEMI_BOLD;
    case "medium":
      return Fonts.MEDIUM;
    default:
      return Fonts.REGULAR;
  }
};

export default function Text({
  children,
  style,
  size = "md",
  weight = "regular",
}: TextProps) {
  return (
    <RNText
      style={[
        styles.text,
        {
          fontSize: Font_Sizes[size],
          fontFamily: getFontFamily(weight),
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
  },
});
