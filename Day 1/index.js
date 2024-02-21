const apiKey = "4dba4086b805671e2a41b52b5cf85bd5";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
  let weatherData = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (weatherData.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    let data = await weatherData.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style = "display:block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  getWeather(searchBox.value);
});

// getWeather();
