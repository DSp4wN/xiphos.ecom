import React from 'react';
import { Link } from 'react-router-dom';
import './cascading.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { register } from '../actions/useraction';

function Registerscreen(props) {

    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password,setPassword]=useState('');
  const userRegister= useSelector(state=>state.userRegister);
  const{loading,userInfo,error}= userRegister;
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
     dispatch(register(name, email, password));
 }

    return (<div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>CREATE NEW ACCOUNT</h2>
                </li>
                <li>
                    {loading &&<div>loading....</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="name">
                    Name
                    </label>
                    <input type="name" name="name" id="name" placeholder="Enter your Name" onChange={(e)=> setName(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email" onChange={(e)=> setEmail(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="repassword">Re-Enter Password</label>
                    <input type="password" name="repassword" id="repassword" placeholder="Re-Enter your Password" />
                </li>
                <li>
                    <button type="submit" className="buten">REGISTER </button>
                </li>
                <li>Already Have An Account ?</li>
                <li><button className="buten"><Link className="buten1" to={"/signin"} > SIGN IN</Link></button> </li>
            </ul>
        </form>
    </div>
    
    );
}
export default Registerscreen;