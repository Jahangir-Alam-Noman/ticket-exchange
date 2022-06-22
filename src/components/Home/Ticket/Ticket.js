/** @format */

import React from "react";
import FinalTicket from "../FinalTicket/FinalTicket";

import LeftMenu from "../LeftMenu/LeftMenu";
import NewsFeed from "../NewsFeed/NewsFeed";
import PopularEvents from "../PopularEvents/PopularEvents";

const Ticket = () => {
  return (
    <div>
      <div className="container ticket p-4 text-start">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <LeftMenu></LeftMenu>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <FinalTicket></FinalTicket>
            <PopularEvents></PopularEvents>
            <NewsFeed></NewsFeed>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
