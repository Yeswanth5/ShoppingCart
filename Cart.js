import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart(props)
{
    const {cartItems,onAdd,onRemove}= props;
    const itemsPrice = cartItems.reduce((a,c)=>a+c.price*c.qty,0);
    const taxPrice =itemsPrice*0.14;
    const shippingPrice = itemsPrice>2000?0:50;
    const totalPrice= itemsPrice+taxPrice+shippingPrice;

    return (
        <aside className="block ">
        
        <div className="row">
            <h2>Cart Items</h2>
            <br></br>
            <br></br>
            <Link to="/Items" className="text-right">
                <button> Products </button>
            </Link>
        </div>
        <div>{cartItems.length === 0 && <div> Cart is Empty</div>}</div>
        {cartItems.map((item)=>(
            <div key={item.id} className="row">
               <div className="col-1">{item.name}</div> 
               <div className="col-2">
                   <button onClick={()=>onAdd(item)} className="add">+</button>
                   <button onClick={()=>onRemove(item)} className="remove">-</button>
               </div>
               <div className="col-2 text-right">
                   {item.qty} x ₹{item.price.toFixed(2)}
               </div>
            </div>
        ))}
        {cartItems.length!==0 && (
            <>
            <hr></hr>
            <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">₹{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">₹{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">Shipping Price</div>
                <div className="col-1 text-right">₹{shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">
                    <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                    <strong>₹{totalPrice.toFixed(2)}</strong>
                </div>
            </div>
            <hr/>
            <div className="row">
            <Link to="/Items">
                <button onClick={()=> alert('ThankYou For Shopping')} >
                    Checkout
                </button>
            </Link>

            </div>
            
            </>
        )}
        </aside>
    );
}