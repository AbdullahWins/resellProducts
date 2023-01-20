import React, { useEffect, useState } from "react";
import Buyers from "./AllUsers/Buyers";
import Sellers from "./AllUsers/Sellers";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch(`https://gamecheap-server.vercel.app/allusers`)
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);
  return (
    <div>
      <Sellers allUsers={allUsers}></Sellers>
      <hr />
      <Buyers allUsers={allUsers}></Buyers>
    </div>
  );
};

export default Users;
