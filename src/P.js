import React from "react";
import P1 from"./P1";
import nigga from "./nigga.png";
import viper from "./viper.png";
import mommy from "./mommy.png";

function Task2() {
  const product = [
    {
      pic: nigga,
      name: "Fire Nigga",
      price: 1700000000,
    },
    {
      pic: viper,
      name: "Viper Thicc",
      price: 34000000,
    },
    {
      pic: mommy,
      name: "Sage Mommy",
      price: 110000000,
    },
  ];
  return (
    <>
      <P1 info={product}/>
    </>
  );
}

export default Task2