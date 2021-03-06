import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './Components/Order-Review/Review';
import Inventory from './Components/Inventory/Inventory';
import Error from './Components/Error/Error';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/inventory">
            <Inventory/>
          </Route>
          <Route exact path="/">
            <Shop/>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
