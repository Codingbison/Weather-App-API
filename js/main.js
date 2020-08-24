
/* When the input field receives input, convert the value from fahrenheit to kelvin */
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputKelvin").innerHTML=((valNum-32)/1.8)+273.15;
  }

async function getWeatherData(){
    city = document.getElementsByName("city")[0].value;
    console.log(city)
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&API_key_here`)
        .then(data => data.json())
        .then(rawData => {
            console.log(rawData)
            document.getElementById("Temphigh").innerHTML=convertTemp(rawData.main.temp_max)
            document.getElementById("Templow").innerHTML=convertTemp(rawData.main.temp_min)
            document.getElementById("Forecast").innerHTML=rawData.weather[0].main
            document.getElementById("Humidity").innerHTML=rawData.main.humidity
        })
        

}
function convertTemp(temp){
    return Math.round(((temp-273.15) * 1.8) + 32)
}
