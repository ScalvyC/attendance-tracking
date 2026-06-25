import { useState } from "react";
import { RefreshCw } from "lucide-react";

export const DeviceStatusCard = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState("Today, 08:42 AM");

  const handleSync = () => {
    setIsSyncing(true);

    window.setTimeout(() => {
      const currentTime = new Intl.DateTimeFormat("en-GH", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date());

      setLastSynced(`Today, ${currentTime}`);
      setIsSyncing(false);
    }, 800);
  };

  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900">Device Status</h3>

          <p className="mt-1 text-sm text-slate-500">
            Biometric terminal connection
          </p>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Online
        </span>
      </div>

      <div className="mt-5 rounded-xl border border-teal-100 bg-teal-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Last Sync
        </p>

        <p className="mt-1 text-lg font-bold text-slate-900">{lastSynced}</p>

        <p className="mt-1 text-xs text-slate-500">IP Address: 192.168.1.105</p>
      </div>

      <button
        type="button"
        onClick={handleSync}
        disabled={isSyncing}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <RefreshCw size={17} className={isSyncing ? "animate-spin" : ""} />

        {isSyncing ? "Syncing..." : "Sync device"}
      </button>

      <p className="mt-3 text-center text-xs text-slate-400">
        Demo connection data for now
      </p>
    </aside>
  );
};
