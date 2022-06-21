/** @format */

import React from "react";
import Banner from "../components/Home/Banner/Banner";
import LeftMenu from "../components/Home/LeftMenu/LeftMenu";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='container ticket p-4 text-start'>
        <div className='row'>
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4 '>
            <LeftMenu></LeftMenu>
          </div>
          <div className='col-xs-12 col-sm-8 col-md-8 col-lg-8'>
            <div className='row sign_in'>
              <p className='h3 signIn_head'>Sign In</p>

              <div className='col-xs-12 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-6 offset-lg-3'>
                <form>
                  <div class='mb-3'>
                    <label
                      for='exampleInputEmail1'
                      class='form-label fw-bolder'>
                      Your Email Address:
                    </label>
                    <input
                      type='email'
                      class='form-control '
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Your Email'
                    />
                  </div>
                  <div class='mb-3'>
                    <label
                      for='exampleInputPassword1'
                      class='form-label fw-bolder'>
                      Your Password:
                    </label>
                    <input
                      type='password'
                      class='form-control'
                      id='exampleInputPassword1'
                    />
                  </div>
                  <button type='submit' class='btn  sign_btn text-white'>
                    Sign In
                  </button>
                </form>
              </div>
              <div id='emailHelp' class='form-text text-center text-dark p-4'>
                <Link to='/forgotpassword' className='forget_password'>
                  {" "}
                  Forgot Password ? &nbsp;
                </Link>
                <Link to='/signup'> &nbsp; Sign Up </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
