import React, { useEffect, useState } from "react";
import LivelihoodSlider from "./LivelihoodSlider";
import Livelihoodslidercontent from "./Livelihoodslidercontent";
import Arrows from "../Arrows";
import Livelihooddots from "./Livelihooddots";
import "../Slider.css";
const len = LivelihoodSlider.length -1;
function Livelihoodcslider(props){
    const [activeindex, setActiveIndex] = useState(0);
    useEffect(() => {const interval = setInterval(() => {
        setActiveIndex(activeindex === len ?0 :activeindex+1);
    }, 1500 );
    return () => clearInterval(interval);
}, [activeindex]);
    return (
        <div className="slider-container">
                <Livelihoodslidercontent activeindex={activeindex} LivelihoodSlider={LivelihoodSlider}/>
                <Arrows 
                    prevslide={() => setActiveIndex(activeindex <1 ? len :activeindex - 1)
                    }
                    nextslide={() => setActiveIndex(activeindex ===len ? 0 :activeindex + 1)
                    }
                    />
                    <Livelihooddots activeindex={activeindex} 
                   LivelihoodSlider={LivelihoodSlider} 
                    onclick={(activeindex) => setActiveIndex(activeindex)}
                     />
        </div>
    );
}
export default Livelihoodcslider;