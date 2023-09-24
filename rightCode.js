/**
 * V1
 */

const canUserPlaceOrder = (payment, product) => {
  if (product.hasStock === true) {
    if (payment.processed === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

/**
 * V2
 */

const canUserPlaceOrderV2 = (payment, product) => {
  if (product.hasStock === false) {
    return false;
  } else if (payment.processed === true) {
    return true;
  }
};

/**
 * V3
 */

const canUserPlaceOrderV3 = (payment, product) => {
  if (product.hasStock === true && payment.processed === true) {
    return true;
  }
  return false;
};

/**
 * V4
 */

const canUserPlaceOrderV4 = (payment, product) => {
  return product.hasStock && payment.processed;
};

/**
 * V5
 */

const canUserPlaceOrderV5 = (payment, product) =>
  product.hasStock && payment.processed;

/**
 * V6
 */

const canUserPlaceOrderV6 = ({ processed }, { hasStock }) =>
  hasStock && processed;
