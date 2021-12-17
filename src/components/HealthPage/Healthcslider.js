import React, { useEffect, useState } from "react";
import HealthSlider from "./HealthSlider";
import Healthslidercontent from "./Healthslidercontent";
import Arrows from "../Arrows";
import Healthdots from "./Healthdots";
import "./HealthSlider.css";
const len = HealthSlider.length -1;
function Healthcslider(props){
    const [activeindex, setActiveIndex] = useState(0);
    useEffect(() => {const interval = setInterval(() => {
        setActiveIndex(activeindex === len ?0 :activeindex+1);
    }, 1500 );
    return () => clearInterval(interval);
}, [activeindex]);
    return (
        <div className="slider-container">
                <Healthslidercontent activeindex={activeindex} HealthSlider={HealthSlider}/>
                <Arrows 
                    prevslide={() => setActiveIndex(activeindex <1 ? len :activeindex - 1)
                    }
                    nextslide={() => setActiveIndex(activeindex ===len ? 0 :activeindex + 1)
                    }
                    />
                    <Healthdots activeindex={activeindex} 
                    HealthSlider={HealthSlider} 
                    onclick={(activeindex) => setActiveIndex(activeindex)}
                     />
        </div>
    );
}
export default Healthcslider;