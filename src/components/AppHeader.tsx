import { CalendarDays, ChevronDown, Search, UserRound } from "lucide-react";
import { useLocation } from "react-router";

const pageTitles: Record<string, string> = {
  "/dashboard": "Today Overview",
  "/attendance-logs": "Attendance Logs",
  "/users": "Users",
  "/reports": "Reports",
};

export const AppHeader = () => {
  const location = useLocation();

  const currentPage = pageTitles[location.pathname] ?? "Attendance Tracking";

  const today = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex min-h-20 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-lg font-bold text-slate-900 sm:text-xl">
              Attendance Tracking
            </h1>

            <span className="hidden h-5 w-px bg-slate-300 sm:block" />

            <span className="hidden text-sm font-medium text-slate-500 sm:block">
              {currentPage}
            </span>
          </div>

          <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
            <CalendarDays size={13} />
            <span>{today}</span>
          </div>
        </div>

        <div className="ml-auto hidden max-w-md flex-1 md:block">
          <label className="relative block">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search employees"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-teal-500 focus:bg-white"
            />
          </label>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-100"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-teal-700">
            <UserRound size={18} />
          </span>

          <span className="hidden text-left lg:block">
            <span className="block text-sm font-semibold text-slate-800">
              Admin Profile
            </span>

            <span className="block text-xs text-slate-500">
              Administrator
            </span>
          </span>

          <ChevronDown size={16} className="hidden text-slate-500 lg:block" />
        </button>
      </div>
    </header>
  );
};