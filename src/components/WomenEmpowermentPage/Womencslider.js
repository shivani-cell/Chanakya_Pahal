import React, { useEffect, useState } from "react";
import Womenslider from "./Womenslider";
import Womenslidercontent from "./Womenslidercontent";
import Arrows from "../Arrows";
import Womendots from "./Womendots";
import "../Slider.css";
const len = Womenslider.length -1;
function Womencslider(props){
    const [activeindex, setActiveIndex] = useState(0);
    useEffect(() => {const interval = setInterval(() => {
        setActiveIndex(activeindex === len ?0 :activeindex+1);
    }, 1500 );
    return () => clearInterval(interval);
}, [activeindex]);
    return (
        <div className="slider-container">
                <Womenslidercontent activeindex={activeindex} Womenslider={Womenslider}/>
                <Arrows 
                    prevslide={() => setActiveIndex(activeindex <1 ? len :activeindex - 1)
                    }
                    nextslide={() => setActiveIndex(activeindex ===len ? 0 :activeindex + 1)
                    }
                    />
                    <Womendots activeindex={activeindex} 
                    Womenslider={Womenslider} 
                    onclick={(activeindex) => setActiveIndex(activeindex)}
                     />
        </div>
    );
}
export default Womencslider;