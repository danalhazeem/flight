import { useRouter } from 'next/router';
import { useState } from 'react';
import airlineFlightsData from '../data/airlineFlightsData';

export default function Flights() {
    const router = useRouter();
    const [selectedClass, setSelectedClass] = useState(null);
    const [hoveredFlight, setHoveredFlight] = useState(null);

    // Handle selecting a flight
    const handleFlightSelect = (flight) => {
        // Store selected flight with class in localStorage
        const flightWithClass = { ...flight, class: selectedClass || 'Economy' };
        localStorage.setItem('selected-flight', JSON.stringify(flightWithClass));

        // Redirect to the Payment Page
        router.push('/payment');
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Available Flights</h2>
            <div className="d-flex flex-column align-items-center">
                {airlineFlightsData.map((flight, index) => (
                    <div
                        key={index}
                        className="card mb-4 shadow-lg flight-card"
                        onMouseEnter={() => setHoveredFlight(flight)}
                        onMouseLeave={() => setHoveredFlight(null)}
                        onClick={() => handleFlightSelect(flight)}
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
                                        <span className="text-muted">Duration:</span> {flight.duration} <br />
                                        <span className="text-muted">Class:</span> {selectedClass || 'Select Class'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Hovered Flight Class Selection */}
            {hoveredFlight && (
                <div className="class-selection-card">
                    <h5>Select Class for {hoveredFlight.airline}</h5>
                    <button onClick={() => setSelectedClass('Economy')} className="btn btn-outline-primary">Economy</button>
                    <button onClick={() => setSelectedClass('Business')} className="btn btn-outline-primary">Business</button>
                    <button onClick={() => setSelectedClass('First Class')} className="btn btn-outline-primary">First Class</button>
                </div>
            )}

            {/* Styles */}
            <style jsx>{`
                .flight-card {
                    width: 90%;
                    max-width: 800px;
                    border-radius: 10px;
                    overflow: hidden;
                    background: #fff;
                    cursor: pointer;
                    transition: transform 0.2s ease-in-out;
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
                .class-selection-card {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: #f8f9fa;
                    border: 1px solid #ddd;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    width: 200px;
                }
                .class-selection-card button {
                    display: block;
                    margin: 5px 0;
                    width: 100%;
                }
            `}</style>
        </div>
    );
}
