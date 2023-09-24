import { useEffect } from "react";
import { useQuery } from "@/tanstack/react-query";

function App() {
  const [isLoading, error, data] = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://dog.ceo/image/random").then((res) => res.json()),
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return <div className="App">{dogImage && <img src={dogImage}></img>}</div>;
}

export default App;
