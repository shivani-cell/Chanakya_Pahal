import React from 'react';
function Livelihooddots({activeindex, onclick,LivelihoodSlider}){
    return(
        <div className="all-dots">
            {LivelihoodSlider.map((slide,index) =>
            (<span key={index} className={`${activeindex===index?"dot active-dot" : "dot"}`}
            onclick={() => onclick(index)}></span>))}
        </div>
    );
}
export default Livelihooddots;