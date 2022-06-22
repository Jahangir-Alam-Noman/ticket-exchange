/** @format */

import React from "react";
import image from "../../../assets/img/newsFeed/bg-module-success.png";

const NewsFeed = () => {
  return (
    <div>
      <div className="container p-0">
        <div className="row">
          <div className="news_feed">
            <img
              src={image}
              alt=""
              className="newsFeed_img d-none d-sm-block"
            />
            <p className="h2 newsFeed_head">LIVE NEWS FEED: </p>
            <div>
              <hr className="horizontal" />
              <p className="newsFeed_head">
                Georgia 4-star LB Dee Crayton adds to June surge for Clemson
                football recruiting for 2023 - Greenville News
              </p>
              <small className="newsFeed_text">
                Georgia 4-star LB Dee Crayton adds to June surge for Clemson
                football recruiting for 2023 Greenville news
              </small>{" "}
              <br />
              <small className="newsFeed_date">
                Sat, 18 Jun 2022 18:27:23 GMT
              </small>
            </div>
            <div>
              <hr className="horizontal" />
              <p className="newsFeed_head">
                Penn State Football: The top 5 recruiting visitors this weekend
                - Victory Bell Rings
              </p>
              <small className="newsFeed_text">
                Penn State Football: The top 5 recruiting visitors this weekend
                - Victory Bell Rings
              </small>{" "}
              <br />
              <small className="newsFeed_date">
                Sat, 18 Jun 2022 10:04:30 GMT
              </small>
            </div>
            <div>
              <hr className="horizontal" />
              <p className="newsFeed_head">
                Texas Football: Steve Sarkisian's culture is trending up -
                Longhorns Wire
              </p>
              <small className="newsFeed_text">
                Texas Football: Steve Sarkisian's culture is trending up -
                Longhorns Wire
              </small>{" "}
              <br />
              <small className="newsFeed_date">
                Sat, 18 Jun 2022 19:30:00 GMT
              </small>
            </div>
            <div>
              <hr className="horizontal" />
              <p className="newsFeed_head">
                3 Texas football freshmen standing out early in summer workouts
                - Hook'em Headlines
              </p>
              <small className="newsFeed_text">
                3 Texas football freshmen standing out early in summer workouts
                - Hook'em Headlines
              </small>{" "}
              <br />
              <small className="newsFeed_date">
                Sat, 18 Jun 2022 19:03:40 GMT
              </small>
            </div>
            <div>
              <hr className="horizontal" />
              <p className="newsFeed_head">
                Why Will Anciaux chose Kansas State football over love for
                basketball - The Topeka Capital-Journal
              </p>
              <small className="newsFeed_text">
                Why Will Anciaux chose Kansas State football over love for
                basketball - The Topeka Capital-Journal
              </small>{" "}
              <br />
              <small className="newsFeed_date">
                Sat, 18 Jun 2022 12:02:33 GMT
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
