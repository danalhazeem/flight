// import axios from 'axios'

// const base = 'http://localhost:8080/booking'

// const getBookings = (token) => {
//     const headers = { Authorization: `Bearer ${token}` }
//     const promise = axios.get(base, { headers })
//     return promise.then((response) => response.data)
// }

// const createBooking = (flightId, firstName, lastName, token) => {
//     const headers = { Authorization: `Bearer ${token}` }
//     const body = { flightId, firstName, lastName }
//     const promise = axios.post(base, body, { headers })
//     return promise.then((response) => response.data)
// }

// const deleteBooking = (id, token) => {
//     const headers = { Authorization: `Bearer ${token}` }
//     const promise = axios.delete(`${base}/${id}`, { headers })
//     return promise.then((response) => response.data)
// }

// const bookingService = { getBookings, createBooking, deleteBooking }
// export default bookingService