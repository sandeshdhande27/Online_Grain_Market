



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
        Your Orderlist
      </h1>

      <div className="container-fluid">
        <table class="table table-hover table-danger">
          <thead>
            <tr>
              <th className="text-black" scope="col">
                Order Id
              </th>

              {/* <th className="text-black" scope="col">
                First Name
              </th>
              <th className="text-black" scope="col">
                Last Name
              </th>
              <th className="text-black" scope="col">
                Address
              </th>
              <th className="text-black" scope="col">
                Email
              </th>
              <th className="text-black" scope="col">
                Contact No
              </th> */}




              <th className="text-black" scope="col">
                Product Name
              </th>
              <th className="text-black" scope="col">
                Item Price
              </th>
              <th className="text-black" scope="col">
                Shipping Price
              </th>
              <th className="text-black" scope="col">
                Tax Price
              </th>
              <th className="text-black" scope="col">
                Total Price
              </th>
              <th className="text-black" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {result.map((list, index) => (
              <tr>
                <td>{list.coid}</td>

                {/* <td>{list.firstName}</td>
                <td>{list.lastName}</td>
                <td>{list.city}</td>
                <td>{list.email}</td>
                <td>{list.phone}</td>
 */}

                <td>{list.productName}</td>
                <td>{list.itemsPrice}</td>
                <td>{list.shippingPrice}</td>
                <td>{list.taxPrice}</td>
                <td>{list.totalPrice}</td>
                
                
                <td className="text-black">
                 <button className="text-light bg-success"><b>{list.status}</b></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConsumerFooter />
    </div>
  );
}
