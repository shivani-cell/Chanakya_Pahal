import React from 'react';
function Dots({activeindex, onclick,imageSlider}){
    return(
        <div className="all-dots">
            {imageSlider.map((slide,index) =>
            (<span key={index} className={`${activeindex===index?"dot active-dot" : "dot"}`}
            onclick={() => onclick(index)}></span>))}
        </div>
    );
}
export default Dots;