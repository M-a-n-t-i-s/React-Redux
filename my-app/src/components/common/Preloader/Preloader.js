import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = (props) => {
    return <div style={ { backgroundColor: 'white' } }>
        <img src={preloader} alt='loading'/>
    </div>
}
export default Preloader;