import "@/components/Header/Header.css";
export default function Header() {
  return (
    <div className="calendar-header">
      <div className="month-nav">
        <span className="back-arrow">&#8249;</span>
        <span className="month-title">November 2024</span>
      </div>
      <div className="view-tabs">
        {["Events", "Team View", "Team Tracking"].map((tab, index) => (
          <div key={index} className={`view-tab ${tab === "Team View" ? "active" : ""}`}>
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}
