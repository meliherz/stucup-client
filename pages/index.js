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

  const [getObjects] = getObjectActions["useGetEvents"]();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await getObjects();
      return setEventData(data)
    };
    getEvents();
  }, [getObjects]);

  return (
    <Layout title="Stucup">
      <Hero />
      <UpcomingEvents events={eventData?.events}/>
      <BestClubs />
      <HowItWorks />
    </Layout>
  );
}

