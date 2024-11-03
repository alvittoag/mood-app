import React from "react";
import { Image, ImageSourcePropType, ImageStyle } from "react-native";

// Definisi tipe untuk icons

type Props = {
  source: ImageSourcePropType;
  color?: string;
  size: number;
  style?: ImageStyle;
};

export default function Icon({ source, color, size, style }: Props) {
  return (
    <Image
      source={source}
      style={[
        {
          width: size,
          height: size,
          tintColor: color,
        },
        style,
      ]}
      resizeMode="contain"
    />
  );
}
