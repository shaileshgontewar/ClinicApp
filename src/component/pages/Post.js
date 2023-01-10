import React, { useState, useEffect } from "react";
import { AiFillStar, AiFillHome } from "react-icons/ai";
// import { Data } from "../../context/GlobalStore";
import axios from "axios";
const client = axios.create({
  baseURL: "https://api.soowgood.com/api/Searches/Provider",
});

const Post = () => {
  // const [data] = useContext(Data);
  const [post, setPost] = useState([]);
  console.log(post);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await client.post(
          "/",

          {
            UserRole: "Provider",
          },
          { signal }
        );
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return () => {
      console.log("data unmounted....");
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="post-container">
          {post.map((post) => {
            return (
              <div className="post" key={post.providerId}>
                <div className="info">
                  <img
                    src={
                      post.providerImage
                        ? post.providerImage
                        : "./img/img11.jpg"
                    }
                    alt="doct"
                  />
                  <h3>{post.name}</h3>
                  <p>
                    {post.service < 10
                      ? post.service
                        ? post.service
                        : "Not Available"
                      : post.service.slice(0, 15)}
                  </p>
                  <div className="review">
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <sub>{post.totalreview} review</sub>
                  </div>
                </div>
                <div className="address">
                  <h4>
                    <span>
                      <AiFillHome className="add-icon" />
                    </span>
                    Place
                  </h4>
                  <b>
                    {post.clinicName < 15
                      ? post.clinicName
                      : post.clinicName.slice(0, 16)}
                  </b>
                  <p>
                    {post.clinicAddress < 20
                      ? post.clinicAddress
                      : `${post.clinicAddress.slice(0, 50)}...`}
                  </p>
                </div>
                <button className="online-btn">{post.appointmentType}</button>
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
