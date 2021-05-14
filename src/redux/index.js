import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import showCartReducer from './showCart/showCartReducer';


const reducers = combineReducers({
  user: userReducer,
  cardData: cartReducer,
  showCart: showCartReducer,

})

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  
);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;
