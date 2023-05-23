import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/global/layout";
import { RiTimeFill } from "react-icons/ri";
import { HiShare } from "react-icons/hi";
import InnerPageLayout from "../../components/inner-page-layout";
import { API_URL } from "../../config";
import Pagination from "../../components/pagination";
import { Navbar } from "react-bootstrap";
import ToggleMenu from "../../components/toggleMenu";
import { useRouter } from 'next/router';

const Universities = ({  }) => {

  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //const blogData = data?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
        <Layout title="Üniversiteler">
          <InnerPageLayout title="Üniversiteler" />
          <ToggleMenu />
          <div className="blog section-padding">
            <div className="container">
              <div className="row">
                <div key={"evt.id"} className="col-md-6 col-lg-4 mb-4">
                  <article className="blog__single-post h-100 translateEffect1">
                    <div className="blog__single-post__image">
                      <Link href={`/blogs/`}>
                        <img
                          className="img-fluid"
                          src={``}
                          alt="Blog 01"
                        />
                      </Link>
                    </div>
                    <div className="blog__single-post__body">
                      <div className="blog__single-post__content">
                        <h2 className="fs-4">
                          <Link href={`/blogs/`}>
                            {"evt.attributes.title"}
                          </Link>
                        </h2>
                        <p className="m-0">
                          {"evt.attributes.description.slice(0, 95)"}..
                        </p>
                      </div>
                      <div className="blog__single-post__meta">
                        <div className="d-flex gap-2 align-items-center">
                          <RiTimeFill />
                          {"evt?.attributes?.user?.data?.attributes.createdAt.slice(0, 10)"}
                        </div>
                        <ul>
                          <li>
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=https://huddle-next-js.vercel.app/blogs/${"evt?.attributes?.slug"}`}
                              target="_blank"
                            >
                              <HiShare />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
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

export default Universities;
