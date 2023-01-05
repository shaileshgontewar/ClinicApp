import React, { useState } from "react";
import { createContext } from "react";
export const Data = createContext();

const Dataprovider = (props) => {
  const [name, setName] = useState([
    {
      id: 1,
      name: "R. J Mehta",
      clinicname: "xcent clinic",
      address: "Baily Rd, Dhaka Bangladesh",
      image: "./img/img11.jpg",
    },
    {
      id: 2,
      name: "S. J Shahu",
      clinicname: "shahu clinic",
      address: "Mahal Nagpur, India",
      image: "./img/img12.jpg",
    },
    {
      id: 3,
      name: "K. J Mehta",
      clinicname: "clinic",
      address: "Railway station Nagpur",
      image: "./img/home-img.png",
    },
    {
      id: 4,
      name: "S. J Shahu",
      clinicname: "shahu clinic",
      address: "Mahal Nagpur, India",
      image: "./img/img12.jpg",
    },
    {
      id: 5,
      name: "K. J Mehta",
      clinicname: "clinic",
      address: "Railway station Nagpur",
      image: "./img/home-img.png",
    },
    {
      id: 6,
      name: "S. G Mishra",
      clinicname: "clinic",
      address: "Railway station Mumbai",
      image: "./img/img11.jpg",
    },
  ]);
  return (
    <>
      <Data.Provider value={[name, setName]}>{props.children}</Data.Provider>
    </>
  );
};

export default Dataprovider;
