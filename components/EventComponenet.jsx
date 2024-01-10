import React from "react";

const EventComponent = (props) => {
    return (
        <div className="w-100 mx-2 my-4 flex flex-col overflow-hidden rounded-lg bg-white shadow-xl md:flex-row">
            <div className="w-auto md:w-1/2">
                <img
                    className="inset-0 h-full object-cover object-center"
                    src={props.data.img}
                    alt={props.data.title} // Add alt attribute for accessibility
                />
            </div>
            <div className="flex w-full flex-col justify-between py-4 px-6 text-gray-800">
                <h3 className="truncate text-lg font-semibold leading-tight">
                    {props.data.title}
                </h3>
                <p className="mt-2">{props.data.desc}</p>
                <div>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-700">
                        SPEAKERS: {props.data.speaker}
                    </p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-700">
                        {props.data.venue} &bull; {props.data.date} &bull; {props.data.time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventComponent;
