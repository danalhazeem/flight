import Link from 'next/link'

function BookAction({ flightId }) {
    return (
        <Link href={`/book/${flightId}`} className="link-dark">
            Book
        </Link>
    )
}

function CheckinDeleteAction() {
    return <>
        <span className='btn-link link-dark' style={{ cursor: 'pointer' }} onClick={() => { }}>Checkin</span>
        <span> </span>
        <span className='btn-link link-danger' style={{ cursor: 'pointer' }} onClick={() => { }}>Delete</span>
    </>
}

export default function Flights({ flights, actionIsBook }) {
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
                        <th>Action</th>
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
                            <td>
                                {actionIsBook ? <BookAction flightId={flight.id} /> : <CheckinDeleteAction />}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}