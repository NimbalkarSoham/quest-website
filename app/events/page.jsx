import React from "react";
import { eventData } from "@/data/event";
import EventComponent from "@/components/EventComponenet";
import Layout from "@/components/Layout"

const events = () => {
    const events = eventData.map((event) => {
        let index = eventData.indexOf(event);
        let left = true;
        if (index % 2 === 0) {
            left = false;
        } else {
            left = true;
        }
        return <EventComponent left={left} data={event} key={event.title} />;
    });
    return (
        <Layout
            title="Events"
            content="View all the events conducted by QuestIT Cell"
        >
            <h1 className="mt-10 text-center text-5xl font-bold text-black">
                EVENTS
            </h1>
            <div className="w-100 container mx-auto flex flex-col lg:w-4/5">
                {events}
            </div>
        </Layout>
    );
};

export default events;