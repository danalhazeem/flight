import axios from 'axios'

const base = 'http://localhost:8080/checkin'

const checkin = (bookingId, token) => {
    const headers = { Authorization: `Bearer ${token}` }
    const body = { bookingId }
    const promise = axios.post(base, body, { headers })
    return promise.then((response) => response.data)
}

const checkinService = { checkin }
export default checkinService
