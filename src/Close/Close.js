import React from "react";
import "./Close.css";

const Close = () => {

    const closeTab = () => {
        window.open("/app");
        window.close("");
      };


    
    return (
        <div>
            <button className="btn-close" onClick={closeTab}>Закрыть</button>
        </div>
    )
}


export default Close;