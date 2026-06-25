import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ClipboardList,
  FileBarChart,
  LayoutDashboard,
  LogOut,
  UsersRound,
} from "lucide-react";
import { NavLink } from "react-router";

type NavigationItem = {
  label: string;
  to: string;
  icon: LucideIcon;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Attendance Logs",
    to: "/attendance-logs",
    icon: ClipboardList,
  },
  {
    label: "Users",
    to: "/users",
    icon: UsersRound,
  },
  {
    label: "Reports",
    to: "/reports",
    icon: FileBarChart,
  },
];

export const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-[#0d5964] px-4 py-6 text-white lg:flex">
      <div className="mb-10 flex items-center gap-3 px-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
          <Activity size={23} />
        </span>

        <div>
          <p className="text-lg font-bold tracking-tight">ATTENDANCE</p>
          <p className="text-xs text-teal-100">Biometric dashboard</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navigationItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-teal-100 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Icon size={19} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto border-t border-white/10 pt-5">
        <div className="mb-4 flex items-center gap-3 rounded-xl bg-white/10 p-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-200 font-bold text-teal-900">
            A
          </span>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Admin Profile</p>
            <p className="truncate text-xs text-teal-100">
              System Administrator
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-teal-100 transition hover:bg-rose-500/20 hover:text-white"
        >
          <LogOut size={19} />
          Logout
        </button>
      </div>
    </aside>
  );
};