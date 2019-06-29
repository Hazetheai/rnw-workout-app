import * as React from "react";
import { Text } from "react-native";
import { CurrentExercise } from "../stores/WorkoutStore";
import { Card } from "./Card";

interface Props {
  header: string;
  currentExercises: CurrentExercise[];
}

const exerciseShortName = {
  Squat: "SQ",
  DeadLift: "DL",
  "Bench Press": "BP",
  "Overhead Press": "OHP",
  "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<Props> = (header, currentExercises) => {
  return (
    <Card>
      <Text>{header}</Text>
      {currentExercises.map((curEx: any) => {
        return (
          <Text key={curEx.exercise}>{`${
            exerciseShortName[curEx.exercise as keyof typeof exerciseShortName]
          }${curEx.numSets}x${curEx.reps} ${curEx.weight} `}</Text>
        );
      })}
    </Card>
  );
};
