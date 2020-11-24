import Axios from "axios";
import React, {useState,useEffect} from "react";
import User from './User';
import "./style.css";
const UserList=()=>{

const [list, setlist] = useState([]);

useEffect(()=>{
    function fetchData(){
Axios.get("https://jsonplaceholder.typicode.com/users").
then(function(res){setlist(res.data);console.log("liste",res); console.log(res.data);
}).catch(err=>console.log(err));
}
fetchData();
},[]);

return(<>
    <h1>Users List</h1>
    <div className="container">
        {list.map(item=><User data={item}/>)}
    </div>
    </>
)





}
export default UserList;