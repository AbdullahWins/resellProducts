import React from "react";

const User = ({ oneUser }) => {
  const { name, email } = oneUser;
  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{email}</td>
      <td>DELETE</td>
    </tr>
  );
};

export default User;
