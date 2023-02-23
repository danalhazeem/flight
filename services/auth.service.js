import axios from 'axios'

const base = 'http://localhost:8080/auth'

const register = (email, password) => {
    const body = { email, password }
    const promise = axios.post(`${base}/register`, body)
    return promise.then((response) => response.data)
}

const authService = { register }
export default authService