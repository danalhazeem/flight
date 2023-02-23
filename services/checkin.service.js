import axios from 'axios'

const base = 'http://localhost:8080/checkin'

const checkin = (bookingId, token) => {
    const headers = {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInVzZXJJZCI6MSwiaWF0IjoxNjc3MTMwOTkxLCJleHAiOjE2NzcxMzQ1OTF9.KXNZjfsVadMr8iMn_ZbiACErmqIZ8tPzbapoImnyPHQ'
    }
    const body = { bookingId }

    const promise = axios.post(base, body, { headers })
    return promise.then((response) => response.data)
}

const checkinService = { checkin }
export default checkinService
