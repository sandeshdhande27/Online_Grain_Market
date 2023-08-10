



import React, { useEffect, useState } from "react";
import axios from "axios";
import ConsumerNavbar from "./ConsumerNavbar";
import ConsumerFooter from "./ConsumerFooter";
export default function ConsumerOrder() {
  const [result, setResult] = useState([{}]);

  let id = sessionStorage.getItem("id");
  let firstName = sessionStorage.getItem("firstName");
  let lastName = sessionStorage.getItem("lastName");

  useEffect( () => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "CONSUMER"
    ) {
      window.location.href = "/login";
    }

    async function abc(){
      let result = await axios.get(
        `http://localhost:7070/consumer/showConsumerOrder/${id}`
      );
      let pro = result.data;
  
      setResult(pro);
    }
    abc();
  }, []);
  return (
    <div>
      <ConsumerNavbar />
      <h1 className="text-center text-danger">
        Welcome {firstName} {lastName}!! 
        Your All Bills
      </h1>

      <div className="container-fluid">
        <div class="table table-hover table-">
          
            <ul>

              
              
              
            </ul>
          
          <div className="">
            {result.map((list, index) => (
              <ul>
                
                

                <hr style={{borderWidth:"70%",  backgroundColor:"red"}}/>

                <li style={{display:"flex", listStyle:"none"}}>
                 <li className="text-danger pl-6" scope="col" >
                <b>SHREE NIMJAYMATA DHANYA BHANDAR,SAVDA</b>
              </li></li>


                <li style={{display:"flex", listStyle:"none"}}>
                
                 <li className="text-black" style={{paddingLeft:"400px"}} scope="col">
                <b>BILLING ID: </b>
              </li>
                <li className="pl-2"><b>{list.coid}</b></li></li>



              <li style={{display:"flex", listStyle:"none"}}>
                 <li className="text-black pl-5" scope="col">
                <b>Consumer Name:</b>
              </li>

                <li  className="pl-3"><b>{list.firstName}</b></li>
                <li className="pl-1"><b>{list.lastName}</b></li></li>
                
                <li style={{display:"flex", listStyle:"none"}}>
                 <li className="text-black pl-5" scope="col">
                Address Name:
              </li>
                <li style={{paddingLeft:"170px"}}>{list.city}</li></li>
                <li style={{display:"flex", listStyle:"none"}}>
                 <li className="text-black pl-5" scope="col">
                Email:
              </li>
                <li style={{paddingLeft:"235px"}}>{list.email}</li></li>
                <li style={{display:"flex", listStyle:"none"}}>
                 <li className="text-black pl-5" scope="col">
                Contach No:
              </li>
                <li style={{paddingLeft:"188px"}}>{list.phone}</li></li>


               <li style={{display:"flex", listStyle:"none"}}>
                 <li className="text-black pl-5" scope="col">
                Product Name:
              </li>
                <li style={{paddingLeft:"170px"}}>{list.productName}</li></li>

                <li style={{display:"flex", listStyle:"none"}}>
                  <li className="text-black pl-5" scope="col">
                Item Price:
              </li>
                <li style={{paddingLeft:"200px"}}>{list.itemsPrice}</li></li>

                <li style={{display:"flex", listStyle:"none"}}>
                  <li className="text-black pl-5" scope="col">
                Shipping Price:
              </li>
                <li style={{paddingLeft:"170px"}}>{list.shippingPrice}</li></li>

                <li style={{display:"flex", listStyle:"none"}}>
                   <li className="text-black pl-5" scope="col">
                Tax Price:
              </li>
                <li style={{paddingLeft:"205px"}}>{list.taxPrice}</li></li>
                <hr style={{width:"35%",  backgroundColor:"grey"}}/>


               
               

                <li style={{display:"flex", listStyle:"none"}}>
                  <li className="text-danger pl-5" scope="col">
                <b>Total Price:</b>
              </li>
                <li className="pl-3"><b>{list.totalPrice}</b></li></li>
                
                {/* <li style={{display:"flex", listStyle:"none"}}>
                  <li className="text-black" style={{paddingLeft:"400px"}} scope="col">
                <b>Status:</b>
              </li>
                <li className="text-black pl-3">
                 <button className="text-light bg-success"><b>{list.status}</b></button>
                </li></li> */}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <ConsumerFooter />
    </div>
  );
}





