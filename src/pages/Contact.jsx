/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Home/Banner/Banner";
import LeftMenu from "../components/Home/LeftMenu/LeftMenu";
import image from "../assets/img/category/category_361.jpg";

const Contact = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='container ticket p-4 text-start'>
        <div className='row'>
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 '>
            <LeftMenu></LeftMenu>
          </div>
          <div className='col-xs-12 col-sm-8 col-md-8 col-lg-8'>
            <div className='row pb-3'>
              <p className='h1'>Contact Center</p>
              <div class='col text-dark'>
                <span className='fw-bold'> Sport Ticket Expert LLC</span> <br />{" "}
                Sharjah Media City, <br /> Sharjah, UAE. <br />
                Customer Service Email: <br /> sales@theticket.exchange
              </div>
              <div class='col text-dark'>
                Customer Service Helplines: <br />{" "}
                <span className='fw-bold'>+34 (0) 632-792-649</span> <br />
                Mon-Fri (9am-5pm GMT/UK Time)
              </div>
            </div>
            <div className='row p-3'>
              <div class='row'>
                <p className='h4'>
                  Got Questions? Please Send your Inquiries here:
                </p>
                <div class='col'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Your Full Name'
                    aria-label='First name'
                  />
                </div>
                <div class='col'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Your Email'
                    aria-label='Last name'
                  />
                </div>
              </div>
              <div class='row pt-3'>
                <div class='col'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Your Telephone'
                    aria-label='First name'
                  />
                </div>
                <div class='col'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Order #/Ticket Listing #/Query'
                    aria-label='Last name'
                  />
                </div>
              </div>
              <div class='row pt-3'>
                <div class='mb-3'>
                  <textarea
                    class='form-control'
                    placeholder='Your Message...'
                    id='exampleFormControlTextarea1'
                    rows='5'></textarea>
                </div>
              </div>
              <div class='row '>
                <div class='col ps-5'>
                  <img
                    src={image}
                    alt=''
                    className=''
                    height='100'
                    width='200'
                  />
                </div>
                <div class='col'>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Enter Captcha'
                    aria-label='Last name'
                  />
                </div>
              </div>
              <div class='row pt-3 '>
                <button type='submit' class='btn sign_btn text-white'>
                  Send Your Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
