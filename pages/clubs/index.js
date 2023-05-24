import Layout from "../../components/global/layout";
import React, { useState } from "react";
import InnerPageLayout from "../../components/inner-page-layout";
import { API_URL } from "../../config";
import Pagination from "../../components/pagination";
import { Navbar } from "react-bootstrap";
import LeftSidebar from "../../components/LeftSidebar";
import { getObjectActions } from "../../apollo/actions/index";
import ClubList from "../../components/ClubList";

const Clubs = ({  }) => {

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
            <LeftSidebar />
            <ClubList/>
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
