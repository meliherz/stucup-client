import { useEffect, useState } from "react";
import { getObjectActions } from "../../apollo/actions";
import { useUser } from "../../libs/auth/useAuth";
import Link from "next/link";
import { ImTicket } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { ImClock } from "react-icons/im";

function myEventSettings(){

    const {user} = useUser();
    const[getEvents] = getObjectActions["useGetEvents"]();
    const [userToEvent, setUserToEvent] = useState();
    useEffect(() => {
        const getClub = async () => {
          const { data } = await getEvents();
          const userEvent=  data?.events?.filter((item) => item?.participants.find((id) => id === user.id))
          setUserToEvent(userEvent)
        };
        
        getClub();
      }, []);

    return(
        
        <>
        {userToEvent?.map((evt) => 
          <div className="row" style={{justifyContent:"center"}}>
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
                      {evt?.eventname}
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
        </>   
    )}
    

export default myEventSettings;