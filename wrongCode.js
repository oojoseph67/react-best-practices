import { useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const fetchDogImage = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dog.ceo/api/random");
      const data = await response?.json();
      setDogImage(data.image);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return <div className="App">{dogImage && <img src={dogImage}></img>}</div>;
}

export default App;
