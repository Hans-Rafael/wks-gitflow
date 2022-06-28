import axios from 'axios';

//https://swapi.dev/api/planets
// Possible alternative: 'https://swapi.dev/api'
const baseURL = 'https://swapi.dev/api/';

export const swGet = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data);

  console.log(swGet);