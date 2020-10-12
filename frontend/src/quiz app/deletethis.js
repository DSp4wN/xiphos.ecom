import React from 'react';
import { useState } from 'react';


function Practice() {

const[name, setname]=useState("jhon");
const[input, setinput]=useState("");


// const numbers =[1,2,3,4,5,6,7,8,9,10];
// const[table, settable]=useState([]);
// const[input1, setinput1]= useState([])

// const[result, setresult]=useState("");
// const[input2, setinput2]= useState("");
// const[result1, setresult1]=useState("");


const onChangeHandler=(event) => {
     setinput(event.target.value);
}
const onClickHandler=(event) => {
    setname(input);
     setinput("");
}



// const onChangeHandler1=(event) =>{
//     setinput1(event.target.value);
// }
// const onClickHandler1=(event) => {
//     settable( numbers.map((number) =><li>{number*input1}</li>));
// }

// const butt1=(event) =>{
//     setresult("welcome fellow ADULT")
// }
// const butt2=(event) =>{
//     setresult("get lost child")
// }
// const onChangeHandler2=(event) =>{
//     setinput2(event.target.value)
    
//     if(event.target.value === "y"){
//         setresult1("welcome fellow ADULT");
//     } else if(event.target.value === "n"){
//         setresult1("fuck off child");
//     }
//     else setresult1("invalid input idiot");
// }

    return(
        <div>
        <h1>practice component of {name}</h1>
        <input type="text" placeholder="enter your name" onChange={onChangeHandler} value={input}/>
        <button onClick={onClickHandler}>submit</button>
        


         {/* <h1>get multiplication table of :</h1>
         <input type="text" placeholder="enter number" onChange={onChangeHandler1} value={input1}/>
         <button onClick={onClickHandler1}>check</button>
         <ul>{table}</ul> */}

         {/* <h1>are you abobe 18 years of age ?</h1>
         <input type="text" placeholder="write y or n" onChange={onChangeHandler2} value={input2}/>
         <button onClick={butt1}>yes</button>
         <button onClick={butt2}>no</button><br/>
            <h1>{result}</h1>
            <h1>{result1}</h1> */}


        

        </div>
    )
}

export default Practice;