export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({type: 'ADD_TO_CART', payload: product });
  }
};
export const addToCart = (product) => {
  return  {type: 'ADD_TO_CART'}
};

export const removeProduct = (product) => {
  return (dispatch) => { 
  dispatch ({ type: 'REMOVE_FROM_CART', payload: product })
  }
};

export const decrementProduct = (product) => {
  return { type: 'DECREMENT_ITEM_FROM_CART', payload: product };
}

export const incrementProduct = (product) => {
  return (dispatch) => {
    setTimeout(() => {
    dispatch({type: 'INCREMENT_ITEM_FROM_CART', payload: product })
  }, 4000)
}
};

export const removeAllProducts = (product) => {
  return { type: 'REMOVE_ALL_PRODUCTS', payload: product };
}
