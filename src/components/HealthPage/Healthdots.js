import React from 'react';
function Healthdots({activeindex, onclick,HealthSlider}){
    return(
        <div className="all-dots">
            {HealthSlider.map((slide,index) =>
            (<span key={index} className={`${activeindex===index?"dot active-dot" : "dot"}`}
            onclick={() => onclick(index)}></span>))}
        </div>
    );
}
export default Healthdots;