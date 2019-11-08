export const types = {
  ADD: '@cart/ADD',
  REMOVE: '@cart/REMOVE',
  AMOUNT: '@cart/AMOUNT',
};

export function addToCart(product) {
  return {
    type: types.ADD,
    product,
  };
}

export function removeFromCart(productId) {
  return {
    type: types.REMOVE,
    id: productId,
  };
}

export function updateAmount(id, amount) {
  return {
    type: types.AMOUNT,
    id,
    amount,
  };
}
