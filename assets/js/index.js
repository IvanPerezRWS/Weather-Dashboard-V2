
// variables

var city_inputEl = document.getElementById("city-input");
var search_buttonEl = document.getElementById("#search-button");
var clear_buttonEl = document.getElementById("#clear-button");
var clear_historyEl = document.getElementById("#clear-history");

var city_nameEl = document.getElementById("#city-name");
var temperatureEl = document.getElementById("#temperature");
var humidityEl = document.getElementById("#humidity");
var wind_speedEl = document.getElementById("wind-speed");
var uv_indexEl = document.getElementById("#uv-index");

let history = JSON.parse(localStorage.getItem("search")) || [];
console.log(history)

const APIKey = "a70a9011593de90b1ad6d1e297869b75";

var formSubmitHandler = function(event) {
    event.preventDefault();
}

function currentWeather(cityName) {

    let APIUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

    
}

