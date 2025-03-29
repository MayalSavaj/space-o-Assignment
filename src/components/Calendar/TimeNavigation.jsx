
const TimeNavigation = () => {
    const timeOptions = ["1 hour", "2 hour", "3 hour"];
    const dayOptions = ["Day", "1 Day", "2 Day"];
    function opneSidebar() {
        const sidebar = document.querySelector(".sidebar-container");
        const gridAll = document.getElementById("grid-all");

        if (sidebar && gridAll) {
            sidebar.style.transition = "transform 0.3s ease-in-out";
            sidebar.style.transform = "translateX(0)";
            sidebar.style.display = "block";
            gridAll.style.display = "none";
        }
    }
    return (
        <div className="time">
            <div className="time-controls">
                {[timeOptions, dayOptions].map((options, index) => (
                    <div className="time-dropdown" key={index}>
                        <select>
                            {options.map((option, idx) => (
                                <option key={idx}>{option}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            <div>
                <span className="nav-arrow">&#8249;</span>
                <span className="today-btn">Today</span>
                <span className="nav-arrow">&#8250;</span>
            </div>

            <div className="assign-sidbar-icon" onClick={opneSidebar}>
                <svg width="25.567" height="18" viewBox="0 0 25.567 18">
                    <g transform="translate(-776 -462)">
                        <rect width="12.749" height="2.499" rx="1.25" transform="translate(776 462)" fill="black" />
                        <rect width="25.567" height="2.499" rx="1.25" transform="translate(776 469.75)" fill="black" />
                        <rect width="17.972" height="2.499" rx="1.25" transform="translate(776 477.501)" fill="black" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default TimeNavigation;
