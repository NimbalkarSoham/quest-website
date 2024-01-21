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
            <h1 className="mt-10 text-center text-5xl font-bold text-black hover:text-indigo-500 transition-colors">
                EVENTS
            </h1>
            <div className="w-full mx-auto flex flex-wrap items-center ">
                {events}
            </div>
        </Layout>
    );
};

export default events;
