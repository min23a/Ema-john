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
import Login from './Components/Login/Login';
import { createContext, useState} from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userInfo = createContext();

function App() {
  const [user,setUser] = useState({});
  return (
      <userInfo.Provider value={[user,setUser]}>
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
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout/>
          </PrivateRoute>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
      </userInfo.Provider>
  );
}

export default App;
