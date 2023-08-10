import axios from "axios";
import React, { useContext } from "react";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  let city = sessionStorage.getItem("city");
  let email = sessionStorage.getItem("email");
  let firstName = sessionStorage.getItem("firstName");
  let lastName = sessionStorage.getItem("lastName");
  let phone = sessionStorage.getItem("phone");
  let state = sessionStorage.getItem("state");

  console.log("-----------");
  const saveOrder = () => {
    console.log(sessionStorage.getItem("role"));
    let email = sessionStorage.getItem("email");
    if (sessionStorage.getItem("role") === null) {
      return (window.location.href = "/login");
    }
    cartItems.forEach((element) => {
      console.log(element);
    });
    console.log("-----------");
    let sentOrder = {
      productName: cartItems[0].productName,
      itemsPrice: itemsPrice,
      taxPrice: taxPrice,
      shippingPrice: shippingPrice,
      totalPrice: totalPrice,
      city: city,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      state: state,
    };
    console.log(cartItems);
    console.log(cartItems[0].productName);
    axios
      .post(
        `http://localhost:7070/consumer/saveCombineOrder/${email}`,
        sentOrder
      )
      .then(
        (response) => {
         alert("ORDER SUCCESSFULLY ADDED ");
          console.log(response.data);
        },
        (error) => {
          console.log(error);
          alert(" ERROR : order failed");
        }
      );
  };

  return (
    <div>
      {/* <section className="py-4 container"> */}
      <div className="row justify-content-center text-center">
        <div className="col-6">
          <h1 className="text-center">Cart</h1>
          <h5 className="text-center text-info">
            {cartItems.length === 0 && (
              <div className="text-center">Cart is Empty</div>
            )}
          </h5>

          {cartItems.map((item) => (
            <div key={item.p_Id}>
              <img src={item.imageName} height="150" width={200}></img>
              <div><b>{item.productName}</b></div>
              <div>
                <button onClick={() => props.onAdd(item)}>+</button>
                <button onClick={() => props.onRemove(item)}>-</button>
              </div>
              <div>
                {item.qty}x Rs.{item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row mb-2">
            <div className="col-2">Items Price</div>
            <div className="col-1 ">Rs.{itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row mb-2">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">RS.{taxPrice.toFixed(2)}</div>
          </div>
          <div className="row mb-2">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">
              RS.{shippingPrice.toFixed(2)}
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>Rs.{totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />

          <div className="row mb-2">
            <div className=""><b><i>Once you placed order after that you can not cancel it.</i></b></div>
            
          </div>


          <div className="row">
            <button onClick={saveOrder}>Order It</button>
          </div>
        </>
      )}
      {/* </section> */}
    </div>
  );
};

export default Cart;
