function resolveWeatherInfo() {
    let longitute = document.getElementById("longitute").value;
    let latitute = document.getElementById("latitute").value;
    let result = document.getElementById("result");
    
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitute}&longitude=${longitute}&current_weather=true`, {
        method: "GET"
    }).then(response => response.json()).then(weatherInfo => {
        result.innerHTML = `
        <p> Temerature at the longitute of ${longitute} and at the latitute of ${latitute} is: ${weatherInfo.current_weather.temperature} </p>
        `
    })
}