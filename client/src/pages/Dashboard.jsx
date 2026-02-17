import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  return (
    <div>
      <h1>OpenTrack Dashboard</h1>

      <div className="card-grid">
        <DashboardCard title="Programs Applied" value="4" />
        <DashboardCard title="Active Roadmaps" value="2" />
        <DashboardCard title="Open Issues" value="7" />
        <DashboardCard title="Study Hours" value="38" />
      </div>
    </div>
  );
}
