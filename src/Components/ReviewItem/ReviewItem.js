import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const product = props.Product
    const { img ,name, price, seller, stock, quantity, key } = product;
    return (
        <div id={key} className="review-item">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="detail">
                <h3>{name}</h3>
                <p> Price : ${price}</p>
                <p>Seller : {seller}</p>
                <p>Quantity : {quantity}</p>
                <p>In Stock : {stock}</p>
                <button onClick={() => props.handleRemove(props.Product.key,key)} className="remove">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;