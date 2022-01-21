import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
function UsersList() {
  const [users, setUsers] = useState([{}]);

  useEffect(
    () =>
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((err) => console.error(err)),
    []
  );

  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {users.map((el, key) => (
        <UserCard  user={el}  />
      ))}
    </div>
  );
}

export default UsersList;
// //router 5
// <Route path='/' component={Users}/>
// <Route path='/' render=()=> {<User/>}/>
// <switch></switch> //optional
// exact
// useParams() // nothing new , always great  


// //router 6
// <Route path='/'  element={<User/> }/>
// <Routes></Routes> //mandatory 
// y a plus d exact 
