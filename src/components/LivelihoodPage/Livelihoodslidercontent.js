import React from "react";
function Livelihoodslidercontent({activeindex, LivelihoodSlider}){
    return(
        <section>
            {LivelihoodSlider.map((slide,index) => (
                <div key={index} className={index === activeindex ? "slides active" : "inactive"}>
                    <img className="slide-image" src={slide.urls} alt=""/>
                    <h2 className="slide-title">{slide.title}</h2>
                    <h2 className="slide-text">{slide.description}</h2>
                </div>
            ))}
        </section>
    );
}
export default Livelihoodslidercontent;