import { Link } from "react-router-dom";


export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg  bg-black sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand px-4 text-warning" href="/">
          <b>GRAIN-MARKET</b>
        </a>
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
            <li class="nav-item p-2 mx-3 ml-5">
            <Link
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>Home</b>
              </Link>
              {/* <a class="nav-link active" aria-current="page" href="/">
                Home
              </a> */}
            </li>
            <li class="nav-item p-2 mx-3">
            <Link
                to="/organicProduct"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>Organic Products</b>
              </Link>
              {/* <a class="nav-link" href="/organicProduct">
                Organic Products
              </a> */}
            </li>
            <li class="nav-item p-2 mx-3">
            <Link
                to="/nonOrganicProduct"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>NonOrganic-Products</b>
              </Link>
              {/* <a class="nav-link" href="nonOrganicProduct">
                Non Organic Products
              </a> */}
            </li>
            <li class="nav-item p-2 mx-3">
            <Link
                to="/cropInfo"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>Crop Info</b>
              </Link>
              {/* <a class="nav-link" href="cropInfo">
                Crop Info
              </a> */}
            </li>
            <li class="nav-item p-2 mx-3 mr-5">
            <Link
                to="/aboutus"
                style={{ textDecoration: "none", color: "white" }}
              >
                <b>About-Us</b>
              </Link>
              {/* <a class="nav-link" href="aboutus">
                About Us
              </a> */}
            </li>

            <li class="nav-item p-2 mx-3 mr-5">
            <Link
                to="/login"style={{ textDecoration: "none", color: "yellow" }}
                >
                <a class="navbar-brand px-4 text-warning" href="/">
          <b>SIGNIN</b>
        </a>
                
              </Link>
              {/* <a class="nav-link" href="aboutus">
                About Us
              </a> */}
            </li>
            


          </ul>
        </div>
      </div>
    </nav>
  );
}
