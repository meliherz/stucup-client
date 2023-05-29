import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { getObjectActions } from "../../apollo/actions/index";
import Layout from "../../components/global/layout";
import { FaUserCircle } from "react-icons/fa";
import { ImLocation2, ImTicket, ImCalendar, ImPriceTags, ImClock } from "react-icons/im";
import InnerPageLayout from "../../components/inner-page-layout";
import Link from "next/link";
import SectionTitle from "../../components/global/section-title";
import md from 'markdown-it';

const EventSinglePage = ({ }) => {

  const router = useRouter();

  const { slug } = router.query;

  const [getObjects] = getObjectActions["useGetEventById"]();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const getEvent = async () => {
      const { data } = await getObjects({
        variables: { eventId: slug }
      });
      setEventData(data)
    };
    getEvent();
  }, [slug])
  return (
    <>
      {(!eventData) ? <div className='row'> Loading... </div> :
        <Layout title={eventData?.event?.eventname}>
          <InnerPageLayout title={eventData?.event?.eventname} />
          <div className="singlePage section-padding">
            <div className="container">
              <h2>{eventData?.event?.eventname}</h2>
              <p>{eventData?.event?.location}</p>
              <div className="row">
                <div className="col-lg-8">
                  <img
                    className="w-100 object-fit-cover"
                    src={eventData?.event?.eventImage}
                    alt={eventData?.event?.eventname}
                  />
                  <h3 className="pt-2 mb-2"><label>Etkinlik Hakkında</label><br/><hr/><h4>{eventData?.event?.description}</h4></h3>
                  <div className="singlePage__event-description" />
                </div>
                <div className="col-lg-4">
                  <div className="singlePage__sidebar">
                    <h2 className="singlePage__sidebar--title">Etkinlik Detayları</h2>
                    <div className="singlePage__sidebar--details">
                      <div className="d-flex align-items-center gap-4 mb-4 mb-lg-5">
                        <div className="singlePage__sidebar--icon">
                          <FaUserCircle />
                        </div>
                        <div>
                          <p>Organized by</p>
                          <h5>{eventData?.event?.organizer}</h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-4 mb-4 mb-lg-5">
                        <div className="singlePage__sidebar--icon">
                          <ImCalendar />
                        </div>
                        <div>
                          <p>Tarih & Saat</p>
                          <h5>{eventData?.event?.eventDate}, {eventData?.event?.eventTime}</h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-4 mb-4 mb-lg-5">
                        <div className="singlePage__sidebar--icon">
                          <ImLocation2 />
                        </div>
                        <div>
                          <p>Etkinlik Konumu</p>
                          <h5>{eventData?.event?.location}</h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-4 mb-4 mb-lg-5">
                        <div className="singlePage__sidebar--icon">
                          <ImTicket />
                        </div>
                        <div>
                          <p>Kalan Kontenjan</p>
                          <h5>{eventData?.event?.capacity} kişilik kontenjan vardır.</h5>
                        </div>
                      </div>
                      <Link className="button w-100 mt-4" target="_blank" href={`/event-registration/${slug}`}>
                        Etkinliğe Kayıt Ol
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      }
    </>
  );
};

export default EventSinglePage;

