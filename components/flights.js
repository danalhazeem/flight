import { useRouter } from 'next/router';
import flightsData from '@/data';

function Flights() {
    const router = useRouter();

    const handleBookNow = (flight, ticket) => {
        const selectedFlight = { ...flight, ...ticket };

        // Save selected flight to localStorage
        localStorage.setItem('selected-flight', JSON.stringify(selectedFlight));

        // Redirect to payment page
        router.push('/payment');
    };

    return (
        <div>
            {flightsData.map((flight) => (
                <div key={flight.airline} className="flight-card">
                    <h3>{flight.airline}</h3>
                    <p>{flight.from} → {flight.to}</p>
                    <p>Duration: {flight.duration}</p>
                    <img src={flight.image} alt={flight.airline} width="100" />
                    
                    <h4>Available Tickets:</h4>
                    {flight.tickets.map((ticket, index) => (
                        <div key={index} className="d-flex justify-content-between p-2 border">
                            <span>{ticket.class}: {ticket.price} {ticket.currency}</span>
                            <button className="btn btn-primary" onClick={() => handleBookNow(flight, ticket)}>Book Now</button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Flights;
