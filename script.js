const apikey = "825b5ca6aa187d19bcedc6507fa41276";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".btn");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiurl}&q=${city}&appid=${apikey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)} °C`;
        document.querySelector(".hum").innerHTML = `${data.main.humidity} %`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("City not found. Please enter a valid city name.");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
