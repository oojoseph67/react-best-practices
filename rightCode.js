import { Switch, Case, Default } from "./conditionalRendering";

export default function GoalLegend({ goal }) {
  return (
    <Switch>
      <Case condition={goal < 30}>There is still some work to do!</Case>
      <Case condition={goal >= 30 && goal < 60}>You are almost there!</Case>
      <Case condition={goal >= 60}>You reached your goal</Case>
      <Default>Make sure to set a goal</Default>
    </Switch>
  );
}
