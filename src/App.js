import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login';
import Home from './pages/index';
import Productos from './pages/Productos';
import Producto from './pages/Producto';
import Featured from './pages/Featured';
import Header from './Header';
import Cart from './components/Cart';


export default function App() {
  return (
    <Router>
    <Header />
    <Cart/>
    {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
    <Switch>
    
    <Route exact path="/" component={Home}/>
    <Route exact path="/productos" component={Productos}/>
    <Route path="/producto/:url" component={Producto} />
    <Route exact path="/featured" component={Featured}/>
    </Switch>
    
    </Router>
    );
  }
  
  