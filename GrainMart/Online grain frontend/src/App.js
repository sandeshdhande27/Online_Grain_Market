import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import AdminHome from "./Components/Admin/AdminHome";
import { UserDetails } from "./Components/Admin/UserDetails";
import AdminFooter from "./Components/Admin/AdminFooter";
import AdminAboutUs from "./Components/Admin/AdminAboutUs";
import AddDeliveryBoy from "./Components/Admin/AddDeliveryBoy";

import AdminOrderList from "./Components/Admin/AdminOrderList";

import Login from "./Components/LogFiles/Login";
import Register from "./Components/LogFiles/Register";
import PasswordChange from "./Components/LogFiles/PasswordChange";
import EmailVerify from "./Components/LogFiles/EmailVerify";
import OtpVerify from "./Components/LogFiles/OtpVerify";
import AboutUs from "./Components/Home/MemberImages/AboutUs";

import Product from "./Components/Product/Product";
import OrganicProduct from "./Components/Product/OrganiProduct";
import NonOrganicProduct from "./Components/Product/NonOrganicProduct";

import FarmerHome from "./Components/Farmer/FarmerHome";
import AddFarmProducts from "./Components/Farmer/AddFarmProducts";
import FarmerAddImage from "./Components/Farmer/FarmerAddImage";
import FarmerProfile from "./Components/Farmer/FarmerProfile";
import FarmerShowProduct from "./Components/Farmer/FarmerShowProduct";
import FarmerShowCropInfo from "./Components/Farmer/FarmerShowCropInfo";
import AddCropimage from "./Components/Farmer/AddCropimage";
import AddCropInfo from "./Components/Farmer/AddCropInfo";
import CropInfo from "./Components/Home/CropInfo";
import FarmerOrderList from "./Components/Farmer/FarmerOrderList";

import ConsumerHome from "./Components/Consumer/ConsumerHome";
import ConsumerProfile from "./Components/Consumer/ConsumerProfile";
import ConsumerOrganicProduct from "./Components/Consumer/ConsumerOrganicProduct";
import ConsumerNonOrganicProduct from "./Components/Consumer/ConsumerNonOrganicProduct";
import ConsumerOrder from "./Components/Consumer/ConsumerOrder";
import ConsumerBillGenerator from "./Components/Consumer/ConsumerBillGenerator";
import ConsumerCropInfo from "./Components/Consumer/ConsumerCropInfo";

import Home from "./Components/Home/Home";

import DeliveryHome from "./Components/Delivery Boy/DeliveryHome";
import DeliveryProductInfo from "./Components/Delivery Boy/DeliveryProductInfo";
import DeliveryProfile from "./Components/Delivery Boy/DeliveryProfile";
import DeliveryOtpVerify from "./Components/Delivery Boy/DeliveryOtpVerify";
import DeliveryCropInfo from "./Components/Delivery Boy/DeliveryCropInfo";

export default function App() {
  return (
    <div>
      {/*BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/UserDetails" element={<UserDetails />} />
          <Route path="/addDeliveryBoy" element={<AddDeliveryBoy />} />

          <Route
            path="/adminOrderList"
            element={<AdminOrderList />}
          ></Route>

          <Route path="/AdminFooter" element={<AdminFooter />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="" element={<AdminHome />} />
          <Route path="/passwordChange" element={<PasswordChange />}></Route>
          <Route path="/emailVerify" element={<EmailVerify />}></Route>
          <Route path="/otpVerify" element={<OtpVerify />}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>

          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/organicProduct" element={<OrganicProduct />}></Route>
          <Route
            path="/nonOrganicProduct"
            element={<NonOrganicProduct />}
          ></Route>

          <Route path="/adminhome" element={<AdminHome />}></Route>

          <Route path="/farmerhome" element={<FarmerHome />}></Route>
          <Route path="/addFarmProducts" element={<AddFarmProducts />}></Route>
          <Route path="/farmerAddImage" element={<FarmerAddImage />}></Route>
          <Route path="/farmerProfile" element={<FarmerProfile />}></Route>
          <Route
            path="/farmerShowProduct"
            element={<FarmerShowProduct />}
          ></Route>
          <Route
            path="/farmerShowCropInfo"
            element={<FarmerShowCropInfo />}
          ></Route>
          <Route path="/addCropImage" element={<AddCropimage />}></Route>
          <Route path="/addCropInfo" element={<AddCropInfo />}></Route>
          <Route path="/cropInfo" element={<CropInfo />}></Route>

          <Route
            path="/farmerOrderList"
            element={<FarmerOrderList />}
          ></Route>

          <Route path="/consumerhome" element={<ConsumerHome />}></Route>
          <Route path="/consumerProfile" element={<ConsumerProfile />}></Route>
          <Route
            path="/consumerOrganicProduct"
            element={<ConsumerOrganicProduct />}
          ></Route>
          <Route
            path="/consumerNonOrganicProduct"
            element={<ConsumerNonOrganicProduct />}
          ></Route>
          <Route path="/consumerOrder" element={<ConsumerOrder />}></Route>

          <Route path="/consumerBillGenerator" element={<ConsumerBillGenerator />}></Route>

          <Route
            path="/consumerCropInfo"
            element={<ConsumerCropInfo />}
          ></Route>

          <Route path="/deliveryhome" element={<DeliveryHome />}></Route>
          <Route
            path="/deliveryProductInfo"
            element={<DeliveryProductInfo />}
          ></Route>
          <Route path="/deliveryProfile" element={<DeliveryProfile />}></Route>
          <Route
            path="/deliveryOtpVerify"
            element={<DeliveryOtpVerify />}
          ></Route>
          <Route
            path="/deliveryCropInfo"
            element={<DeliveryCropInfo />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
