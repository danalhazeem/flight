// import { useState } from "react";
// import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/navbar";

// export default function BookingPage() {
//   const [flightClass, setFlightClass] = useState("Economy");
//   const [passengerCount, setPassengerCount] = useState(1);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // For now, just log the booking details
//     console.log(`Booking Details:
//       Class: ${flightClass}
//       Passengers: ${passengerCount}
//     `);
//     alert("Your booking is confirmed!");
//   };

//   return (
//     <>
//       <Head>
//         <title>Flight Booking System - Bookings</title>
//         <meta name="description" content="Flight Booking page" />
//       </Head>

//       <main
//         className="d-flex flex-column align-items-center justify-content-center"
//         style={{
//           minHeight: "100vh",
//           backgroundImage:
//             'url("https://media.istockphoto.com/id/951121064/photo/plane-flying-over-business-towers-in-hongkong.jpg?s=612x612&w=0&k=20&c=PNzE_Jed7J0OwuNGXQDQ7pwVsrzmk7MgoZtCuZIH7FA=")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <Navbar />
//         <div className="text-center text-white">
//           <h1 className="heading boldest">Flight Booking</h1>

//           <form className="row mt-4" onSubmit={handleSubmit}>
//             <div className="col-12 col-md-4 mb-2">
//               <label className="form-label">Class</label>
//               <select
//                 className="form-control"
//                 value={flightClass}
//                 onChange={(e) => setFlightClass(e.target.value)}
//                 required
//               >
//                 <option value="Economy">Economy</option>
//                 <option value="Business">Business</option>
//                 <option value="First Class">First Class</option>
//               </select>
//             </div>
//             <div className="col-12 col-md-4 mb-2">
//               <label className="form-label">Number of Passengers</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 value={passengerCount}
//                 onChange={(e) => setPassengerCount(e.target.value)}
//                 min="1"
//                 required
//               />
//             </div>
//             <div className="col-12 text-center">
//               <button
//                 type="submit"
//                 className="btn"
//                 style={{
//                   backgroundColor: "#72A0C1",
//                   borderColor: "#72A0C1",
//                   color: "white",
//                 }}
//               >
//                 Confirm Booking
//               </button>
//             </div>
//           </form>
//         </div>

//         <Footer />
//       </main>
//     </>
//   );
// }
