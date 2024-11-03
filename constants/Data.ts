import assets from "@/assets";
import { ImageSourcePropType } from "react-native";
import { Colors } from "./Colors";

export type TitleMoodName = "Happy" | "Sad" | "Neutral" | "Stress";

export type DataButtonMood = {
  title: TitleMoodName;
  icon: ImageSourcePropType;
  color: string;
  backgroundColor: string;
};

export const DataButtonMood: DataButtonMood[] = [
  {
    title: "Happy",
    icon: assets.happy,
    color: Colors.happy,
    backgroundColor: Colors.background_happy,
  },
  {
    title: "Neutral",
    icon: assets.neutral,
    color: Colors.neutral,
    backgroundColor: Colors.background_neutral,
  },
  {
    title: "Sad",
    icon: assets.sad,
    color: Colors.sad,
    backgroundColor: Colors.background_sad,
  },
  {
    title: "Stress",
    icon: assets.stress,
    color: Colors.stress,
    backgroundColor: Colors.background_stress,
  },
];
