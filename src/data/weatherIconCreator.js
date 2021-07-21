import React from 'react';
import weatherIcons from '../assets/weatherIcons';

const createWeatherIcons = (iconType) => {
    let prefix = 'wi wi-';
    let icon = weatherIcons[iconType].icon;

    if (!(iconType > 699 && iconType < 800) && !(iconType > 899 && iconType < 1000)) {
        icon = 'day-' + icon;
      }

    icon = prefix + icon;
    return (
        <i className={icon}></i>
    );

}

export default createWeatherIcons;