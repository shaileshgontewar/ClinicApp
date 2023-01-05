import React, { useContext } from "react";
import { AiFillStar, AiFillHome } from "react-icons/ai";
import { Data } from "../../context/GlobalStore";

const Post = () => {
  const [data] = useContext(Data);
  return (
    <>
      <div className="container">
        <div className="post-container">
          {data.map((post) => {
            return (
              <div className="post" key={post.id}>
                <div className="info">
                  <img src={post.image} alt="d" />
                  <h3>{post.name}</h3>
                  <p>Not Available</p>
                  <div className="review">
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                  </div>
                </div>
                <div className="address">
                  <h3>
                    <span>
                      <AiFillHome className="add-icon" />
                    </span>
                    Place
                  </h3>
                  <b>{post.clinicname}</b>
                  <p>{post.address}</p>
                </div>
                <button className="online-btn">Online</button>
                <div className="btn-container">
                  <button className="view-btn">View more</button>
                  <button className="book-btn">Book now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Post;
