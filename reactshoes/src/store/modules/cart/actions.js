export const types = {
  ADD: '@cart/ADD_REQUEST',
  ADD_SUCCESS: '@cart/ADD_SUCCESS',
  REMOVE: '@cart/REMOVE',
  AMOUNT: '@cart/AMOUNT',
};

export function addToCart(id) {
  return {
    type: types.ADD,
    id: id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: types.ADD_SUCCESS,
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
