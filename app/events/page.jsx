import React from "react";
import { eventData } from "@/data/event";
import EventComponent from "@/components/EventComponenet";
import Layout from "@/components/Layout";

const events = () => {
    const events = eventData.map((event) => {
        let index = eventData.indexOf(event);
        let left = index % 2 === 0 ? false : true;
        return <EventComponent left={left} data={event} key={event.title} />;
    });

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
};

export default events;
