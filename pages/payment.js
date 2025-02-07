import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function PaymentPage() {
  const router = useRouter();
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
    passportNumber: "",
    country: ""
  });

  // Load selected flight from localStorage
  useEffect(() => {
    const flightData = localStorage.getItem("selected-flight");
    if (flightData) {
      setSelectedFlight(JSON.parse(flightData));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  // Handle payment submission
  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment successful!");
    localStorage.removeItem("selected-flight");
    router.push("/confirmation");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center" style={{ color: "#72A0C1" }}>
            Payment Page
          </h2>

          {selectedFlight ? (
            <div
              className="card p-4 mb-4 mx-auto border-radius"
              style={{ maxWidth: "800px", minHeight: "300px" }}
            >
              <h4 className="text-center mb-4">Review Flight Details</h4>
              <p><strong>Airline:</strong> {selectedFlight.airline}</p>
              <p><strong>Route:</strong> {selectedFlight.from} → {selectedFlight.to}</p>
              <p><strong>Class:</strong> {selectedFlight.class}</p>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <p className="mb-0 me-3"><strong>Price:</strong> {selectedFlight.price} {selectedFlight.currency}</p>
                <img
                  src="https://i.pinimg.com/474x/0e/51/08/0e51080ee359e9fbb04345f04383cfd2.jpg"
                  alt="Barcode"
                  style={{ maxWidth: "80%" }}
                />
              </div>
            </div>
          ) : (
            <p className="text-center">No flight selected.</p>
          )}

          <form
            onSubmit={handlePayment}
            className="card p-4 mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <h4 className="text-center mb-4">Enter Payment Details</h4>

            <div className="mb-3">
              <label className="form-label">Passport Number</label>
              <input type="text" name="passportNumber" className="form-control" required onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Country</label>
              <input type="text" name="country" className="form-control" required onChange={handleChange} />
            </div>
            
            <div className="mb-3">
              <label className="form-label"> Full Name</label>
              <input type="text" name="name" className="form-control" required onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input type="text" name="cardNumber" className="form-control" maxLength="16" required onChange={handleChange} />
            </div>

            <div className="mb-3 d-flex gap-2">
              <div>
                <label className="form-label">Expiry Date</label>
                <input type="text" name="expiryDate" className="form-control" placeholder="MM/YY" required onChange={handleChange} />
              </div>
              <div>
                <label className="form-label">CVV</label>
                <input type="text" name="cvv" className="form-control" maxLength="3" required onChange={handleChange} />
              </div>
            </div>

            <button type="submit" className="btn btn-success w-100">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
