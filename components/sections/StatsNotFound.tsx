import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../ui/Text";
import { Colors } from "@/constants/Colors";
import Icon from "../ui/Icon";
import assets from "@/assets";

export default function StatsNotFound() {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { gap: 3 }]}>
        <Text size="lg" weight="semiBold" style={{ color: Colors.happy }}>
          Please
        </Text>

        <Text size="lg" weight="semiBold" style={{ color: Colors.sad }}>
          Choose
        </Text>

        <Text size="lg" weight="semiBold" style={{ color: Colors.neutral }}>
          Your
        </Text>

        <Text size="lg" weight="semiBold" style={{ color: Colors.stress }}>
          Mood First !!!
        </Text>
      </View>

      <View style={[styles.row, { gap: 10 }]}>
        <Icon size={35} source={assets.happy} color={Colors.happy} />
        <Icon size={35} source={assets.sad} color={Colors.sad} />
        <Icon size={35} source={assets.neutral} color={Colors.neutral} />
        <Icon size={35} source={assets.stress} color={Colors.stress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  row: {
    flexDirection: "row",
  },
});
