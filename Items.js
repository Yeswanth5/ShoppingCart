import React from 'react';
import Product from './Product';
import {Link} from "react-router-dom";

export default function Items(props){
    const {products,onAdd}=props;
    return (
    <main className="block col-1 ">
        <div className="row text-right">
        <h2>Products</h2>
        <br></br>
        <br></br>
            <Link to="/Cart">
                <button > Cart </button>
            </Link>
                </div>
            <div className="container">
                {products.map((product)=>(
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
            
            
    </main>
    );
}

