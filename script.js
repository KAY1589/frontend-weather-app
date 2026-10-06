const form = document.getElementById('searchForm');
const inputField = document.getElementById('searchInput');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = inputField.value.trim();
    if (!city) {
        alert('Provide a city');
        return;
    }

    try {
        const url = `https://backend-weather-app-w6ux.onrender.com`
        const response = await fetch(`${url}/api/weather?city=${encodeURIComponent(city)}`)
        const data = await response.json()

        if (!response.ok) {
            console.log(data.message)
        }
        showWeather(data)

    } catch (error) {
        console.log(error.message)
    }
})


function showWeather(data) {
    document.getElementById('locationName').textContent = `${data.city}, ${data.country}`;
    document.getElementById('temperature').textContent = `${data.temp}`;
    document.getElementById('tempMin').textContent = `${data.temp_min}`;
    document.getElementById('tempMax').textContent = `${data.temp_max}`;
    document.getElementById('humidity').textContent = `${data.humidity}`;
    document.getElementById('windSpeed').textContent = `${data.wind_speed}`;
    document.getElementById('feelsLike').textContent = `${data.feels_like}`;
    document.getElementById('windGusts').textContent = `${data.wind_gusts}`;
    document.getElementById('pressure').textContent = `${data.pressure}`;
    document.getElementById('visibility').textContent = `${data.visibility}`;
    document.getElementById('sunrise').textContent = new Date(data.sunrise).toLocaleTimeString();
    document.getElementById('sunset').textContent = new Date(data.sunset).toLocaleTimeString();
    document.getElementById('clouds').textContent = `${data.cloudiness}`;
    document.getElementById('timezone').textContent = `${data.timezone}`;
    document.getElementById('name').textContent = `${data.name}`;

}
