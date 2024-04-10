const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bd066e08b6msh5941e5578f19288p14ae92jsn6381f285e001',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
}


function getWeather(city) {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response);

			cloud_pct.innerHTML = response.cloud_pct;
			temp.innerHTML = response.temp;
			temp1.innerHTML = response.temp;
			feels_like.innerHTML = response.feels_like;
			humidity.innerHTML = response.humidity;
			humidity1.innerHTML = response.humidity;
			min_temp.innerHTML = response.min_temp;
			max_temp.innerHTML = response.max_temp;
			wind_speed.innerHTML = response.wind_speed;
			wind_degrees.innerHTML = response.wind_degrees;
			wind_speed1.innerHTML = response.wind_speed;
			sunrise.innerHTML = response.sunrise;
			sunset.innerHTML = response.sunset;
		})
		.catch(err => console.error());
}


SubmitEvent.listner = ("click", (e) => {
	getWeather(city.value)
	e.preventDefault()
})

getWeather("Delhi")