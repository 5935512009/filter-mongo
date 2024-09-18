import React,{useState, useEffect} from 'react'
import axios from 'axios'
function Filter() {
  const [items,setItems] = useState([]);
  const [search,setSearch] = useState('');
  useEffect(()=>{
    axios
      .get("http://localhost:4001/api/api/blog")
      .then((res)=>{
        setItems(res.data);
       // console.log(res.data);
      })
      .catch((error)=>{
        console.log("this error is" , error);
      })
  },[]);
  console.log(search)
  return (
    <div>
      <input
        onChange={(e)=> setSearch(e.target.value)}
        />
        {items.filter((item)=>{
          return search.toLowerCase() === ''
          ?item:item.name.toLowerCase().includes(search);
        }).map((item,index)=>(
        <div key={index}>
          <p>name  :{item.name}</p><br/>
          <p>des   :{item.description}</p><br/>
          <p>tools :{item.tools}</p><br/>
          <p>master:{item.master}</p><br/>
          ================================
        </div>
      ))}
      
    </div>
  )
}

export default Filter
