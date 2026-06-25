import {
  CircleAlert,
  CircleCheckBig,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const summaryCards = [
  {
    label: "Total Users",
    value: "-",
    description: "Registered in the system",
    icon: UsersRound,
    cardClass: "border-slate-200 bg-white",
    iconClass: "bg-sky-50 text-sky-600",
  },
  {
    label: "Checked In",
    value: "-",
    description: "-% of registered users",
    icon: CircleCheckBig,
    cardClass: "border-emerald-100 bg-emerald-50",
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    label: "Not Checked In",
    value: "-",
    description: "Needs attention today",
    icon: CircleAlert,
    cardClass: "border-rose-100 bg-rose-50",
    iconClass: "bg-rose-100 text-rose-600",
  },
  {
    label: "Attendance Rate",
    value: "-%",
    description: "Compared with yesterday",
    icon: TrendingUp,
    cardClass: "border-amber-100 bg-amber-50",
    iconClass: "bg-amber-100 text-amber-600",
  },
];

export const TodayOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
      {summaryCards.map(
        ({ label, value, description, icon: Icon, cardClass, iconClass }) => (
          <article
            key={label}
            className={`rounded-2xl border p-5 shadow-sm ${cardClass}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-600">{label}</p>

                <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  {value}
                </p>
              </div>

              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
              >
                <Icon size={20} />
              </span>
            </div>

            <p className="mt-3 text-xs text-slate-500">{description}</p>
          </article>
        ),
      )}
    </div>
  );
};
