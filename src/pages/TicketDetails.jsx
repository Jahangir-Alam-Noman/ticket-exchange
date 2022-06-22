import React from "react";
import Banner from "../components/Home/Banner/Banner";
import LeftMenu from "../components/Home/LeftMenu/LeftMenu";
import { Link } from "react-router-dom";
import image from "../assets/img/category/category_361.jpg";
import PopularEvents from "../components/Home/PopularEvents/PopularEvents";
import MainTicketDetails from "../components/Home/MainTicketDetails/MainTicketDetails";

const TicketDetails = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container ticket p-4 text-start">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
            <LeftMenu></LeftMenu>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/home">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/ticketDetailsChampionLeague">
                    Champions League
                  </Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <a href="#"> Champions League Final</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <p className="h1 details_head">Champions League Final Tickets</p>
              <div className="col-sm-3">
                <img src={image} alt="" className="img-fluid rounded-3" />
              </div>
              <div className="col-sm-9">
                <p className="ticket_details">
                  Buy Champions League Final 2022 Tickets Grab your Champions
                  League Final tickets on TheTicket.Exchange, your fan to fan
                  online ticket exchange marketplace. Choose an event from the
                  upcoming events under Champions League Final to see the
                  variety of tickets available. You are also very welcome to
                  sell your spare Champions League Final tickets on
                  TheTicket.Exchange, please be advised that listing and
                  advertisig your Champions League Final tickets is 100% free on
                  TheTicket.Exchange. All Champions League Final tickets are
                  fully protected by TheTicket.Exchange's 100% Moneyback
                  Guarantee!
                </p>
              </div>
            </div>
            <MainTicketDetails></MainTicketDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
