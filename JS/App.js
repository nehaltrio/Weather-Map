const API_keys = 'e2c35839a8db342617c9c3ccc84027a6';
//const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_keys}&units=metric`

function displayWeather() {
    const search = document.getElementById("search").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_keys}&units=metric`)
        .then(response => response.json())
        .then(data => {

            document.querySelector(".temp").innerText = data.main.temp;
            document.querySelector(".lead").innerText = data.weather[0].description;
            document.querySelector(".city").innerText = data.name;
            const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const imgIcon = document.querySelector('.icon');
            imgIcon.setAttribute('src', url);

        })
}
document.getElementById("button").addEventListener("click", () => {

    displayWeather();
})