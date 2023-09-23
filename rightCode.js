import useUserData from "./react-query";

function Heading() {
  const { data: user } = useUserData();
  return <UserInfo user={user} />;
}
