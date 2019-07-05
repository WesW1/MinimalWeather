const key = '71a695c99fdc312a3b3e6c908cd48005'



export function fetchWeather (city) {
  const endpoint = new URL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`)

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {

      return data
    })
}
