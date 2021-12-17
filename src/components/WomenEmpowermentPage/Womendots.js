import React from 'react';
function Womendots({activeindex, onclick,Womenslider}){
    return(
        <div className="all-dots">
            {Womenslider.map((slide,index) =>
            (<span key={index} className={`${activeindex===index?"dot active-dot" : "dot"}`}
            onclick={() => onclick(index)}></span>))}
        </div>
    );
}
export default Womendots;