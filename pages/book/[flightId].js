import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Head from "next/head"
import Flights from "@/components/flights"
import flightService from "@/services/flight.service"
import bookingService from "@/services/booking.service"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function BookPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [flights, setFlights] = useState([])
    const [message, setMessage] = useState(null)

    const router = useRouter()
    const { flightId } = router.query

    useEffect(() => {
        if (flightId) {
            flightService.getFlight(flightId)
                .then((flight) => setFlights([flight]))
                .catch((error) => {
                    setFlights(null)
                    console.error(error)
                })
        }
    }, [flightId])

    const handleFirstNameChange = (event) => setFirstName(event.target.value)
    const handleLastNameChange = (event) => setLastName(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        bookingService.createBooking(flightId, firstName, lastName)
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