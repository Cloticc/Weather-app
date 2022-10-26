



let weather = {
    apiKey: "", // API key inside the quotes


    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey)
            .then((response) => {
                if (!response.ok) {
                    alert("Error: " + response.statusText);
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description: description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = "Temp " + temp + "&deg;C";
        document.querySelector(".humidity").innerHTML = "Humidity is " + humidity + "%";
        document.querySelector(".windspeed").innerHTML = "Wind Speed " + speed + "m/s";


        if
            (description == "clear sky") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/7833037/pexels-photo-7833037.jpeg?cs=srgb&dl=pexels-stanislav-kondratiev-7833037.jpg&fm=jpg')";
        } else if
            (description == "few clouds") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/695657/pexels-photo-695657.jpeg?cs=srgb&dl=pexels-johann-piber-695657.jpg&fm=jpg')";
        }
        else if
            (description == "scattered clouds") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?cs=srgb&dl=pexels-ruvim-3560044.jpg&fm=jpg')";
        }
        else if
            (description == "broken clouds") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?cs=srgb&dl=pexels-ruvim-3560044.jpg&fm=jpg')";
        }
        else if
            (description == "shower rain") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?cs=srgb&dl=pexels-josh-hild-2448749.jpg&fm=jpg')";
        }
        else if
            (description == "rain") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?cs=srgb&dl=pexels-josh-hild-2448749.jpg&fm=jpg')";
        }
        else if
            (description == "thunderstorm") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?cs=srgb&dl=pexels-andre-furtado-1162251.jpg&fm=jpg')";
        }
        else if
            (description == "snow") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?cs=srgb&dl=pexels-egor-kamelev-813872.jpg&fm=jpg')";
        }
        else if
            (description == "mist") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3408552/pexels-photo-3408552.jpeg?cs=srgb&dl=pexels-simon-berger-3408552.jpg&fm=jpg')";
        }
        else if
            (description == "overcast clouds") {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?cs=srgb&dl=pexels-ruvim-3560044.jpg&fm=jpg')";
        }
        else {
            document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?cs=srgb&dl=pexels-ruvim-3560044.jpg&fm=jpg')";
        }

    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};


document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
            document.querySelector(".search-bar").value = ""
        }
    });

weather.fetchWeather("Sweden");


