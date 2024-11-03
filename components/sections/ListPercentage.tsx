import { StyleSheet, View } from "react-native";
import React from "react";
import { DataMood } from "@/app/(tabs)";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import Text from "../ui/Text";
import { Colors } from "@/constants/Colors";

export default function ListPercentage({ item }: { item: DataMood }) {
  return (
    <Card style={styles.container}>
      <View style={styles.rowDirection}>
        <Icon source={item.icon} size={25} color={item.color} />
        <Text
          size="sm"
          weight="semiBold"
          style={{ color: item.color, lineHeight: 25 }}
        >
          {item.name}
        </Text>
      </View>
      <Text size="sm" style={{ color: Colors.textSecondary }}>
        {item.percentage} %
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginBottom: 15,
    flex: 1,
  },
  rowDirection: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
});
