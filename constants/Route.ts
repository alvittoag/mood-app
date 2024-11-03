import assets from "@/assets";
import { ImageSourcePropType } from "react-native";

export type RouteName = "index" | "statistics" | "settings";

export interface Route {
  name: RouteName;
  title: string;
  icon: ImageSourcePropType;
}

export const Routes: Route[] = [
  {
    name: "index",
    title: "Home",
    icon: assets.home,
  },
  {
    name: "statistics",
    title: "Statistics",
    icon: assets.statistics,
  },
  {
    name: "settings",
    title: "Settings",
    icon: assets.settings,
  },
] as const;
