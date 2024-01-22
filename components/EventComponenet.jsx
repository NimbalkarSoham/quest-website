import React from "react";

const EventComponent = (props) => {
    return (
        <div className="flex flex-col bg-white mx-auto rounded-lg hover:scale-105 duration-200 ease-in-out md:w-[300px]">
            <div className="w-auto md:w-1/2">
                <img
                    className="rounded-t-lg max-w-[300px] hover:brightness-75 duration-200 md:w-[800px] md:h-[200px] md:object-cover"
                    src={props.data.img}
                    alt={props.data.title} // Add alt attribute for accessibility
                />
            </div>
            <div className="flex w-full flex-col justify-between py-4 px-6 text-gray-800">
                <h3 className="font-bold text-lg px-2">
                    {props.data.title}
                </h3>
                <p className="font-extralight px-2 pt-2 font-serif">{props.data.desc.substring(0, 50)}...</p>
                <div>
                    <p className="font-extralight px-2">
                        SPEAKERS: {props.data.speaker}
                    </p>
                    <p className="mt-2 text-sm font-semibold tracking-wide text-gray-700">
                        {props.data.venue} &bull; {props.data.date} &bull; {props.data.time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventComponent;
