import { Button } from "bootstrap";
import { Link } from "react-router-dom";
export default function AdminNavbar() {
  const removeSession = () => {
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    window.location.href = "/";
  };
  return (
    <nav class="navbar navbar-expand-lg  bg-black text-white">
      <div class="container-fluid">
        <Link to="/adminhome" className="navbar-brand px-4 text-warning">
          <b> GRAIN-MARKET</b>
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
            <li class="nav-item p-2 mx-4 ml-5">
              <Link
                to="/adminhome"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>Home</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-4">
              <Link
                to="/userdetails"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>User Details</b>
              </Link>
            </li>

            <li class="nav-item p-2 mx-4 ml-5">
              <Link
                to="/adminOrderList"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>Edit-Order Status</b>
              </Link>
            </li>

            <li class="nav-item p-2 mx-4">
              <Link
                to="/addDeliveryBoy"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b> Add-Delivery Boy</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-4 mr-5">
              <Link
                to="/aboutus"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b> About Us</b>
              </Link>
            </li>
            <li class="nav-item p-2 mx-4">
             
            <b className="text-warning">SHOPKEEPER</b>
              
            </li>
           
            <li class="nav-item mx-5 ml-5">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <button
                  className="btn btn-outline-warning"
                  onClick={removeSession}
                >
                  {" "}
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
