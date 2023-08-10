import { Carousel } from "bootstrap";
import "./carsol1.jpg";
import "./carsol2.jpg";
import "./carsol3.jpg";
import "./carausol.css";
import "./image1.jpg";
import "./image2.jpg";

export default function Carausel(){
    return (
        <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("./grain1.jpeg")}
              className="d-block w-100 h-50"
              alt="..."
            />
              <h5>...</h5>
              <p>...</p>
          </div>
          <div className="carousel-item">
            <img
              src={require("./grain1.jpeg")}
              className="d-block w-100 h-50"
              alt="..."
            />
              <h5>...</h5>
    <p>...</p>
          </div>
          <div className="carousel-item">
            <img
              src={require("./grain1.jpeg")}
              className="d-block w-100 h-50"
              alt="..."
            />
              <h5>...</h5>
    <p>...</p>
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}