import "./AboutUs.css";
import "./Sandesh.jpg";
import Header from "../Header";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <>
    <Header/>
      <div class="container-fluid bg-success">
        <div class="row p-5">
          <div class="col-md-12">
                  <div className="row">
                    

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={require("./Sandesh.jpg")} alt="Sandesh" />
                        </div>
                        <div className="img-text">
                          <h2>Sandesh Dhande</h2>
                          <p>
                            Hi I'm Sandesh Dhande. I'm currently pursuing Post Gratuate MCA
                            in SIMCA Narhe, and my role in the project is
                            Full Stack developer.
                          </p>
                        </div>
                      </div>
                    </div>

                   
  
                  </div>
                </div>
              </div>
            </div>
    
     <Footer />
    </>
  );
};

export default AboutUs;