import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";


import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";





export default function AdminOrderList() {
  const [result, setResult] = useState([{}]);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      sessionStorage.getItem("role") === "null" ||
      sessionStorage.getItem("role") != "ADMIN"
    ) {
      navigate("/login");
    }

    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(
      `http://localhost:7070/admin/showOrder`
    );
    setResult(response.data);
  };
  const myfun = async (orderId) => {
    console.log(">>>>>" + orderId);
    const userOrder = { coid: orderId };
    const res = await axios.post(
      "http://localhost:7070/admin/getOrderById",
      userOrder
    );
    sessionStorage.setItem("orderEmail", res.data.email);
    let orderEmail = sessionStorage.getItem("orderEmail");

    console.log(res.data.firstName);
    console.log(res.data.coid);
    const user1 = {
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      email: res.data.email,
      phone: res.data.phone,
      city: res.data.city,
      state: res.data.state,
      productName: res.data.productName,
      itemsPrice: res.data.itemsPrice,
      taxPrice: res.data.taxPrice,
      shippingPrice: res.data.shippingPrice,
      totalPrice: res.data.totalPrice,
      status: "Dispatch",
    };
    console.log(user1);
    if (res.data.status === "Order Placed") {
      const user1 = {
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        phone: res.data.phone,
        city: res.data.city,
        state: res.data.state,
        productName: res.data.productName,
        itemsPrice: res.data.itemsPrice,
        taxPrice: res.data.taxPrice,
        shippingPrice: res.data.shippingPrice,
        totalPrice: res.data.totalPrice,
        status: "Dispatch",
        coid: res.data.coid,
      };
      console.log("--------------------------------");
      console.log(user1);

       const user2 = await axios.post(
         "http://localhost:7070/admin/editOrderStatus",
         user1
       );

       //msg send in email Your Order Is Been Dispatched
       const user3 = await axios.post(
         `http://localhost:7070/admin/msg/${orderEmail}`,
         user1
       );
    }

    getAllUsers();
  };
  const myfun2 = async (orderId) => {
    console.log(">>>>>" + orderId);
    const userOrder = { coid: orderId };
    const res = await axios.post(
      "http://localhost:7070/admin/getOrderById",
      userOrder
    );
    sessionStorage.setItem("orderEmail", res.data.email);
    let orderEmail = sessionStorage.getItem("orderEmail");

    const user1 = {
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      email: res.data.email,
      phone: res.data.phone,
      city: res.data.city,
      state: res.data.state,
      productName: res.data.productName,
      itemsPrice: res.data.itemsPrice,
      taxPrice: res.data.taxPrice,
      shippingPrice: res.data.shippingPrice,
      totalPrice: res.data.totalPrice,
      status: "Dispatch",
    };

    sessionStorage.setItem("orderId", res.data.coid);

     const user3 = await axios.post(
       `http://localhost:7070/admin/otpgenerator/${orderEmail}`,
       user1
     );

    if (res.data.status === "Dispatch") {
       navigate("/deliveryOtpVerify");
     }
  };

  return (
    <div>
      <AdminNavbar />

      <div className="container-fluid mt-4">
        <table className="table table-hover table-danger">
          <thead>
            <tr>
              <th className="text-black m-0" scope="col">
                Order Id
              </th>
              <th className="text-black" scope="col">
                Name
              </th>
              <th className="text-black" scope="col">
                Phone No
              </th>
              <th className="text-black" scope="col">
                Product Name
              </th>
              <th className="text-black" scope="col">
                Shipping Price
              </th>
              <th className="text-black" scope="col">
                Total Price
              </th>
              <th className="text-black" scope="col">
                Address
              </th>
              <th className="text-black" scope="col">
                State
              </th>

              { <th className="text-black" scope="col">
                Status
              </th> }
              <th className="text-primary" scope="col"></th>
              <th className="text-primary" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {result.map((list, index) => (
              <tr>
                <td>{list.coid}</td>
                <td>
                  {list.firstName} {list.lastName}
                </td>
                <td>{list.phone}</td>
                <td>{list.productName}</td>
                <td>{list.shippingPrice}</td>
                <td>{list.totalPrice}</td>
                <td>{list.city}</td>
                <td>{list.state}</td>
                { <td className="text-info">
                  <b>{list.status}</b>
                </td> }
                { <td className="text-info">
                  <input
                    type="button"
                    onClick={() => {
                      myfun(list.coid);
                    }}
                    className="btn btn-success mb-4"
                    value="Dispatch"
                  />
                </td> } 
                {/* { <td>
                  <input
                    type="button"
                    onClick={() => {
                      myfun2(list.coid);
                    }}
                    className="btn btn-success mb-4"
                    value="Delivered"
                  />
                </td> } */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AdminFooter />
    </div>
  );
}
