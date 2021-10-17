import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import Cart from './Cart';
import Items from './Items';

const Routes=({products,onAdd,onRemove,itemsPrice,taxPrice,totalPrice,shippingPrice,cartItems})=>{
return (
  <div>
  <Switch>
    <Route path="/Login" exact>
      <Login/>
      </Route>
      <Route path="/Signup" exact>
        <Signup/>
        </Route>
        <Route path="/Cart" exact>
          <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} shippingPrice={shippingPrice} totalPrice={totalPrice} taxPrice={taxPrice} itemsPrice={itemsPrice} />
          </Route>
    <Route path="/Items" exact>
      <Items products={products} onAdd={onAdd}/>
    </Route>
  </Switch>
  </div>
  );
  }
  export default Routes;