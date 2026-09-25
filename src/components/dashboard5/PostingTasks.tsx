
import { MoreHorizontal } from "lucide-react";

function PostingTasks() {
  const rows = 6;
  const columns = 24;

  const colors = [
    "bg-gray-50",
    "bg-[#e0f5f0]",
    "bg-[#c0ebe3]",
    "bg-[#81d9c9]",
    "bg-[#38bca8]",
  ];

  const cells = Array.from({
    length: rows * columns,
  });

  return (
    <section className="rounded-[5px] border border-gray-100 bg-white p-4">
      
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-[11px] font-semibold text-gray-600">
          Posting Tasks
        </h2>

        <button>
          <MoreHorizontal
            size={14}
            className="text-gray-400"
          />
        </button>
      </div>

      <p className="mb-4 text-[7px] text-gray-400">
        Immediate tasks: Wednesday at 10AM / Wednesday at
        4PM / Important
      </p>

      <div className="flex">
        
        <div className="mr-2 flex flex-col justify-between">
          {[
            "6 AM",
            "8 AM",
            "10 AM",
            "12 PM",
            "2 PM",
            "4 PM",
          ].map((time) => (
            <span
              key={time}
              className="h-[13px] text-[6px] text-gray-300"
            >
              {time}
            </span>
          ))}
        </div>

        
        <div className="min-w-0 flex-1">
          <div
            className="grid gap-[3px]"
            style={{
              gridTemplateColumns:
                "repeat(24, minmax(0, 1fr))",
            }}
          >
            {cells.map((_, index) => {
              const level =
                (index * 7 +
                  Math.floor(index / 24) * 3) %
                colors.length;

              return (
                <div
                  key={index}
                  className={`h-[12px] rounded-[2px] ${colors[level]}`}
                />
              );
            })}
          </div>

          
          <div className="mt-2 grid grid-cols-12 text-[6px] text-gray-300">
            {[
              "12AM",
              "2AM",
              "4AM",
              "6AM",
              "8AM",
              "10AM",
              "12PM",
              "2PM",
              "4PM",
              "6PM",
              "8PM",
              "10PM",
            ].map((time) => (
              <span key={time}>{time}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostingTasks;