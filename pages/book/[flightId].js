import { useContext, useState } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Flights from "@/components/flights"
import UserContext from "@/contexts/user"
import flightService from "@/services/flight.service"
import bookingService from "@/services/booking.service"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function BookPage({ flights }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [message, setMessage] = useState(null)

    const router = useRouter()
    const { user: { token } } = useContext(UserContext)

    const handleFirstNameChange = (event) => setFirstName(event.target.value)
    const handleLastNameChange = (event) => setLastName(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        bookingService.createBooking(flights[0].id, firstName, lastName, token)
            .then((booking) => {
                setMessage({ type: 'success', content: 'Booking confirmed, redirecting..' })
                setTimeout(() => router.push('/bookings'), 2000)
            })
            .catch((error) => {
                console.error(error)
                const { data } = error.response
                setMessage({
                    type: 'danger',
                    content: data
                        ? data.error.charAt(0).toUpperCase() + data.error.substring(1)
                        : 'Please login to book a flight'
                })
            })
    }

    return (
        <>
            <Head>
                <title>Flight Booking System - Book</title>
                <meta name="description" content="A Flight Booking System application built using Nextjs & Spring Cloud" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='container d-flex flex-column align-items-center mt-4 pt-4'>
                <h1 className="heading boldest">Book</h1>
                {flights === null
                    ? <p className="fs-5 mt-4">No such flight available</p>
                    : <div className='row mt-4 justify-content-center'>
                        <Flights flights={flights} hasBookingAction={false} />
                        <form className='col-4 mt-4 d-flex flex-column align-items-center text-center' onSubmit={handleSubmit}>
                            <input type='text' aria-label='First Name' className='form-control' placeholder='First Name' value={firstName} onChange={handleFirstNameChange} required />
                            <input type='text' aria-label='Last Name' className='form-control mt-2' placeholder='Last Name' value={lastName} onChange={handleLastNameChange} required />
                            <input type='submit' className='form-control btn btn-dark mt-2' value='Book' />
                            {message ? <span className={`mt-3 text-${message.type}`}>{message.content}</span> : null}
                        </form>
                    </div>
                }
            </main>
        </>
    )
}

export async function getServerSideProps(context) {
    const { flightId } = context.query
    try {
        const flight = await flightService.getFlight(flightId)
        return { props: { flights: [flight] } }
    } catch (error) {
        return { props: { flights: null } }
    }
}
