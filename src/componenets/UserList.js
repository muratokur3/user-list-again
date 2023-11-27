import React,{useState,useEffect} from 'react'
import axios from 'axios'


function UserList({setActiveUserId}) {
  const [user,setUser]=useState([]);
  const [loading,setLoading]=useState(true);
  return (
    <div className='user-list'>
        <h2>Kullanıcılar</h2>
        {useEffect(()=>{
            axios(`https://jsonplaceholder.typicode.com/users`)
            .then(res=>setUser(res.data))
            .finally(res=>setLoading(false))
        },[])}
{loading && <h6>loading...</h6>}
<ul>
  {user.map((user)=>(
    <li key={user.id} onClick={()=>setActiveUserId(user.id)}>{user.name}</li>
  ))}
</ul>
    </div>
  )
}

export default UserList