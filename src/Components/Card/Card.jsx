import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { AuthorImg, AuthorName, BlogTitle, ReadTime, id, img, PublishDate } =
    props.data;
  const additem = props.additem;
  const handleCart = props.handleCart;
  const doubleCLick = props.doubleCLick;
  return (
    <div className="card h-100 w-100 bg-base-100 shadow-xl my-5">
      <figure>
        <img className="w-full h-full" src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-14 h-14">
              <img className="w-16 h-14 rounded-full " src={AuthorImg} alt="" />
            </div>
            <div>
              <p className="font-bold">{AuthorName}</p>
              <p>{PublishDate}</p>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleCart(BlogTitle)}
            className="btn btn-ghost"
          >
            {ReadTime} min read{" "}
            <FontAwesomeIcon className="m-2" icon={faBookmark} />
          </button>
        </div>
        <h2 className="card-title">{BlogTitle}</h2>
        <div>
          <p>#beginners #programming</p>
        </div>
        <span>
          <p
            onClick={() => additem(ReadTime)}
            className="underline text-xl font-semibold text-blue-500"
          >
            MARK AS READ
          </p>
        </span>
      </div>
    </div>
  );
};

export default Card;
