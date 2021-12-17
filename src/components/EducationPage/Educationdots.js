import React from 'react';
function Educationdots({activeindex, onclick,EducationSlider}){
    return(
        <div className="all-dots">
            {EducationSlider.map((slide,index) =>
            (<span key={index} className={`${activeindex===index?"dot active-dot" : "dot"}`}
            onclick={() => onclick(index)}></span>))}
        </div>
    );
}
export default Educationdots;