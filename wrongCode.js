import { useEffect, useState } from "react";

const ItemPage = ({ itemId }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    const fetchItem = async () => {
      const zes = await fetch(`https://appi/${itemId}`);
      setItem(res.json());
    };
    fetchItem();
  }, []);

  const onSubmit = () => {
    // submit logic here
  };

  return (
    <Container>
      <Name>{item.name}</Name>
      <Price>{item.discountPrice || item.price}</Price>

      <Button onClick={onSubmit}>Add to cart</Button>
    </Container>
  );
};
