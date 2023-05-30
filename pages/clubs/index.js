import Layout from "../../components/global/layout";
import { useEffect } from "react";
import React, { useState } from "react";
import InnerPageLayout from "../../components/inner-page-layout";
import Pagination from "../../components/pagination";
import LeftSidebar from "../../components/LeftSidebar";
import { getObjectActions } from "../../apollo/actions/index";
import ClubList from "../../components/ClubList";

const Clubs = () => {

  const [getObjects] = getObjectActions["useGetClubs"]();
  const [clubsData, setClubsData] = useState([]);
  const [getObjectsUniversities] = getObjectActions["useGetUniversities"]();
  const [unisData, setUnisData] = useState([]);
  const [getClubByUniversityId] = getObjectActions["useGetClubByUniversityId"]();

  useEffect(() => { 
    const getUniversities = async () => {
      const { data } = await getObjectsUniversities();
      setUnisData(data.universities);
    }

    getClubs();
    getUniversities();

  }, []);

  const getClubs = async () => { 
    const { data } = await getObjects();
    setClubsData(data)
  }

  const handleUniversityClick = (university) => {
    const clubToUniversityId = university.id;
    const getClubByUniId = async () => {
      const { data } = await getClubByUniversityId({
        variables: { clubToUniversityId },
      });
      setClubsData(data);
  }
    
    getClubByUniId();
  };

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Layout title="Kulüpler">
      <InnerPageLayout title="Kulüpler" />
      <div className="blog section-padding">
        <div className="container" style={{ display: "flex", gap: "20px" }}>
          <LeftSidebar unis={unisData} handleUniversityClick={handleUniversityClick} handleAllUniversities={getClubs} />
          <ClubList clubs={clubsData} />
        </div>
      </div>
    </Layout>
  );
};

export default Clubs;


