"use client";

import { useState, useEffect } from "react";
import fetchdata from "../api/route";
import Item from "./Item";

export default function Page() {
  const [produc, setproduc] = useState([]);

  const funcc1 = () => {
    fetchdata().then((res) => setproduc(res));
  };

  useEffect(() => {
    funcc1();
  }, []);

  console.log(produc);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
      {produc.map((ele) => (
        //         <div className="border flex flex-col items-center  border-black">
        //         <h4 className="truncate  text-red-500 w-[50%] ">{ele.title}</h4>
        //    <img src={ele.image} width={100} />
        //         </div>

        <Item item={ele} />
      ))}
    </div>
  );
}
