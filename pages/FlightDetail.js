import { useState, useEffect } from "react";

export default function FlightDetail() {
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [selectedClass, setSelectedClass] = useState("");

    // Retrieve selected flight from localStorage
    useEffect(() => {
        const storedFlight = localStorage.getItem("selectedFlight");
        if (storedFlight) {
            setSelectedFlight(JSON.parse(storedFlight));
        }
    }, []);

    // Handle class selection
    const handleClassSelection = (ticketClass) => {
        setSelectedClass(ticketClass);
        localStorage.setItem("selectedClass", ticketClass); // Save selected class in localStorage
    };

    if (!selectedFlight) return <p>No flight selected</p>;

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4" style={{ color: "#72A0C1" }}>Flight Details</h2>

            {/* Flight Information */}
            <div className="d-flex justify-content-center">
                <div className="card shadow-lg mb-4 flight-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={selectedFlight.image}
                                className="img-fluid rounded-start flight-image"
                                alt={selectedFlight.airline}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">{selectedFlight.airline}</h4>
                                <p className="card-text">
                                    <strong>{selectedFlight.from}</strong> → <strong>{selectedFlight.to}</strong> <br />
                                    <span className="text-muted">Departure:</span> {new Date(selectedFlight.departure).toLocaleString()} <br />
                                    <span className="text-muted">Arrival:</span> {new Date(selectedFlight.arrival).toLocaleString()} <br />
                                    <span className="text-muted">Duration:</span> {selectedFlight.duration}
                                </p>

                                <div className="d-flex flex-column">
                                    {selectedFlight.tickets.map((ticket, index) => (
                                        <div key={index} className="d-flex justify-content-between mb-2">
                                            <span>{ticket.class}</span>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleClassSelection(ticket.class)}
                                            >
                                                Select {ticket.class}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Show Proceed to Payment Button when Class is Selected */}
            {selectedClass && (
                <button className="btn btn-success" onClick={() => alert('Proceed to Payment')}>Proceed to Payment</button>
            )}
        </div>
    );
}
