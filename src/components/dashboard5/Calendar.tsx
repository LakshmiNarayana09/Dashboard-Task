
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useState } from "react";

function Calendar() {
  const [month, setMonth] = useState(8);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const calendarDays = [
    ["", "", "1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10", "11", "12"],
    ["13", "14", "15", "16", "17", "18", "19"],
    ["20", "21", "22", "23", "24", "25", "26"],
    ["27", "28", "29", "30", "", "", ""],
  ];

  return (
    <section className="border-b border-gray-100 bg-white p-5">
      
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          {months[month]} 2020
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() =>
              setMonth((value) =>
                Math.max(0, value - 1)
              )
            }
            className="text-gray-400 hover:text-gray-700"
          >
            <ChevronLeft size={13} />
          </button>

          <button
            onClick={() =>
              setMonth((value) =>
                Math.min(11, value + 1)
              )
            }
            className="text-gray-400 hover:text-gray-700"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </div>

      
      <div className="mb-2 grid grid-cols-7 text-center">
        {[
          "MO",
          "TU",
          "WE",
          "TH",
          "FR",
          "SA",
          "SU",
        ].map((day) => (
          <span
            key={day}
            className="text-[7px] font-medium text-gray-300"
          >
            {day}
          </span>
        ))}
      </div>

      
      <div className="space-y-2">
        {calendarDays.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="grid grid-cols-7 text-center"
          >
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={`
                  mx-auto flex h-6 w-6 items-center
                  justify-center rounded-full
                  text-[8px]
                  ${
                    day === "12"
                      ? "bg-[#159447] text-white"
                      : "text-gray-500"
                  }
                `}
              >
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Calendar;