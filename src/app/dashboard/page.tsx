import { Metadata } from "next";
import PageDashboard from "./_page";

export const metadata: Metadata = {
  title: "Dashboard | Beauty Theme",
};

function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl text-[#202224] py-2">Dashboard</h1>
      <PageDashboard />
    </div>
  );
}

export default Dashboard;
