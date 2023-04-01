import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import "./Body.css";

const Body = () => {
  const [datas, setDatas] = useState([]);
  const [readtime, setReadtime] = useState("");
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch("JSON.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  const doubleCLick = () => toast("Wow so easy!");

  const handleCart = (BlogTitle) => {
    console.log(BlogTitle);
    const exist = order.find((value) => value.BlogTitle === BlogTitle);
    if (exist) {
      console.log("click me");
      doubleCLick();
    }
    const newOrder = [...order, BlogTitle];
    setOrder(newOrder);
  };

  const additem = (time) => {
    const readingTime = JSON.parse(localStorage.getItem("readtime"));
    if (readingTime) {
      const sum = readingTime + time;
      localStorage.setItem("readtime", sum);
      setReadtime(sum);
    } else {
      localStorage.setItem("readtime", time);
      setReadtime(time);
    }
  };

  return (
    <div className="body">
      <div>
        {datas.map((data) => (
          <Card
            data={data}
            handleCart={handleCart}
            key={data.id}
            additem={additem}
          ></Card>
        ))}
      </div>
      <div className="w-full m-5">
        <Cart readtime={readtime} order={order}></Cart>
      </div>
    </div>
  );
};

export default Body;
