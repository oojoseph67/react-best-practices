export default function GoalLegend({ goal }) {
  return (
    <>
      {goal < 30
        ? "There is still some work to do"
        : goal >= 30 && goal < 60
        ? "Tou are almost there!"
        : "You reached your goal"}
    </>
  );
}
