import { Navigate, Route, Routes } from "react-router";
import { AppHeader } from "./components/AppHeader";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { AttendanceLogs } from "./pages/AttendanceLogs";
import { Users } from "./pages/Users";
import { Reports } from "./pages/Reports";

export const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Sidebar />

      <div className="min-h-screen lg:pl-64">
        <AppHeader />

        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance-logs" element={<AttendanceLogs />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};