import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, price, seller, stock,key } = props.product;
    return (
        <div className="product">
            <div className="product_img">
                <img src={img} alt="" />
            </div>
            <div className="product_details">
                <h5>
                   <Link to={"/product/"+key}>{name}</Link>
                </h5>
                <br />
                <p> by {seller}</p><br />
                <b>${price}</b><br />
                <p>Only left in stock :<b>{stock}</b></p>
                {props.showBtn && <button onClick={() => props.handleAddCartBtn(props.product) } className="addToCart_btn">
                    <FontAwesomeIcon icon={faCartPlus} /> 
                    <span> </span>ADD TO CART</button>}
            </div>
        </div>
    );
};

export default Product;