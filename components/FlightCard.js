import React from "react";

const FlightCard = ({ flight }) => {
  //Format date to "20 Sep 2025"
  const formattedDate = new Date(flight.departure).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="card border-0 shadow-sm h-100">
      {/* Image */}
      <img 
        src={flight.image} 
        alt={flight.airline} 
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }} 
      />

      {/* Card Body */}
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="fw-bold">{flight.from} to {flight.to}</h5>
        <p className="text-muted">{formattedDate}</p> {/* Display the formatted date */}

        {/* Price & Button */}
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span 
            className="fw-bold  fs-5" 
            style={{ color: "#72A0C1", fontWeight: "bold" }}  // Price color set to #72A0C1 (Blue)
          >
            {flight.price} KWD
          </span>
          <button 
            className="btn"
            style={{ backgroundColor: "#72A0C1", borderColor: "#72A0C1", color: "white" }} // Light blue button
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
