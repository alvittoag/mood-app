import React from "react";

import { DataButtonMood, TitleMoodName } from "@/constants/Data";
import Button from "../ui/Button";

export default function ListChooseMood({
  item,
  selectedMood,
  handleAction,
}: {
  item: DataButtonMood;
  selectedMood: TitleMoodName | null;
  handleAction: (item: DataButtonMood) => void;
}) {
  return (
    <Button
      active={selectedMood === item.title}
      onPress={() => handleAction(item)}
      {...item}
    />
  );
}
