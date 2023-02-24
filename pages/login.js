import { useContext, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import UserContext from "@/contexts/user"
import authService from "@/services/auth.service"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function RegisterPage(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)

    const router = useRouter()
    const { setUser } = useContext(UserContext)

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    function handleSubmit(event) {
        event.preventDefault()
        authService.login(email, password)
            .then(({ token }) => {
                setMessage({
                    type: 'success',
                    content: 'Login successful, redirecting..'
                })
                setUser({ token })
                window.localStorage.setItem('fbs-user', JSON.stringify({ token }))
                router.push('/bookings')
            })
            .catch((error) => {
                console.error(error)
                const { error: errorField } = error.response.data
                const content = errorField.password ? errorField.password : errorField
                setMessage({
                    type: 'danger',
                    content: content.charAt(0).toUpperCase() + content.substring(1)
                })
            })
    }

    return (
        <>
            <Head>
                <title>Flight Booking System - Login</title>
                <meta name="description" content="A Flight Booking System application built using Nextjs & Spring Cloud" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='container d-flex flex-column align-items-center mt-4 pt-4'>
                <h1 className="heading boldest">Login</h1>
                <div className='row mt-4 justify-content-center'>
                    <form className='col mt-4 d-flex flex-column align-items-center text-center' onSubmit={handleSubmit}>
                        <input type='email' aria-label='Email' className='form-control' placeholder='Email' value={email} onChange={handleEmailChange} required />
                        <input type='password' aria-label='Password' className='form-control mt-2' placeholder='Password' value={password} onChange={handlePasswordChange} required />
                        <input type='submit' className='form-control btn btn-dark mt-2' value='Login' />
                        {message ? <span className={`mt-3 text-${message.type}`}>{message.content}</span> : null}
                    </form>
                </div>
            </main>
        </>
    )
}