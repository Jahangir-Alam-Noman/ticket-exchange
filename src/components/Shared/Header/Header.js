/** @format */

import React from "react";
import logo from "../../../assets/img/header/tte-624-116.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-custom'>
        <div className='container-fluid'>
          {/*   <a className='navbar-brand' href='#'>
            Navbar
          </a> */}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav mx-auto'>
              {/*   <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a> */}
              {/*   <a className='nav-link' href='#'>
                Sign In
              </a> */}
              <Link to='/home' className='nav-link active' aria-current='page'>
                Home
              </Link>
              <Link to='/signin' className='nav-link'>
                Sign In
              </Link>
              <Link to='/signup' className='nav-link'>
                Sign Up
              </Link>
              <Link to='/contact' className='nav-link'>
                Contact Us
              </Link>

              {/*         <a className='nav-link' href='#'>
                Sign Up
              </a>
              <a className='nav-link' href='#'>
                Contact Us
              </a>
 */}
              <select class='' aria-label='Default select example'>
                <option selected>Open this select menu</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>

              <a className='text-decoration-none fs-6 number' href='#'>
                +25 (0) 890-297-759
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class='container p-3'>
        <div class='row'>
          <div class='col-12 col-sm-4 col-md-4 col-lg-4'>
            <img src={logo} alt='' className='img-fluid' />
          </div>
          <div class='col-12 col-sm-4 col-md-4 col-lg-4'>
            <div className='main-search'>
              <form method='get' action='SearchEventsResults.html'>
                <input
                  type='text'
                  name='SearchQuery'
                  class='form-control'
                  value=''
                  placeholder='Search by Event Name, Venue, City'
                  reqyired='required'
                />
                <button
                  class='btn btn-warning btn-circle btn-xl btn-top-search'
                  type='submit'>
                  <i class='fa fa-search'></i>
                </button>
              </form>
            </div>
          </div>
          <div class='col-12 col-sm-4 col-md-4 col-lg-4 help'>
            {/*  <a href='#'>Sign In</a> | <a href='#'>Sign Up</a> |{" "}
            <a href='#'>Help</a> */}
            <Link to='/signin'>Sign In</Link> |{" "}
            <Link to='/signup'>Sign Up</Link> |<Link to='/contact'> Help</Link>
            <h4 class='top-phone'>
              <span class='btn btn-info btn-circle'>
                <i class='fa fa-phone'></i>
              </span>{" "}
              +25 (0) 890-297-759
            </h4>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='h6 text-center text-header'>
          We are The World's Leading Secondary Ticket Marketplace. Ticket Prices
          are set by sellers and may be above or below the Face Value.
        </div>
      </div>
      <div className='container-fluid pb-2'>
        <div className='row'>
          <div className='h6 text-center text-white header_last'>
            {/* <i class='fa fa-bullhorn' aria-hidden='true'></i> */}
            &nbsp; Buy & Sell Tickets for Football, Cricket, Rugby and Tennis
            Events Worldwide
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
