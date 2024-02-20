document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '2ace50d3678993012633dcf9f2cd032d';
    const city = 'New York';

    document.querySelector('input.value', () => {

    })
    document.querySelector('search.value', () => {
        
    })

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.querySelector('.weather-info');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const wind = data.wind.speed;

            weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-icon">
                <p>${description}</p>
                <p>Temperature: ${temperature}°C</p>
                <p> Wind's speed: ${wind} </p>

            `;
        })
        // .then(data => {
        //     const weatherInfo = document.querySelector('.weather-info');
        //     const temperature = data.main.temp;
        //     const description = data.weather[0].description;
        //     const icon = data.weather[0].icon;

        //     weatherInfo.innerHTML = '
        //     <h2>${city}</h2>
        //     <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-icon">
        //     <p>${description}<p/>
        //     <p>Temperature: ${temperature} *C </p>
        //     ';

        // })

        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = '<p>Ate qe po kerkoni nuk gjendet :P !</p>';
        });
})