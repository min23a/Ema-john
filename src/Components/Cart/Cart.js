import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const orderDetails = props.cartDetail;
    // const totalPrice = orderDetails.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
    let totalPrice = 0;
    for(let i = 0 ; i < orderDetails.length; i++){
        const product = orderDetails[i];
        totalPrice = totalPrice + (product.price * product.quantity);
    }
    totalPrice = totalPrice.toFixed(2)
    let shipping = 0;
    if (orderDetails.length > 0) {
        shipping = 35;
    }
    const tax = (totalPrice / 10).toFixed(2);
    const total = parseFloat(totalPrice) + parseFloat(shipping) + parseFloat(tax);
    const grandTotal = total.toFixed(2);
    return (
        <div>
            <h5>Order Summery</h5>
            <h5>Items ordered: {orderDetails.length}</h5>
            <p>Total Price : $ {totalPrice}</p>
            <p>Shipping Cost : $ {shipping}</p>
            <p>Tax : ${tax}</p>
            <hr />
            <p>Grand Total : $ {grandTotal}</p>
            { props.showBtn === `Review Order` &&
                <button className="review-order">
                    <Link className="review-link" to="/review">{props.showBtn}</Link>
                </button>
            }
            { props.showBtn === `Place Order` &&
                <button className="review-order" onClick={props.onclick}>
                    <Link className="review-link" to="/checkout">{props.showBtn}</Link>
                </button>
            }
        </div>
    );
};

export default Cart;