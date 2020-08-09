import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const APIKEY = '035458063e7edb1c37197de2e33769dc';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q : query,
            units: 'metric',
            APPID: APIKEY,
        }
    })

    return data;
}

