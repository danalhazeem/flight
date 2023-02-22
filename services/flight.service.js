import axios from 'axios'

const base = 'http://localhost:8080/flight'

const getFlights = (from, to, date) => {
    const promise = axios.get(`${base}/${from}/${to}/${date}`)
    return promise.then((response) => response.data)
}

const flightService = { getFlights }
export default flightService