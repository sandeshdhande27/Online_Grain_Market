import React from "react";
import { Link } from "react-router-dom";

function ConsumerFooter() {
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
                Grain-Market is an online grain market
                that is dedicated to providing services to consumers in making
                online marketing accessible to them. 
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
                  to="/consumerHome"
                  class="text-white"
                >
                  HOME
                </Link>
              </p>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/consumerOrganicProduct"
                  class="text-white"
                >
                  OrganicProduct 
                </Link>
              </p>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/consumerNonOrganicProduct"
                  class="text-white"
                >
                  Non Organic Products
                </Link>
              </p>
              
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/aboutus"
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
                  href="/consumeraboutus"
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

export default ConsumerFooter;
