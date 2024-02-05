"use client";
import React, { useEffect, useState } from "react";
import { eventData } from "@/data/event";
import EventComponent from "@/components/EventComponenet";
import Layout from "@/components/Layout";
import Link from "next/link";
import Loader from "@/components/Loader"

const events = () => {
  const [eventsData, setEventsData] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEventsData(data);
    };

    if (eventsData == null) {
      fetchEvents();
    }
  }, []);

  const events = eventsData?.map((event) => {
    let index = eventsData?.indexOf(event);
    let left = index % 2 === 0 ? false : true;
    return (
      <Link href={`/events/${event._id}`}>
        <EventComponent left={left} data={event} key={event.title} />
      </Link>
    );
  });
    if(eventsData!=null){
        return (
        
            <Layout
                title="Events"
                content="View all the events conducted by QuestIT Cell"
            >
    
                <h1 className="mt-10 text-center mb-10 text-5xl font-bold text-black ">
                    Our Work!
                </h1>
                <div className="px-60">
                <div className="my-8 space-y-4 grid grid-cols-1 md:grid-cols-3 md:space-y-0 gap-3">
                    {events}
                </div>
                </div>
                
              
            </Layout>
        );
    }
    else{
        return <Loader/>
    }
    
};

export default events;
