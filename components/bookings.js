function CheckinDeleteAction({ bookingId, checkinStatus, handleCheckinClick, handleDeleteClick }) {
    return <>
        <span data-id={bookingId} className='btn-link link-dark' style={{ cursor: 'pointer' }} onClick={handleCheckinClick}>
            Checkin
        </span>
        <span data-id={bookingId} className='ms-3 btn-link link-danger' style={{ cursor: 'pointer' }} onClick={handleDeleteClick}>
            Delete
        </span>
    </>
}

export default function Bookings({ bookings, handleCheckinClick, handleDeleteClick }) {
    return (
        <div className='row mt-4 justify-content-center'>
            {bookings.length === 0
                ? <p className="fs-5 mt-4">No active bookings found</p>
                : <table className='table table-hover' style={{ textAlign: 'center' }} >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Number</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Date</th>
                            <th>Fare</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Seat Number</th>
                            <th>Checked-In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => {
                            return <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.flightNumber}</td>
                                <td>{booking.source}</td>
                                <td>{booking.destination}</td>
                                <td>{booking.date}</td>
                                <td>{booking.fare}</td>
                                <td>{booking.firstName}</td>
                                <td>{booking.lastName}</td>
                                <td>{booking.seatNumber ?? 'N/A'}</td>
                                <td>{booking.checkinStatus ? 'Yes' : 'No'}</td>
                                <td>
                                    <CheckinDeleteAction
                                        bookingId={booking.id}
                                        checkinStatus={booking.checkinStatus}
                                        handleCheckinClick={handleCheckinClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}