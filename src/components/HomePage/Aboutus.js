import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../Aboutus.css";
const Aboutus = () => {
    return <React.Fragment>

                <h1 className="text-center text-danger text-capitalize my-5">About Chanakya Pahal</h1>
                <div className="container">
                    <div class="row">
                        <div class="col">
                            <div class="card">
  <                             div class="card-body">
                                    <h2 class="Chankaya Pahal"></h2>
                                        <p class="card-text">
                                            Chanakya Pahal, an Indian social development organization, is directly benefitting over 15 lakh children and 
                                            their families every year. We have more than 400 live welfare projects on education, healthcare, livelihood,
                                            and women’s empowerment in over 2,000 remote villages and urban slums across 25 states of India.
                                            The groundwork for a better life lies in education. It is the most powerful catalyst for social transformation. 
                                            However, a child cannot be educated in isolation. Only an empowered family, especially the mother, would be willing
                                            to educate their child. Thus, rather than focusing on only one stage of a person's life, we believe in the 
                                            lifecycle approach.
                                            Education empowers an individual to earn their livelihood and also increases one's awareness on a range of issues. From healthcare, to appropriate social behavior, to understanding one's rights – Smile Foundation seeks to educate, empower and cultivate better citizens.

                                        </p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="./images/first.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                     <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</React.Fragment> 
};
export default Aboutus;