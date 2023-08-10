import { Button } from "bootstrap";
import { Link } from "react-router-dom";
export default function ConsumerNavbar() {
  const removeSession = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    window.location.href = "/";
  };
  return (
    <nav class="navbar navbar-expand-lg bg-black sticky-top">
      <div class="container-fluid">
        <Link
          to="/consumerHome"
          class="navbar-brand text-warning"
        >
         <b> GRAIN-MARKET </b>
        </Link>

        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item p-2 mx-3">
              <Link
                to="/consumerHome"
                style={{ textDecoration: "none", color: "white" }}
              >
               <b> Home</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-3">
              <Link
                to="/consumerOrganicProduct"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>Organic Product</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-3">
              <Link
                to="/consumerNonOrganicProduct"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>Non-Organic Product</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-3">
              <Link
                to="/consumerCropInfo"
                style={{ textDecoration: "none", color: "white" }}
              >
               <b> Crop Info</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-3">
              <Link
                to="/consumerOrder"
                style={{ textDecoration: "none", color: "white" }}
              >
               <b> OrderList </b>
              </Link>
            </li>

             <li class="nav-item p-2 mx-3">
              <Link
                to="/consumerBillGenerator"
                style={{ textDecoration: "none", color: "white" }}
              >
               <b> Your All Bills</b>
              </Link>
            </li> 


            <li class="nav-item p-2 mx-3 mr-5">
              <Link
                to="/consumerProfile"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>Profile</b>
              </Link>
            </li>

            <li class="nav-item p-2 mx-3 ml-5">
            <b className="text-warning ">CONSUMER</b>
            </li>

           
            <li class="nav-item mx-5 ml-5">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <button className="btn btn-outline-warning" onClick={removeSession}>
                  Logout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
