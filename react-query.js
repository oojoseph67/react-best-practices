import { useQuery } from "react-query";

const fetchUserData = async () => {
  const response = await fetch("https://api.example.com/user");
  return response.json();
};

const useUserData = () => {
  return useQuery("user", fetchUserData);
};

export default useUserData;
