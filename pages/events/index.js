import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Layout from "../../components/global/layout";
import {
  ImPriceTags,
  ImLocation2,
  ImTicket,
  ImCalendar,
  ImClock,
} from "react-icons/im";
import Link from "next/link";
import InnerPageLayout from "../../components/inner-page-layout";
import { getObjectActions } from "../../apollo/actions/index"

const EventPage = () => {
  const [key, setKey] = useState("AllEvents");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [getObjects] = getObjectActions["useGetEvents"]();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await getObjects();
      return setEventData(data)
    };
    getUsers();
  }, []);
  return (
    <Layout title="Event Page">
      <InnerPageLayout title="Etkinlikler" />
      <div className="upcoming-events section-padding">
        <div className="container">
          {(!eventData) ? <div className='row'> Loading... </div> :
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="AllEvents" title="Bütün Etkinlikler">
                {Object.values(eventData).map((evt) => 
                (evt.map((evt)=>(
                  <div className="row">
                    <div key={evt.id} className="col-md-6 col-lg-4 mb-4">
                      <div className="upcoming-events__item">
                        <div className="image">
                          <img
                            className="img-fluid"
                            src="https://upload.wikimedia.org/wikipedia/tr/3/31/Kul%C3%BCp.jpg"
                            alt={evt.eventname}
                          />
                          <div className="popular">
                            {evt?.eventcategory}
                          </div>

                        </div>
                        <div className="upcoming-events__item__info">
                          <div className="title">
                            <h3>
                              <Link href={`/events/${evt?.id}`}>{evt?.eventname}</Link>
                            </h3>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="d-flex align-items-center gap-2">
                              <ImTicket />{" "}
                              <span>{evt?.capacity} Kontenjan</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <ImLocation2 /> <span>{evt?.location}</span>
                          </div>
                          <div className="timing">
                            <div className="d-flex align-items-center gap-2">
                              <ImCalendar />
                              <span>{evt?.eventDate}</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                              <ImClock />
                              <span>{evt.eventTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))))}
              </Tab>
              <Tab eventKey="followsClubs" title="Takip Ettiğim Kulüp Etkinliklerim">
                <div className="row">
                  <div key={"evt.id"} className="col-md-6 col-lg-4 mb-4">
                    <div className="upcoming-events__item">
                      <div className="image">
                        {/* <img
                    className="img-fluid"
                    src={``}
                    alt={}
                  /> */}
                        <div className="popular">
                          {"evt?.attributes?.eventType"}
                        </div>
                      </div>
                      <div className="upcoming-events__item__info">
                        <div className="title">
                          <h3>
                            <Link href={`/events/${"evt?.attributes?.slug"}`}>{"evt?.attributes?.name"}</Link>
                          </h3>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="price d-flex align-items-center gap-2">
                            <ImPriceTags /> <span>${"evt.attributes.price"}</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <ImTicket />{" "}
                            <span>{"evt.attributes.tickets"} remaining</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <ImLocation2 /> <span>{"evt.attributes.location"}</span>
                        </div>
                        <div className="timing">
                          <div className="d-flex align-items-center gap-2">
                            <ImCalendar />
                            <span>{"evt.attributes.date"}</span>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <ImClock />
                            <span>{"evt.attributes.time.slice(0, 5)"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          }
        </div>
      </div>
    </Layout>
  );
};

export default EventPage;


