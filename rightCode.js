const { useState, useEffect } = require("react");

const Checkout = () => {
  const [items, setItems] = useState([]);
  const newTotal = items.reduce((acc, currValue) => {
    return acc + currValue.price;
  }, 0);
};
