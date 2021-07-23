import React from 'react';
import weatherIcons from '../assets/weatherIcons';

const createWeatherIcons = (iconType) => {
    let prefix = 'wi wi-owm-';
    let icon = prefix + iconType;
    let label = weatherIcons[iconType].label;
     
    return (
        <i className={icon} title={label}>
            <span className="sr-only">{label}</span>
        </i>
    );

}

export default createWeatherIcons;