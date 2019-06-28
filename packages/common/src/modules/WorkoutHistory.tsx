import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RouterStoreContext } from "../stores/RoutersStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const routerStore = React.useContext(RouterStoreContext);

  return (
    <View>
      <Text>Workout History page: </Text>
      <Button
        title="Create Workout"
        onPress={() => {
          routerStore.screen = "CurrentWorkout";
        }}
      />
    </View>
  );
});
