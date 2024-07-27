// To Filter Images Bases on Category on respective button in examples like samsung,iqoo,oneplus,nokia,huwaei.By Clicking on All it will display mobile of all brands.
// By clicking on specific brand it will display the specific brnad Image
import React from "react";
import { useState } from "react";
import s23 from "D:/dragzy/myapp/src/s23.png";
import nokia from "D:/dragzy/myapp/src/nokia.png";
import oneplus from "D:/dragzy/myapp/src/oneplus.png";
import iqoo from "D:/dragzy/myapp/src/iqoo.png";
import huwaei from "D:/dragzy/myapp/src/huwaei.png";
import Filter from "../Filter";
function Branding() {
  const allBrands = [
    {
      brand: "All",
    },
    {
      id: 1,
      pic: s23,
      brand: "Samsung",
    },
    {
      id: 2,
      pic: nokia,
      brand: "Nokia 3310",
    },
    {
      id: 3,
      pic: oneplus,
      brand: "Oneplus 12",
    },
    {
      id: 4,
      pic: iqoo,
      brand: "Iqoo 12",
    },
    {
      id: 5,
      pic: huwaei,
      brand: "Huwaei P30Pro",
    },
  ];

  const [Brands, setBrands] = useState(allBrands);
  function FilterBrands(item) {
    const FinalBrands = allBrands.filter((val) => {
      return val.brand === item;
    });
    if (item != "All") {
      setBrands(FinalBrands);
    } else {
      setBrands(allBrands);
    }
  }
  return (
    <>
      <button onClick={() => FilterBrands("All")}>All Brands</button>
      <button onClick={() => FilterBrands("Samsung")}>Samsung S23 Ultra</button>
      <button onClick={() => FilterBrands("Huwaei P30Pro")}>Huwaei</button>
      <button onClick={() => FilterBrands("Iqoo 12")}>Iqoo Neo 12 Pro</button>
      <button onClick={() => FilterBrands("Nokia 3310")}>Nokia 3310</button>
      <button onClick={() => FilterBrands("Oneplus 12")}>ONeplus 12</button>

      <div>
        {Brands.map((val) => {
          return <img src={val.pic} alt={val.id}/>;
        })}
      </div>
    </>
  );
}

export default Branding;
