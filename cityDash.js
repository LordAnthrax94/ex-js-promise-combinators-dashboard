async function fetchJson(url){
  const response = await fetch(url)
  const obj = await response.json()
  return obj
}


async function getDashboardData (query){
  const responseDestination = fetchJson(`https://boolean-spec-frontend.vercel.app/freetestapi/destinations?search=${query}`)
  const responseWeather = fetchJson(`https://boolean-spec-frontend.vercel.app/freetestapi/weathers?search=${query}`)
  const responseAirport = fetchJson(`https://boolean-spec-frontend.vercel.app/freetestapi/airports?search=${query}`)
  const result = await Promise.all(responseDestination, responseWeather, responseAirport)

  return {
    city: destinations[0].name,
    country : destinations[0].country,
    temperature: wheathers[0].tempearute,
    weather: wheathers[0].weather_descriptions,
    airport: airport[0].name



  } 
}



getDashboardData('london')
    .then(data => {
        console.log('Dasboard data:', data);
        console.log(
            `${data.city} is in ${data.country}.\n` +
            `Today there are ${data.temperature} degrees and the weather is ${data.weather}.\n`+
            `The main airport is ${data.airport}.\n`
        );
    })
    .catch(error => console.error(error));

