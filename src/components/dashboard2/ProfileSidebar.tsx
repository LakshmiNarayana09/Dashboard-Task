
import { favoritesData, profileData } from "../../data/mockDashboardData";

function Avatar({
  initial,
  large = false,
}: {
  initial: string;
  large?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-[#df8d78] font-medium text-white ${
        large ? "h-20 w-20 text-xl" : "h-7 w-7 text-[10px]"
      }`}
    >
      {initial}
    </div>
  );
}

function ProfileSidebar() {
  return (
    <aside className="w-[240px] shrink-0 border-r border-gray-100 bg-white px-5 py-8">
      
      <div className="flex flex-col items-center text-center">
        <Avatar
          initial={profileData.initial}
          large
        />

        <h2 className="mt-3 text-[11px] font-medium text-gray-700">
          {profileData.name}
        </h2>

        <p className="mt-1 text-[9px] text-gray-400">
          {profileData.role}
        </p>

        <button
          type="button"
          className="mt-3 rounded-md bg-[#199447] px-5 py-1.5 text-[8px] font-medium text-white transition hover:bg-[#147b3b]"
        >
          Edit profile
        </button>
      </div>

      
      <div className="mt-6 border-t border-gray-100 pt-5">
        <h3 className="text-[8px] font-medium uppercase text-gray-600">
          Info
        </h3>

        <div className="mt-4 space-y-4">
          <div>
            <p className="text-[7px] uppercase text-gray-400">
              Email
            </p>

            <p className="mt-1 break-all text-[8px] text-gray-600">
              {profileData.email}
            </p>
          </div>

          <div>
            <p className="text-[7px] uppercase text-gray-400">
              Phone
            </p>

            <p className="mt-1 text-[8px] text-gray-600">
              {profileData.phone}
            </p>
          </div>

          <div>
            <p className="text-[7px] uppercase text-gray-400">
              Birthday
            </p>

            <p className="mt-1 text-[8px] text-gray-600">
              {profileData.birthday}
            </p>
          </div>

          <div>
            <p className="text-[7px] uppercase text-gray-400">
              Location
            </p>

            <p className="mt-1 text-[8px] text-gray-600">
              {profileData.location}
            </p>
          </div>
        </div>
      </div>

      
      <div className="mt-6 border-t border-gray-100 pt-5">
        <h3 className="text-[8px] font-medium uppercase text-gray-600">
          Favorites
        </h3>

        <div className="mt-4 space-y-4">
          {favoritesData.map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-2.5"
            >
              <Avatar initial={person.initial} />

              <div className="min-w-0">
                <p className="truncate text-[8px] font-medium text-gray-600">
                  {person.name}
                </p>

                <p className="truncate text-[7px] text-gray-400">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default ProfileSidebar;