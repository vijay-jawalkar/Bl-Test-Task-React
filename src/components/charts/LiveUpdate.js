import React from "react";
import { GoDotFill } from "react-icons/go";

export function LiveUpdate() {
  const list = [
    {
      id: 1,
      title: "2 new cases in Pakistan",
      dotColor: "text-sky-500",
    },
    {
      id: 2,
      title: "4 new cases in Singapore",
      dotColor: "text-sky-500",
    },
    {
      id: 3,
      title: "1 new cases in Thailand",
      dotColor: "text-sky-500",
    },
    {
      id: 4,
      title: "5 new cases in Taiwan",
      dotColor: "text-sky-500",
    },
    {
      id: 5,
      title: "8 new cases in Japan",
      dotColor: "text-sky-500",
    },
    {
      id: 6,
      title: "1 new cases in Brazil",
      dotColor: "text-sky-500",
    },
    {
      id: 7,
      title: "1st cases in Ecuador",
      dotColor: "text-red-600",
    },
    {
      id: 8,
      title: "1st cases in Mexico",
      dotColor: "text-red-600",
    },
  ];
  return (
    <div className="bg-white ">
      <h3 className="py-3 px-2">
        <span className="text-lg font-semibold text-zinc-700">
          {" "}
          Live Update{" "}
        </span>
        <span className="text-xs"> (1 min ago) </span>
      </h3>

      <ul className="list-none py-3 px-2">
        {list.map((item, index) => {
          return (
            <li key={item.id} className="flex items-center gap-1 py-2">
              <p className={`text-lg ${item.dotColor}`}>
                {" "}
                <GoDotFill />{" "}
              </p>
              <p className="text-zinc-600 text-base"> {item.title} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
