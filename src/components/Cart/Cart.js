import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity ;
       
    }

    let shipping = 0;
    if (total > 200) {
        shipping = 0;
    }
    else if (total > 100) {
        shipping = 10.22;
    }
    else if (total > 0) {
        shipping = 22.08;
    }
   

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = (num = 1) => {
        const precision = num;
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <div className="discount">
                <p className="caution bold">Discount:</p>
                <p className="caution size"><small><i> Buy minimum $200 for <span className="bold">free</span> shipping cost</i></small></p>
                <p className="caution size"><small><i> Buy minimum $100 for <span className="bold">$10.22</span> shipping cost</i></small></p>
            </div>
            <p><span className="bold">Items Ordered:</span> {cart.length}</p>
            <p><span className="bold">Product Price:</span> ${formatNumber(total)}</p>
            <p><small><span className="bold">Shipping Cost:</span> ${shipping}</small></p>
            <p><span className="bold">Tax + VAT:</span> ${formatNumber(tax)}</p>
            <p><span className="bold">Total Price:</span> ${formatNumber(grandTotal)}</p>
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;