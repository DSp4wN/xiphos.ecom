import React from 'react';
import { Link } from 'react-router-dom';
import './cascading.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { signin } from '../actions/useraction';

function SignInscreen(props) {

    const[email, setEmail]=useState('');
    const[password,setPassword]=useState('');
  const userSignin= useSelector(state=>state.userSignin);
  const{loading,userInfo,error}= userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if(userInfo){
        props.history.push("/");
    }
     return () => {
         //
     };
 }, [userInfo]);

 const submitHandler=(e)=>{
     e.preventDefault();
     dispatch(signin(email, password));
 }

    return (<div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>SIGN IN</h2>
                </li>
                <li>
                    {loading &&<div>loading....</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input type="email" name="email" id="email"  placeholder="Enter your Email" onChange={(e)=> setEmail(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter any password" onChange={(e)=> setPassword(e.target.value)}/>
                </li>
                <li>
                    <button type="submit" className="buten">SIGN IN</button>
                </li>
                <li>New to XIPHOS ? join us</li>
                <li><button className="buten"><Link className="buten1" to={"/register"} >Create Account</Link></button> </li>
            </ul>
        </form>
    </div>
    
    );
}
export default SignInscreen;