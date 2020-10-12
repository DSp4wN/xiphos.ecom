import React from 'react';
import Navbar from './quiz app/navbar';
import './quiz app/cascading.css'
import Index from './quiz app';
import { BrowserRouter, Route } from 'react-router-dom';
import Productscreen from './quiz app/productscreen';
import cartScreen from './quiz app/cartScreen';
import SignInscreen from './quiz app/signinscreen';
import Registerscreen from './quiz app/registerscreen';


function App(){


    return(
        <BrowserRouter>
        <div className="exos">
        <Navbar/>
        <Route path="/signin" component={SignInscreen}/>
        <Route path="/register" component={Registerscreen}/>
            <Route path="/products/:id" component={Productscreen}/>
            <Route path="/" exact={true} component={Index}/>
            <Route path="/cart/:id?" component={cartScreen}/>
        <div className="footer"><h4> @ All rights reserverd</h4></div>
        </div>
        </BrowserRouter>
    );}

export default App; 