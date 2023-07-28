import React from "react";
import northernPic from './images/northernHemisphere.jpg';
import southernPic from './images/southernHemisphere.jpg';

const HemisphereDisplay = ({ latitude }) => {
    console.log(latitude);
    const hemisphere = latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere';
    const picture = latitude > 0 ? northernPic : southernPic;
    return (
        <div>
            <img src = {picture} alt = "" />
            { hemisphere }
        </div>
    )
}

export default HemisphereDisplay;