import React, { useState, useEffect } from "react";
import axios from "axios";
//import cardback from "../Consumer/cardback.jpg";
import Itemcard from "../Consumer/Itemcard";
import Header from "../Home/Header";
//import images from "../Images/bg.jpeg";
import farm from "../Images/image2.jpg";

export default function CropInfo() {
  const [product, setProduct] = useState([{}]);

  useEffect( () => {
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
      <Header />
      <div className="p-0 m-0">
        <div
          className="row align-items-center"
          style={{
           backgroundImage: "url(" + farm + ")",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
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
    </>
  );
}
