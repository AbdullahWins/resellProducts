import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [bookedProducts, setBookedProducts] = useState();

  //   useEffect(() => {
  //     const url = `https://gamecheap-server.vercel.app/booked`;
  //     fetch(url, {
  //       headers: {
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setBookedProducts(data))
  //       .catch((err) => console.log(err));
  //   }, [user?.email]);

  return (
    <div className="py-6">
      <section className="text-center p-2">
        <h2 className="fs-2 mb-6">All Bookings</h2>
        <p>hey {user.displayName}, all your bookings are here!</p>
        <section></section>
      </section>
    </div>
  );
};

export default Bookings;
