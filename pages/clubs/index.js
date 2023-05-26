import Layout from "../../components/global/layout";
import { useEffect } from "react";
import React, { useState } from "react";
import InnerPageLayout from "../../components/inner-page-layout";
import { API_URL } from "../../config";
import Pagination from "../../components/pagination";
import { Navbar } from "react-bootstrap";
import LeftSidebar from "../../components/LeftSidebar";
import { getObjectActions } from "../../apollo/actions/index";
import ClubList from "../../components/ClubList";

const Clubs = () => {

  const [getObjects] = getObjectActions["useGetClubs"]();
  const [clubsData, setClubsData] = useState([]);
  const [getObjectsUniversities] = getObjectActions["useGetUniversities"]();
  const [unisData, setUnisData] = useState([]);

  useEffect(() => {
    const getClubs = async () => {
      const { data } = await getObjects();
      setClubsData(data)
    };

    const getUniversities = async () => {
      const { data } = await getObjectsUniversities();
      setUnisData(data.universities);
    }

    getClubs();
    getUniversities();

  }, []);

  const handleUniversityClick = (university) => {
    console.log("clubsDAta",clubsData)
    const filteredClubs = Object.values(clubsData.clubs).map((club) => (club.university.id)).filter((item) => item === university.id);
    console.log("filtered", filteredClubs)
    setClubsData(filteredClubs);
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
          <LeftSidebar unis={unisData} handleUniversityClick={handleUniversityClick} />
          <ClubList clubs={clubsData} />
          {1 > 6 ? (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={data?.length}
              paginate={paginate}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Clubs;


