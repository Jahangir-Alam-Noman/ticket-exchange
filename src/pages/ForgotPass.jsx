/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Home/Banner/Banner";
import LeftMenu from "../components/Home/LeftMenu/LeftMenu";
// import LeftMenu from "../components/Home/LeftMenu/LeftMenu";

const ForgotPass = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container ticket p-4 text-start">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <LeftMenu></LeftMenu>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <div className="row sign_in">
              <p className="h1 pb-3">Forgot Password?</p>

              <form name="LoginForm" method="post" action="">
                <table
                  cellspacing="0"
                  cellpadding="0"
                  align="center"
                  class="table table-striped table-condensed"
                >
                  <tbody>
                    <tr>
                      <td align="center" valign="middle" nowrap="">
                        Email:
                      </td>
                      <td>
                        <input
                          name="CustomerEmail"
                          type="text"
                          size="30"
                          id="CustomerEmail"
                          required="required"
                          class="form-control"
                          value=""
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type="submit"
                          name="Submit"
                          value="Send Password by Email"
                          class="btn btn-info"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td colspan="2">
                        <Link to="/signin"> Sign In </Link> |
                        <Link to="/signup"> Sign Up </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
