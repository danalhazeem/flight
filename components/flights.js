import Link from 'next/link'

function BookAction({ flightId }) {
    return (
        <Link href={`/book/${flightId}`} className="link-dark">
            Book
        </Link>
    )
}

export default function Flights({ flights, hasBookingAction }) {
    return (
        <div className='row mt-4 justify-content-center'>
            <table className='table table-hover' style={{ textAlign: 'center' }} >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Number</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                        <th>Fare</th>
                        <th>Total Seats</th>
                        <th>Remaining Seats</th>
                        {hasBookingAction ? <th>Action</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {flights.map(flight => {
                        return <tr key={flight.id}>
                            <td>{flight.id}</td>
                            <td>{flight.number}</td>
                            <td>{flight.source}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.date}</td>
                            <td>{flight.fare}</td>
                            <td>{flight.totalSeats}</td>
                            <td>{flight.remainingSeats}</td>
                            {hasBookingAction
                                ? <td><BookAction flightId={flight.id} /></td>
                                : null
                            }
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}