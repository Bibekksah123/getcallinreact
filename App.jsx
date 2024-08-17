import axios from 'axios'
import './App.css'
import { useState } from 'react';




function App() {
  const [user, setuser] = useState([])
const getuserdata=async()=>{
let res= await axios.get("https://jsonplaceholder.typicode.com/users");
const dataget=res.data;
console.log(dataget);
setuser(dataget);

}
  return (
    <>
    <div className="data" onClick={getuserdata}>Get-data</div>
    <div className="calldata">
      <ul>
       {user.map((e)=>{
           return <li key={e.id}>{e.username}---{e.name}---{e.email}--<a href='explore'></a></li>
  
          
        })}
      </ul>
    </div>
    </>
  )
}

export default App
