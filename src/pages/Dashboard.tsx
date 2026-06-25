import { DeviceStatusCard } from "../components/dashboard/DeviceStatusCard";
import { RecentAttendanceTable } from "../components/dashboard/RecentAttendanceTable";
import { TodayOverview } from "../components/dashboard/TodayOverview";

export const Dashboard = () => {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-bold tracking-[0.16em] text-teal-700">
          TODAY OVERVIEW
        </p>

        <h2 className="mt-1 text-2xl font-bold text-slate-900">
          Attendance at a glance
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monitor check-ins, recent activity, and biometric device health.
        </p>
      </div>

      <TodayOverview />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_20rem]">
        <RecentAttendanceTable />
        <DeviceStatusCard />
      </div>
    </section>
  );
};