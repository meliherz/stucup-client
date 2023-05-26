import { useRouter } from 'next/router';
import Link from "next/link";
import Layout from '../../components/global/layout';
import InnerPageLayout from '../../components/inner-page-layout';
import React, { useEffect, useState } from "react";
import { getObjectActions } from "../../apollo/actions/index";
import { ImLocation2, ImTicket, ImCalendar, ImPriceTags, ImClock } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import SectionTitle from "../../components/global/section-title";

export default function ClubDetails() {

  const router = useRouter();

  const { slug } = router.query;

  const [getObjects] = getObjectActions["useGetClubById"]();
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    const getClub = async () => {
      const { data } = await getObjects({
        variables: { clubId: slug }
      });
      setClubData(data)
    };
    getClub();
  }, [slug])
  console.log(clubData)
  return (
    //Club yerine club'ın etkinliklerini çekeceğiz onları bastıracağız.
    <Layout title={clubData?.club?.clubname || ""}>
      <InnerPageLayout title={clubData?.club?.clubname || ""} />
      <div className="row">
        { (!clubData) ? <div className='row'> Loading... </div> :
        Object.values(clubData).map((club) => (
            <div key={club.id} className="col-md-6 col-lg-4 mb-4">
              <article className="blog__single-post h-100 translateEffect1">
                <div className="blog__single-post__image">
                  <Link href={`/clubs/${club?.id}`}>
                  </Link>
                </div>
                <div className="blog__single-post__body">
                  <div className="blog__single-post__content">
                    <h2 className="fs-4">
                      <Link href={`/clubs/${club?.id}`}>
                        {club?.clubname}
                      </Link>
                    </h2>
                    <p className="m-0">
                      {club?.description?.slice(0, 95)}..
                    </p>
                  </div>
                  <div className="blog__single-post__meta">
                    <div className="d-flex gap-2 align-items-center">
                      {club?.university.universityName}
                    </div>
                    <ul>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          ))
        }
      </div>
    </Layout>
  );
}

