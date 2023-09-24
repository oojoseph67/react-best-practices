import { useEffect, useState } from "react";

const useItem = ({ itemId }) => {
  const [item, setItem] = useState();
  useEffect(() => {
    const fetchItem = async () => {
      //   const res = await fetch(`https://api/dh/${itemId}`);
      const res = await itemsApi.getItemById(itemId);
      setItem(res.json());
    };
    fetchItem();
  }, []);

  return { item };
};

const parseItem = (item) => {
  return {
    name: item.name,
    finalPrice: item.discountPrice || item.price,
  };
};

const getItemById = async (id) => {
  const res = await fetch(`https://api/dh/${itemId}`);
  const item = parseItem(res.json());
  return item;
};
