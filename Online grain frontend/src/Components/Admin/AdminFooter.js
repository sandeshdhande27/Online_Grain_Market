import React from "react";
//import "../css/home.css";
import { Link } from "react-router-dom";

function AdminFooter() {
  return (
    <div>
      <footer class="bg-black text-white">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                GRAIN-MARKET
              </h5>
              <p>
                Grain-Market is an online grain store
                that is dedicated to providing services to consumers in making
                online marketing accessible to them. It is an online market which
                will allow the people buying grain easily
                and also maintain transparency between the Shopkeeper and customer.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Products
              </h5>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="#"
                  class="text-white"
                >
                  Organic Products
                </a>
              </p>
              <p>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="#"
                  class="text-white"
                >
                  Non Organic Products
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/adminhome"
                  class="text-white"
                >
                  HOME
                </Link>
              </p>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/userdetails"
                  class="text-white"
                >
                  User Details
                </Link>
              </p>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/addDeliveryBoy"
                  class="text-white"
                >
                  Add Delivery Boy
                </Link>
              </p>
              
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/adminAboutus"
                  class="text-white"
                >
                  AboutUs
                </Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i>Savda, Maharashtra
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>shreenimjaymatadhanyabhandar@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 8698712734
              </p>
              
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2023 All rights reserved by :
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="/adminaboutus"
                >
                  <strong class="text-warning">Shree Nimjaymata Dhanya Bhandar,Savda</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AdminFooter;
