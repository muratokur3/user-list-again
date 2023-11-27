import React,{useState} from 'react';
import UserList from "./componenets/UserList"
import './App.css';
import UserDetail from './componenets/UserDetail';

function App() {
const [activeUserId,setActiveUserId]=useState(null);

  return (
    <div className="App">
   <div>
    <UserList setActiveUserId={setActiveUserId}/>
    </div>
   {activeUserId && <div>
    <UserDetail activeUserId={activeUserId}/>
   </div>}
    </div>
  );
}

export default App;
