import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onXPress: () => void;
  currentTime: string;
  percent: string;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#486550"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30
  },
  x: {
    color: "#b2a1a1",
    fontSize: 30
  },
  timeText: {
    color: "#fff",
    fontSize: 18
  },
  line: {
    height: 3,
    backgroundColor: "#fff"
  }
});

export const WorkoutTimer: React.FC<Props> = ({
  onXPress,
  currentTime,
  percent
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, { width: percent }]} />
      <View style={styles.row}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <TouchableOpacity onPress={onXPress}>
          <Text style={styles.x}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
