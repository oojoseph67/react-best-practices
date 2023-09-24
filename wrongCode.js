const canUserPlaceOrder = (payment, product) => {
  let canUserPlaceOrder = false;
  if (product.hasStock === true) {
    if (payment.processed === true) {
      canPlaceOrder = true;
    } else {
      canPlaceOrder = false;
    }
  } else {
    canPlaceOrder = false;
  }
  return canPlaceOrder;
};
