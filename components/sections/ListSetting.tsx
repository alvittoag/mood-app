import React from "react";
import { dataDisplay } from "@/constants/Display";
import { Colors } from "@/constants/Colors";
import Text from "../ui/Text";
import { StyleSheet, TouchableOpacity } from "react-native";
import Card from "../ui/Card";
import { TypeChart } from "@/app/(tabs)/settings";

export default function ListSetting({
  item,
  type,
  handleAction,
}: {
  item: (typeof dataDisplay)[0];
  type: string;
  handleAction: (title: string) => void;
}) {
  const active = item.title === type;

  return (
    <TouchableOpacity onPress={() => handleAction(item.title)}>
      <Card
        style={[
          styles.container,
          {
            backgroundColor: Colors.background_white,
            borderColor: active ? Colors.tint : Colors.border,
          },
        ]}
      >
        <Text
          weight={active ? "medium" : "regular"}
          style={{
            color: active ? Colors.tint : Colors.text,
          }}
        >
          {item.title}
        </Text>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
  },
});
