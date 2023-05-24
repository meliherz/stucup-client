import { Inter } from "@next/font/google";
import Hero from "../components/hero";
import Layout from "../components/global/layout";
import UpcomingEvents from "../components/upcoming-events";
import HowItWorks from "../components/how-it-works";
import FeaturedEvents from "../components/featured-events";
import Testimonial from "../components/testimonial";
import RecentBlog from "../components/recent-blog";
import { getObjectActions } from "../apollo/actions";
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <Layout title="Stucup">
      <Hero />
      <UpcomingEvents />
      <HowItWorks />
      {/* <FeaturedEvents events={eventsData} /> */}
      <Testimonial />
      {/* <RecentBlog blogs={blogsData} /> */}
    </Layout>
  );
}

