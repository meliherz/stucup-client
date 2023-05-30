import { Inter } from "@next/font/google";
import Hero from "../components/hero";
import Layout from "../components/global/layout";
import UpcomingEvents from "../components/upcoming-events";
import HowItWorks from "../components/how-it-works";
import BestClubs from "../components/BestClubs";
import { getObjectActions } from "../apollo/actions";
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <Layout title="Stucup">
      <Hero />
      <UpcomingEvents />
      <BestClubs />
      <HowItWorks />
    </Layout>
  );
}

