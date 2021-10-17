import Header from './components/Header';
import Cart from './components/Cart';
import Items from './components/Items';
import data from './data';
import { useState } from 'react';
import {BrowserRouter as Router} from  "react-router-dom";
import Routes from './components/Routes';
import Login from './Login';

function App() {
  const {products}= data;
  const [cartItems,setCartItems] = useState([]);
  const [itemsPrice,setitemPrice]=useState([]);
  const [taxPrice,settaxPrice]=useState([]);
  const [totalPrice,settotalPrice]=useState([]);
  
  const onAdd = (product)=>{
    const exist = cartItems.find(x=>x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map((x)=>
        x.id===product.id?{...exist,qty:exist.qty+1}:x
        )
      );
    }else{
      setCartItems([...cartItems, {...product, qty: 1 }]);
    }
  };
  const onRemove=(product)=>{
    const exist=cartItems.find(x=>x.id=== product.id);
    if(exist.qty===1)
    {
      setCartItems(cartItems.filter((x) => x.id!==product.id));
    }
    else{
      setCartItems(
        cartItems.map((x)=>
        x.id===product.id?{...exist,qty:exist.qty-1}:x
        )
      );
    }
  }
  return (
    <div className="App">
      <Router>
      <Header text-align="center" countCartItems={cartItems.length} > </Header>
      <Routes onAdd={onAdd} onRemove={onRemove} products={products} cartItems={cartItems} itemsPrice={itemsPrice} shippingPrice="shippingPrice" taxPrice={taxPrice} totalPrice={totalPrice} />
      </Router>
    </div>
  );
}
export default App;