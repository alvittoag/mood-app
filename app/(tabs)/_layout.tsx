import { Colors } from "@/constants/Colors";
import { Routes } from "@/constants/Route";
import { Tabs } from "expo-router";
import React from "react";
import { Font_Sizes, Fonts } from "@/constants/Fonts";
import Icon from "@/components/ui/Icon";
import { isIos } from "@/utils";

export default function TabLayout() {
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.tabIconSelected,
        tabBarInactiveTintColor: Colors.tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors.background_white,
          height: isIos() ? 100 : 92,
          paddingTop: isIos() ? 20 : 20,
          paddingBottom: isIos() ? 25 : 15,
          paddingHorizontal: 20,
        },
        tabBarLabelStyle: {
          fontSize: Font_Sizes.xs,
          fontFamily: Fonts.REGULAR,
        },
      }}
      sceneContainerStyle={{ backgroundColor: Colors.background_white }}
    >
      {Routes.map((item, index) => (
        <Tabs.Screen
          key={index}
          name={item.name}
          options={{
            title: item.title,

            tabBarIcon: ({ color, focused }) => (
              <Icon
                color={focused ? Colors.tabIconSelected : color}
                source={item.icon}
                size={24}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
