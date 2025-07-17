import Counter from './Letcount';
import Arr from './Arr';
import UserObj from './Userobject';
import User from './user';
import './App.css';
import { useState } from 'react';
function App() {
 let userName="mamani";
 let Name;
 const age = 22;
 const arrob=["iit"," uu"," du"," hjhjbj"];
 let Obj={email:"test@gmial.com", roll:12};
 const [clgname,setClgname]=useState();
 const [pw,setPw]=useState();
  return (
    <div>
    <Counter/>
    <User name={userName} age={age}/>
   <UserObj email={Obj.email} roll={Obj.roll}/>
    <User name={Name} age={age}/>
    <Arr college={arrob}/>
    <br/>
    <Arr college={arrob[0]}/>
    <form action="" method='Get'>
    <input type='text' onChange={(event)=>setClgname(event.target.value)} placeholder='Enter the college name:'></input>
    <input type='password' onChange={(event)=>setPw(event.target.value)} placeholder='Enter the password:'></input>
   
    <button>Submit</button>
     <p>{clgname}------{pw ? ('*'.repeat(pw.length-1)+pw.charAt(pw.length-1)):''}-----</p>
    <button onClick={()=>{setClgname(''); setPw('');}}>Clear</button>
    </form>
    </div>
  )
}

export default App;
