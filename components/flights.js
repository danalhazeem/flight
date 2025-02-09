import { useState } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook
import airlineFlightsData from "../data/airlineFlightsData";

export default function Flights() {
    const [filteredFlights, setFilteredFlights] = useState(airlineFlightsData);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const router = useRouter(); // Initialize the router

    // Handle filtering
    const handleFilter = () => {
        let filtered = airlineFlightsData;

        if (selectedDate) {
            filtered = filtered.filter(flight => 
                new Date(flight.departure).toISOString().split("T")[0] === selectedDate
            );
        }

        if (selectedPrice) {
            filtered = filtered.filter(flight => 
                flight.tickets.some(ticket => ticket.price <= parseInt(selectedPrice))
            );
        }

        setFilteredFlights(filtered);
    };

    // Reset filters
    const handleReset = () => {
        setSelectedDate("");
        setSelectedPrice("");
        setFilteredFlights(airlineFlightsData);
    };

    // Function to handle card click (navigate to payment page)
    const handleCardClick = (flightId) => {
        // Navigate to the payment page with the flight ID as a query parameter
        router.push(`/payment?flightId=${flightId}`);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4" style={{ color: "#72A0C1" }}>Available Flights</h2>

            {/* Filters */}
            <div className="d-flex justify-content-center gap-3 mb-4">
                <input
                    type="date"
                    className="form-control"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <select
                    className="form-control"
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                >
                    <option value="">Select Max Price</option>
                    <option value="500">Up to 500 KWD</option>
                    <option value="1000">Up to 1000 KWD</option>
                    <option value="2000">Up to 2000 KWD</option>
                    <option value="4000">Up to 4000 KWD</option>
                </select>
                <button className="btn " style={{ backgroundColor: "#72A0C1", borderColor: "#72A0C1", color: "white" }} onClick={handleFilter}>Filter</button>
                <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
            </div>

            <div className="d-flex flex-column align-items-center">
                {filteredFlights.map((flight, index) => (
                    <div
                        key={index}
                        className="card mb-4 shadow-lg flight-card"
                        onClick={() => handleCardClick(flight.id)} // Call handleCardClick on card click
                    >
                        <div className="row g-0">
                            {/* Left Side - Image */}
                            <div className="col-md-4">
                                <img
                                    src={flight.image}
                                    className="img-fluid rounded-start flight-image"
                                    alt={flight.airline}
                                />
                            </div>

                            {/* Right Side - Flight Details */}
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{flight.airline}</h4>
                                    <p className="card-text">
                                        <strong>{flight.from}</strong> → <strong>{flight.to}</strong> <br />
                                        <span className="text-muted">Departure:</span> {new Date(flight.departure).toLocaleString()} <br />
                                        <span className="text-muted">Arrival:</span> {new Date(flight.arrival).toLocaleString()} <br />
                                        <span className="text-muted">Duration:</span> {flight.duration}
                                    </p>

                                    <div className="d-flex flex-column">
                                        {flight.tickets.map((ticket, ticketIndex) => (
                                            <div key={ticketIndex} className="d-flex justify-content-between mb-2">
                                                <span>{ticket.class}</span>
                                                <span>{ticket.price} {ticket.currency}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Styles */}
            <style jsx>{`
                .flight-card {
                    width: 90%;
                    max-width: 800px;
                    border-radius: 10px;
                    overflow: hidden;
                    background: #fff;
                    transition: transform 0.2s ease-in-out;
                    cursor: pointer; /* Add cursor pointer for clickable */
                }
                .flight-card:hover {
                    transform: scale(1.03);
                }
                .flight-image {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
                .card-body {
                    padding: 20px;
                }
                .card-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .text-muted {
                    color: #6c757d;
                }
            `}</style>
        </div>
    );
}
