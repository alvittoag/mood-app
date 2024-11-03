import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./Text";
import { Colors } from "@/constants/Colors";

export default function Error() {
  return (
    <View style={styles.container}>
      <Text weight="medium" style={{ color: Colors.stress }}>
        An error occurred while loading data!!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
