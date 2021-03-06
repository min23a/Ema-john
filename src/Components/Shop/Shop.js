import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const Products12 = fakeData.slice(0, 12);
    const [Products, setProducts] = useState(Products12);
    const [Carts, setCarts] = useState([]);
    const handleAddCartBtn = (product) => {
        let count = 1;
        product.quantity = count;
        const addedProduct = [...Carts,product];
        const sameProduct = addedProduct.filter(x => x.key === product.key);
        count = sameProduct.length;
        setCarts(addedProduct);
        addToDatabaseCart(product.key, count);
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
        <div className="shop">
            <div className="products_container">
                {
                    Products.map(product => <Product showBtn={true} product={product} key={product.key} handleAddCartBtn={handleAddCartBtn}></Product>)
                }
            </div>
            <div className="mini_cart">
                <Cart showBtn="Review Order" cartDetail={Carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;