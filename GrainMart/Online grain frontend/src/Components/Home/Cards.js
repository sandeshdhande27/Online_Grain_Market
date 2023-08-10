import blog1 from "./news1.jpg";
import blog2 from "./news2.jpg";
import blog3 from "./news3.jpg";

export default function Cards() {
  return (
    <section
      class="portfolio"
      style={{
        marginTop:"20px",
        marginBottom:"20px",
        backgroundColor:"",
        backgroundImage:"",
      }}
    >
      <div class="container text-center  ">
        <h1>LATEST NEWS </h1>
        <br />
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
              <img
                src={blog1}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
              <div class="card body ">
                <h4 ass="card-title">
                 NEW DELHI: Release toor,
                </h4>
                <p class="card-text text-left">
                The government has asked importers 
                to release tur and urad within 30 days from
                the date of getting the customs clearance. 
                The consumer affairs ministry has issued the instruction 
                in its bid to keep the prices of these two key pulses under check.
                कृषि उपज मंडियों की ताजा तेजी-मंदी की लाइव दैनिक रिपोर्ट यहाँ 
                (www.emandirates.com) पर प्रकाशित की जा रही है।
                However, the production and procurement is likely 
                to be on the expected lines or may miss the target by a small margin.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
              <img
                src={blog2}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
              <div class="card body">
                <h5 class="card-title">
                BATHINDA: The wheat procurement in Punjab
                 has surpassed 91% of the target fixed by the Food
                  Corporation of India for the Rabi Marketing Season (RMS) 2023-24.
                </h5>
                <p class="card-text text-left">
                The FCI had fixed a target of 132 Lakh Metric Tonne (LMT) 
                for Punjab, out of which 120 LMT had been procured by Friday.
                Earlier, when excessive rains had lashed the region in
                late March and early April, a considerable part of the standing
                wheat crop had lodged.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
            <div class="card">
              <img
                src={blog3}
                class="card img-fluid"
                style={{ width: "415.99px", height: "250px" }}
              />
              <div class="card body">
                <h4 class="cards-title">
                नमस्कार किसान साथियों, राजस्थान-हरियाणा सहित देशभर
                की प्रमुख कृषि उपज मंडियों में फसलों के दिनांक 3 Aug 2023 (Thursday) को ताज़ा मंडी भाव क्या रहे?
                </h4>
                <p class="card-text text-left">
                आइये जाने… Aaj ka Mandi bhav Batao : E Mandi Rajasthan Daily Bhav Update Anaj
                Mandi Rates Today, 3 Aug 2023 Grain Market Live Online Commodity Prices 
                (Agricultural Produce Market Committee- APMC Report) 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
