import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import Home from './pages/index';
import Productos from './pages/Productos';
import Producto from './pages/Producto';
import Featured from './pages/Featured';
import Header from './Header';
import Cart from './components/Cart';




const Routes = () => {

  return (
    <Router>
    <Header />
    <Cart/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/carrito" component={Cart}/>
    <Route exact path="/productos" component={Productos}/>
    <Route path="/producto/:url" component={Producto} />
    <Route exact path="/featured" component={Featured}/>
    </Switch>
    
    </Router>
    );
  }

  export default Routes