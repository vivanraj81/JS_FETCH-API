// Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.


    function getData() {
    const date = new Date();
    let currentDate = `${date}`;

    const getHeader = document.getElementById("header");
    const getLocation = document.getElementById("location");
    const getCurrent = document.getElementById("current");

    const apiKey = "1cc1fbd926d22a6ee196a1cd27c0c32b";

    const createInputField = document.createElement("input");
    createInputField.setAttribute("type", "text");
    createInputField.setAttribute("autocomplete", "on");
    createInputField.setAttribute("id", "input");
    createInputField.setAttribute("class", "search");
    createInputField.setAttribute("placeholder", "Enter a city");


    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(1);
    };

    createInputField.addEventListener("input", function (event) {
        const city = event.target.value;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((dataReady) => {
                // console.log(dataReady);
                let city = `<div class="city">${dataReady.name}, ${dataReady.sys.country}</div>`;
                let dateAndDay =  `<div class="date">${currentDate.slice(0, 15)}</div>`;
                let temp = `<div class="temp">${kelvinToCelsius(dataReady.main.temp)}°c</div>`;
                let weather = `<div class="weather">${dataReady.weather[0].main}</div>`;
                let highLow = `<div class="hi-low">${kelvinToCelsius(dataReady.main.temp_max)}°c / ${kelvinToCelsius(dataReady.main.temp_min)}°c</div>`;
  
                getLocation.innerHTML = city;
                getLocation.innerHTML += dateAndDay;
          
                getCurrent.innerHTML = temp;
                getCurrent.innerHTML += weather;
                getCurrent.innerHTML += highLow;
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    });

    getHeader.appendChild(createInputField);
}

getData();
