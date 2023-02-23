import axios from 'axios'

const base = 'http://localhost:8080/booking'

const getBookings = (token) => {
    const headers = {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInVzZXJJZCI6MSwiaWF0IjoxNjc3MTMwOTkxLCJleHAiOjE2NzcxMzQ1OTF9.KXNZjfsVadMr8iMn_ZbiACErmqIZ8tPzbapoImnyPHQ'
    }

    const promise = axios.get(base, { headers })
    return promise.then((response) => response.data)
}

const createBooking = (flightId, firstName, lastName, token) => {
    const headers = {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInVzZXJJZCI6MSwiaWF0IjoxNjc3MTMwOTkxLCJleHAiOjE2NzcxMzQ1OTF9.KXNZjfsVadMr8iMn_ZbiACErmqIZ8tPzbapoImnyPHQ'
    }
    const body = { flightId, firstName, lastName }

    const promise = axios.post(base, body, { headers })
    return promise.then((response) => response.data)
}

const deleteBooking = (id, token) => {
    const headers = {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInVzZXJJZCI6MSwiaWF0IjoxNjc3MTMwOTkxLCJleHAiOjE2NzcxMzQ1OTF9.KXNZjfsVadMr8iMn_ZbiACErmqIZ8tPzbapoImnyPHQ'
    }

    const promise = axios.delete(`${base}/${id}`, { headers })
    return promise.then((response) => response.data)
}

const bookingService = { getBookings, createBooking, deleteBooking }
export default bookingService