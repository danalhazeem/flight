import { useState, useEffect } from "react";

// This would normally come from an API or a data store
const mockBookings = [
  {
    id: 1,
    flightNumber: "AB123",
    flightClass: "Economy",
    passengerCount: 2,
    date: "2024-01-15",
  },
  {
    id: 2,
    flightNumber: "CD456",
    flightClass: "Business",
    passengerCount: 1,
    date: "2024-01-10",
  },
];

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  // Simulate fetching past bookings on page load
  useEffect(() => {
    // Replace this with an actual API call if needed
    setBookings(mockBookings);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4" style={{ color: "#72A0C1" }}>Your Past Bookings</h1>
      <div className="d-flex flex-column align-items-center">
        {bookings.length === 0 ? (
          <p>No past bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="card mb-4 shadow-lg flight-card">
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
                  <img
                    src="https://i.pinimg.com/474x/0e/d5/06/0ed5069a3290f09c5bff3aa87cb8b226.jpg"
                    className="img-fluid rounded-start flight-image"
                    alt="Flight Icon"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">Flight {booking.flightNumber}</h4>
                    <p className="card-text">
                      <strong>Class:</strong> {booking.flightClass} <br />
                      <strong>Passengers:</strong> {booking.passengerCount} <br />
                      <strong>Date:</strong> {booking.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Styles */}
      <style jsx>{`
        .flight-card {
          width: 90%;
          max-width: 600px;
          border-radius: 10px;
          overflow: hidden;
          background: #fff;
          transition: transform 0.2s ease-in-out;
          cursor: pointer;
        }
        .flight-card:hover {
          transform: scale(1.03);
        }
        .flight-image {
          height: auto;
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
