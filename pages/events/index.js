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


  const [getUser] = getObjectActions["useGetUserById"]();
  const [getEventByClubId] = getObjectActions["useGetClubById"]();  

  const [userById, setUserById] = useState();
  const [myEvent, setMyEvent] = useState([]);
  
  useEffect(() => {
    const getUserById = async () => {
      const userId = "640048cfe1433d095e2f0610";
      const { data } = await getUser({
        variables: { userId }
      });
      setUserById(data);
    };

    getUserById();
  }, []);


  useEffect(()=>{
    const getEventByClub = async () => {
      const clubToUniversityId = "647055ebbbd70a110d41dadb"
      const { data } = await getEventByClubId({
        variables: { clubId: clubToUniversityId },
      });
      setMyEvent({...data.club.events})
    };
    getEventByClub();
  }, []);


  useEffect(() => {
    const getUsers = async () => {
      const { data } = await getObjects();
      return setEventData(data)
    };
    getUsers();
  }, [getObjects]);

  // Object.values(clubs).map((item) => (
  //   item.map((club) => (


    Object.values(myEvent).map((event) => {
      console.log("aaa",event);
    })
  ;

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
                            src={evt.eventImage}
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
              <Tab eventKey="followsClubs" title="Takip Ettiğim Kulüp Etkinlikleri">
                {Object.values(myEvent).map((evt) => 
                  <div className="row">
                    <div key={evt.id} className="col-md-6 col-lg-4 mb-4">
                      <div className="upcoming-events__item">
                        <div className="image">
                          <img
                            className="img-fluid"
                            src={evt.eventImage}
                            alt={evt.eventname}
                          />
                          <div className="popular">
                            {evt?.eventcategory}
                          </div>

                        </div>
                        <div className="upcoming-events__item__info">
                          <div className="title">
                          {console.log("id",evt?.id)}
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
                )}
              </Tab>
             
            </Tabs>
          }
        </div>
      </div>
    </Layout>
  );
};

export default EventPage;


