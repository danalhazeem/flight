import React from "react";
import { useRouter } from "next/router";
import flights from "@/data/flightsData";

const FlightsPage = () => {
  const router = useRouter();

  // Handle booking button click
  const handleBookNow = (flight) => {
    localStorage.setItem("selected-flight", JSON.stringify(flight));
    router.push("/payment"); // Navigate to payment page
  };

  return (
    <div className="container my-5">
      <h1 className="fw-bold">Flight Offer Deals</h1>

      {/* Scrollable Flight List */}
      <div className="flights-scroll-container">
        {flights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <img
              src={flight.image}
              alt={flight.to}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h5 className="mt-2">{flight.airline}</h5>
            <p>{flight.from} → {flight.to}</p>

            {/* Price & Button in same line */}
            <div className="price-button-container">
              <p className="flight-price"><strong>{flight.price} {flight.currency}</strong></p>
              <button className="flight-button" onClick={() => handleBookNow(flight)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .flights-scroll-container {
          display: flex;
          overflow-x: auto;
          gap: 16px;
          padding-bottom: 10px;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .flights-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .flight-card {
          flex: 0 0 auto;
          width: 250px;
          background: white;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          scroll-snap-align: start;
          text-align: center;
        }

        .price-button-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
        }

        .flight-price {
          margin: 0;
          font-size: 16px;
          font-weight: bold;
        }

        .flight-button {
          background-color: #72A0C1;
          color: white;
          border: none;
          padding: 6px 10px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 14px;
          transition: background 0.3s;
        }

        .flight-button:hover {
          background-color: #5a8db0;
        }
      `}</style>
    </div>
  );
};

export default FlightsPage;
