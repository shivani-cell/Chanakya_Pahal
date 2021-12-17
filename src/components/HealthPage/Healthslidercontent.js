import React from "react";
function Healthslidercontent({activeindex, HealthSlider}){
    return(
        <section>
            {HealthSlider.map((slide,index) => (
                <div key={index} className={index === activeindex ? "slides active" : "inactive"}>
                    <img className="slide-image" src={slide.urls} alt=""/>
                    <h2 className="slide-title">{slide.title}</h2>
                    <h2 className="slide-text">{slide.description}</h2>
                </div>
            ))}
        </section>
    );
}
export default Healthslidercontent;