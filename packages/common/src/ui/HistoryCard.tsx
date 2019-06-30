import * as React from "react";
import { Text } from "react-native";
import { CurrentExercise } from "../stores/WorkoutStore";
import { Card } from "./Card";

interface Props {
  header: string;
  currentExercises: CurrentExercise[];
  onPress: () => void;
}

const exerciseShortName = {
  Squat: "SQ",
  Deadlift: "DL",
  "Bench Press": "BP",
  "Overhead Press": "OHP",
  "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<Props> = ({
  header,
  currentExercises,
  onPress
}) => {
  return (
    <Card onPress={onPress}>
      <Text>{header}</Text>
      {currentExercises.map(curEx => {
        return (
          <Text key={curEx.exercise}>{`${
            exerciseShortName[curEx.exercise as keyof typeof exerciseShortName]
          } - ${curEx.numSets} x ${curEx.reps} ${curEx.weight}lbs `}</Text>
        );
      })}
    </Card>
  );
};
