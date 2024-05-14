// weather for Vegas Baby

import axios from "axios"

//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FChicago

export function getWeather(lat, lon, timezone) {
    axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FChicago", 
        { 
            param: {
                latitude: lat,
                longitude: lon,
                timezone,
    }})
}