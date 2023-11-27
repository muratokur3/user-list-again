import React,{useEffect,useState} from 'react'
import axios from 'axios'

function UserDetail({activeUserId}) {
    const [loading, setLoading]=useState(true)
    const [users,setUsers]=useState(null)

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
        .then(res=>setUsers(res.data))
        .finally(()=>setLoading(false))
    },[activeUserId])
  return (
    <div>
        <h2>Detay</h2>
        {loading && <h3>loading...</h3>}
        <div>
            {JSON.stringify(users, null ,2)}
        </div>

    </div>
  )
}

export default UserDetail