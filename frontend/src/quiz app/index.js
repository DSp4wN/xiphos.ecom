import React from 'react';
import './cascading.css';
import logo1 from './images/download.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';


function Index(props){

 const productList = useSelector(state => state.productList);
 const {products, loading, error} = productList;
 const dispatch = useDispatch();

 useEffect(() => {
    dispatch(listProducts())
     return () => {
         //
     };
 }, [])

    return(
        loading?<div>loading....</div>:
        error? <div>{error};</div>:

        <div className="g-container">
            <div className="content">

            <ul className="products">
                {
                    products.map(product => 
                    <li key={product._id}>
                         <div className="product">
                        <img className="product-image" src={logo1} />
                        <div className="product-name">
                            <Link to={'/products/'+ product._id}>{product.name}</Link></div>
                        <div className="product-price">Rs {product.price}</div>
                        <div className="product-rating">{product.rating} stars (out of {product.review} reviews)</div>
                        </div></li>
                        )
                }
               </ul>
        </div>
        </div>
    );}

export default Index;