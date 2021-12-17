import React from "react";
import './About.css';
import education1 from "./education1.jpg";
function About(props){
    return(
    <>
    <div className="mission">
        Chanakya Pahal, a non-profit organization in india is to empower underprivileged children, youth
        and women through relevant education, innovative healthcare and market-focused livelihood
        programmes. Smile Foundation is to deploy best possible methodology and technology for achieving
        ideal SROI (social return on investment), to practice and promote good governance. To link
        business competitiveness of the corporate with social development initiatives; also to sensitize
        privileged children, youth and citizens in general to promote Civic Driven Change.
        </div>
        <img src={education1}></img>
    </>
    );
}
export default About;