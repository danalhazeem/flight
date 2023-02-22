import axios from 'axios'

const base = 'http://localhost:8080/booking'

const getBookings = () => {
}

const createBooking = (body) => {
    const promise = axios.post(base, body, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWRtaW4xMjNAZ21haWwuY29tIiwiaWF0IjoxNjc3MDczNTE0LCJleHAiOjE2NzcwNzcxMTR9.nnHxybG2quDe7XgiOhlM7AzvMsyNlNyY4h_-1htqAjY'
        }
    })
    return promise.then((response) => response.data)
}

const deleteBooking = () => {
}

const bookingService = { getBookings, createBooking, deleteBooking }
export default bookingService