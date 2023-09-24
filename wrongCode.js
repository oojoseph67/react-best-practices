const { useState, useEffect } = require("react");

const Checkout = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = items.reduce((acc, currValue) => {
      return acc + currValue.price;
    }, 0);
    setTotal(newTotal);
  }, [items]);
};
