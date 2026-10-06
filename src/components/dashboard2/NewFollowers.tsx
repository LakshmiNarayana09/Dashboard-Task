
import { newFollowersData } from "../../data/mockDashboardData";

function NewFollowers() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          New Followers
        </h2>

        <select className="rounded-md bg-gray-50 px-2 py-1 text-[7px] text-gray-500 outline-none">
          <option>19 Aug - 25 Aug</option>
        </select>
      </div>

      <div className="mt-3 space-y-3">
        {newFollowersData.map((person) => (
          <div
            key={person.name}
            className="flex items-center gap-2"
          >
            
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#df8d78] text-[8px] font-medium text-white">
              {person.name.charAt(0)}
            </div>

            
            <div className="min-w-0 flex-1">
              <p className="truncate text-[8px] font-medium text-gray-600">
                {person.name}
              </p>

              <p className="truncate text-[6px] text-gray-400">
                {person.role}
              </p>
            </div>

            
            <button className="rounded-md bg-[#eaf8ee] px-3 py-1 text-[7px] font-medium text-[#229447]">
              Follow
            </button>

            <button className="text-[10px] text-gray-400">
              ⋮
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewFollowers;