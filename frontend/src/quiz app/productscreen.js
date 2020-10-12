import React from 'react';
import logo1 from './images/download.jpg';
import { Link } from 'react-router-dom';
import './cascading.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detailsProduct } from '../actions/productActions';
import { useState } from 'react';

function Productscreen(props) {
  const [qty, setqty] =useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const{product,loading,error} = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id))
     return () => {
         //
     };
 }, [])

 const handleAddToCart = () =>{
   props.history.push("/cart/"+props.match.params.id + "?qty=" +qty)
 }

    return (
    <div>
                 <div className="back-to">
                   <Link to="/">Back to homepage</Link>
                 </div>
                 {loading? <div>loading....</div>:
                   error?<div>{error}</div> :
                   (
                    <div className="details">
       
       <div className="details-img">
               <img className="product-img" src={logo1} alt="img"/>
       </div>
       <div className="details-info">
          <ul>
            <li>
              <h1> {product.name} </h1>
           </li>
            <li>
              ( {product.rating} stars out of {product.review} reviews )
           </li>
            <li>
               <h3>Rs {product.price}</h3>
           </li>
            <li>
              Description: {product.description}
            </li>
          </ul>
       </div>
       <div className="details-action">
           <ul>
               <li>
                  <h3>Price : Rs {product.price}</h3> 
               </li>
               <li>
                   Status : {product.countINstock>0 ?"Available":"Unavailable"}
               </li>
               <li>
                  <h4> Qty : <select value={qty} onChange={(e) => {setqty(e.target.value)}}>
                       {[...Array(product.countINstock).keys()].map(x=>
                       <option value={x+1}>{x+1}</option>
                       )}
                   </select></h4>
               </li>
               <li>
                 {product.countINstock>0 ?
                   <button onClick={handleAddToCart} className="button">Add to cart</button>
                   :
                   <div>OUT OF STOCK</div>}
               </li>
           </ul>
       </div>
  </div>
                   )
                  }
               
         </div>
    );
}
export default Productscreen;