import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = () => {
    const [Carts, setCarts] = useState([]);
    const handlePlaceOrder = () => {
        processOrder();
        setCarts([]);
    }
    const handleRemove = (productKey,key) => {
        removeFromDatabaseCart(productKey);
        const updatedCart = Carts.filter( x => x.key !== key);
        setCarts(updatedCart);
    };
    useEffect(() => {
        const dataCart = getDatabaseCart();
        const productData = Object.keys(dataCart);
        const productDb = productData.map(key => {
            const productF = fakeData.find(y => y.key === key);
            productF.quantity = dataCart[key];
            return productF;
        });
        setCarts(productDb);
    }, [])
    return (
        <div className="review">
            <div className="review-box">
                {
                    Carts.map(z => <ReviewItem handleRemove={handleRemove} Product={z} key={z.key}></ReviewItem>)
                }
            </div>
            <Cart onclick={handlePlaceOrder} showBtn="Place Order" cartDetail={Carts}></Cart>
        </div>
    );
};

export default Review;