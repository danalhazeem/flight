import React from "react";

const Footer = () => {
  return (
    <footer 
      className="text-white py-4" 
      style={{
        backgroundColor: "#72A0C1",  // Set the background color to #72A0C1
        position: "relative", 
        bottom: "0", 
        width: "100%"
      }}
    >
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Flight Booking System. All Rights Reserved.</p>
        <div>
          <a 
            href="https://www.facebook.com" 
            className="text-white mx-2" 
            style={{ textDecoration: "none" }}
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a 
            href="https://www.twitter.com" 
            className="text-white mx-2" 
            style={{ textDecoration: "none" }}
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a 
            href="https://www.instagram.com" 
            className="text-white mx-2" 
            style={{ textDecoration: "none" }}
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
