export const RecentAttendanceTable = () => {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Recent Attendance Activity
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Latest biometric check-ins from today.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3 font-semibold">Employee</th>
              <th className="px-5 py-3 font-semibold">Date</th>
              <th className="px-5 py-3 font-semibold">Shift</th>
              <th className="px-5 py-3 font-semibold">Status</th>
              <th className="px-5 py-3 font-semibold">Check In</th>
              <th className="px-5 py-3 font-semibold">Check Out</th>
              <th className="px-5 py-3 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan={7}
                className="px-5 py-14 text-center text-sm text-slate-500"
              >
                No attendance activity has been synced yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};