import React,{useEffect, useState} from 'react'
import './App.css'
import { getDatabase ,push,ref,set,onChildAdded} from "firebase/database";
function App() {
  const[name,setname]=useState("")
  const[chat,setchats]=useState([])
  const[msg,setmsg]=useState()
  const db=getDatabase()
  const chatlistref=ref(db,'chat')
  useEffect(()=>{
    onChildAdded(chatlistref, (data) => {
setchats(chat=>[...chat,data.val()])
 
    });
  },[])
  function sendchat(){
  
    const chatref=push(chatlistref)
    set(chatref,{
name,message:msg
    })
    // const c=[...chat]

    // c.push({name,message:msg})
    // setchats(c)
    setmsg('')
  }
  return (
    <div>
      {name?null:
      <div>
        <input type="text" placeholder='Enter Your Name' onBlur={(e)=>setname(e.target.value)}/>
      </div>}
<h1>User:{name}</h1>
{
  name?
  <div>
<div className="chat-container">

{
  chat.map((item,index)=>(
    <div className={`container ${item.name===name? 'me':''}`}>
    <p className="chatbox">
      <strong>{item.name}:</strong>
      <span>{item.message}</span>
    </p>
  </div>
  ))
}
</div>
<div className="btm">
  <input type="text" placeholder='Enter Your Message' value={msg} onInput={(e)=>setmsg(e.target.value)} />
  <button className='btn' onClick={sendchat}>Send</button>
</div>
  </div>
:null}

      
    </div>
  ) 
}

export default App
