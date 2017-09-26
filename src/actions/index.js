import axios from 'axios';

const API_KEY = '6994f7f54b30df005329abf6c8f3bf2d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);
  console.log('request', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
