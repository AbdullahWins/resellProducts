import React from "react";
import User from "../User";

const Sellers = ({ allUsers }) => {
  return (
    <div className="py-6">
      <h2 className="fs-2 text-center mb-6">All Sellers</h2>
      <section>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map(
              (oneUser) =>
                oneUser?.isSeller && (
                  <User key={oneUser._id} oneUser={oneUser}></User>
                )
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Sellers;
