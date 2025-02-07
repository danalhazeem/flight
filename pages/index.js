import { useState } from "react";
import Head from "next/head";
import {Flights} from "./FlightOffers";
import flightService from "@/services/flight.service";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import FlightCard from "@/components/FlightCard";
import FlightsPage from "./FlightOffers";


export default function FlightPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    flightService
      .getFlights(from, to, date)
      .then((flightsData) => {
        setFlights(flightsData);
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
        setFlights([]);
      });
  }

  return (
    <>
      <Head>
        <title>Flight Booking System - Flights</title>
        <meta
          name="description"
          content="A Flight Booking System application built using Next.js & Spring Cloud"
        />
      </Head>

      <main
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: "100vh", // Full viewport height
          backgroundImage:
            'url("https://media.istockphoto.com/id/951121064/photo/plane-flying-over-business-towers-in-hongkong.jpg?s=612x612&w=0&k=20&c=PNzE_Jed7J0OwuNGXQDQ7pwVsrzmk7MgoZtCuZIH7FA=")',
          backgroundSize: "cover", // Ensures the image covers the entire container without stretching
          backgroundPosition: "center", // Centers the background image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
          backgroundAttachment: "fixed", // Keeps the image fixed when scrolling (only for large screens)
          padding: 0,
          margin: 0,
        }}
      >
        <div className="text-center text-white">
          {/* Heading */}
          <h1 className="heading boldest">Flights</h1>

          {/* Search Form */}
          <form className="row mt-4" onSubmit={handleSubmit}>
            <div className="col-12 col-md-4 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="From"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-4 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="To"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />
            </div>
            <div className="col-12 col-md-4 mb-2">
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#72A0C1",
                  borderColor: "#72A0C1",
                  color: "white",
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </main>
        <FlightsPage /> 

        <Footer />
    </>
  );
}
