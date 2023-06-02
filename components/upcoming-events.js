import Link from "next/link";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "./global/section-title";
import {
  ImPriceTags,
  ImLocation2,
  ImTicket,
  ImCalendar,
  ImClock,
} from "react-icons/im";
import { API_URL } from "../config";

const UpcomingEvents = ({ events }) => {
  const festivalEvents = events?.filter(
    (evt) => evt.category === "sosyal"
  );
  console.log("fest", festivalEvents)
  const corporateEvents = events?.filter(
    (evt) => evt.category === "teknoloji"
  );

  const [key, setKey] = useState("AllEvents");
  return (
    <div id="upcoming-events" className="upcoming-events section-padding">
      <div className="container">
        <SectionTitle title="Yaklaşan Etkinlikler" />
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="AllEvents" title="Tüm Etkinlikler">
            <div className="row">
              {events?.slice(0, 6).map((evt) => (
                <div key={evt.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="upcoming-events__item">
                    <div className="image">
                      <img
                        className="img-fluid"
                        src={`${evt?.eventImage}`}
                        alt={evt.eventname}
                      />
                      {evt?.attributes?.eventType !== "none" ? (
                        <div className="popular">
                          {evt?.category}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="upcoming-events__item__info">
                      <div className="title">
                        <h3>
                          <Link href={`/events/${evt?.id}`}>
                            {evt?.eventname}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
           <Tab eventKey="teknoloji" title="Teknoloji">
            <div className="row">
              {corporateEvents?.slice(0, 6).map((evt) => (
                <div key={evt.id} className="col-md-6 col-lg-4 mb-4">
                <div className="upcoming-events__item">
                  <div className="image">
                    <img
                      className="img-fluid"
                      src={`${evt?.eventImage}`}
                      alt={evt?.eventname}
                    />
                    {evt?.attributes?.eventType !== "none" ? (
                      <div className="popular">
                        {evt?.category}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="upcoming-events__item__info">
                    <div className="title">
                      <h3>
                        <Link href={`/events/${evt?.attributes?.slug}`}>
                          {evt?.eventname}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="sosyal" title="Sosyal">
            <div className="row">
              {festivalEvents?.slice(0, 6).map((evt) => (
                <div key={evt.id} className="col-md-6 col-lg-4 mb-4">
                <div className="upcoming-events__item">
                  <div className="image">
                    <img
                      className="img-fluid"
                      src={`${evt?.eventImage}`}
                      alt={evt.eventname}
                    />
                    {evt?.attributes?.eventType !== "none" ? (
                      <div className="popular">
                        {evt?.category}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="upcoming-events__item__info">
                    <div className="title">
                      <h3>
                        <Link href={`/events/${evt?.attributes?.slug}`}>
                          {evt?.eventname}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default UpcomingEvents;
