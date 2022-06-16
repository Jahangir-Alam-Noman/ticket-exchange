import React from "react";

const Footer = () => {
  return (
    <div className="overlay footer text-white">
      <div className="container text-start">
        <p className="fw-bolder">The Ticket .Exchange</p>
        <ul>
          <li>Home</li>
          <li>Sign In</li>
          <li>Sign Up</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <p className="reserved">
        &copy;2021-2022-Sport Ticket Expert LLC. All rights are reserved.
      </p>
    </div>
  );
};

export default Footer;
