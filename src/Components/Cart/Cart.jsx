import React, { useEffect, useState } from "react";

const Cart = (props) => {
  const readtime = props.readtime;
  const order = props.order;
  const [time, setTime] = useState(readtime);
  useEffect(() => {
    const getreadtime = localStorage.getItem("readtime");
    setTime(getreadtime);
  }, [readtime]);
  return (
    <div>
      <div className="bg-red-200 rounded h-32 p-10 border-blue-300 border-2">
        <h4 className="text-2xl font-semibold text-blue-600">
          Spent time on read: {time} min
        </h4>
      </div>
      <div className="bg-green-200 rounded p-1 mt-5">
        <h1 className="m-10 text-2xl font-semibold">
          Bookmarks Blogs: {order.length}
        </h1>
        {order.map((ordered) => (
          <li>{ordered}</li>
        ))}
      </div>
    </div>
  );
};
export default Cart;
