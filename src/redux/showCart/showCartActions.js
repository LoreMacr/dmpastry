// Actions change showCartPopup.
export const show = () => dispatch => dispatch({
    type: 'CHANGE_SHOW_CART_POPUP',
    show: true
  });
  
  export const hidden = () => dispatch => dispatch({
    type: 'CHANGE_SHOW_CART_POPUP',
    show: false
  });
  
  