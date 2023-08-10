import React, { useState, useEffect } from "react";
import axios from "axios";
import Itemcard from "./Itemcard";
import farm from "../Images/image2.jpg";

import ConsumerNavbar from "./ConsumerNavbar";
import ConsumerFooter from "./ConsumerFooter";
export default function ConsumerCropInfo() {
  const [product, setProduct] = useState([{}]);

  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "CONSUMER"
    ) {
      window.location.href = "/login";
    }
    async function abc(){
      let result = await axios.get(`http://localhost:7070/user/showCropInfo`);
      let pro = result.data;
  
      setProduct(pro);
    }
    abc();
  }, []);

  return (
    <>
      {" "}
      <ConsumerNavbar />
      <div className="p-0 m-0">
        <div
          className="row align-items-center"
          style={{
            backgroundImage: "url(" + farm + ")",
            backgroundSize: "cover",
            height: "200%",
            //width: "100%",
            opacity: 1,
          }}
        >
          <div className="block col-12 m-5">
            <div className="row">
              {product.map((item) => {
                return (
                  //column
                  <div className="col-3 mb-2">
                    <Itemcard item={item} key={item.p_Id} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ConsumerFooter />
    </>
  );
}
