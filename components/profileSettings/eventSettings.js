import { useEffect, useState } from "react";
import { getObjectActions } from "../../apollo/actions";
import { useUser } from "../../libs/auth/useAuth";
import Link from "next/link";
import { ImTicket } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
import { ImClock } from "react-icons/im";

function EventSettings(){

    const {user} = useUser();
    const[getClubs] = getObjectActions["useGetClubs"]();
    const [adminToEvent, setAdminToEvent] = useState();

    useEffect(() => {
        const getClub = async () => {
          const { data } = await getClubs();
          const adminClub=  data?.clubs?.filter((item) => item?.admin?.id == user.id)
          setAdminToEvent(adminClub[0])
          
        };
        getClub();
      }, []);

    return(
        
        <>
        {adminToEvent?.events?.map((evt) => 
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
    

export default EventSettings;