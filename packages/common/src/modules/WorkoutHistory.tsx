import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RouteComponentProps } from "react-router";
import { RootStoreContext } from "../stores/RootStore";

interface Props extends RouteComponentProps {}

export const WorkoutHistory: React.FC<Props> = observer(({ history }) => {
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View>
      <Text>Workout History page: </Text>
      <Button
        title="Create Workout"
        onPress={() => {
          rootStore.workoutStore.currentExercises.push(
            {
              exercise: "Squat",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 260
            },
            {
              exercise: "Bench Press",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 200
            },
            {
              exercise: "Deadlift",
              numSets: 1,
              reps: 5,
              sets: ["", "x", "x", "x", "x"],
              weight: 360
            }
          );
          history.push("./current-workout");
        }}
      />
    </View>
  );
});

// const rows: JSX.Element[][] = [];

// Object.entries(rootStore.workoutStore.history).forEach(([date, val], idx) => {
//   const hc = <HistoryCard key={date} header={date} currentExercises={val} />;
//   if (idx % 2 === 0) {
//     rows.push([hc]);
//   } else {
//     rows[rows.length - 1].push(hc);
//   }
// });
