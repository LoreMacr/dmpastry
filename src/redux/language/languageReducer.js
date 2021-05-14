
const INI_STATE = 'es';

function languageReducer(state = INI_STATE, action) {

  if (action.type === 'SET_LANGUAGE') {
    return action.payload;
  }
  return state;
}

export default languageReducer;
