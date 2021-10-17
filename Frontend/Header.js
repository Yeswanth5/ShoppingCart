import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props)
{
    return (
        <header className="block row center header">
            <div>
                <a href="/">
                    <h2>Online Shopping Cart</h2>
                </a>
            </div>
            <div>

                    { ' '}
                    {props.countCartItems?(
                        <button className="badge">{props.countCartItems}</button>
                    ):(
                        ''
                    )
                }
                <Link to="/Signup"> Signup </Link>
                <Link to="/Login">Login</Link>
            </div>
        </header>
    );
}