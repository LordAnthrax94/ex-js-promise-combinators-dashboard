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
  
}


