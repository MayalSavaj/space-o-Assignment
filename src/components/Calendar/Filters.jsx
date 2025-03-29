const Filters = () => {
    const statusOptions = ["Status", "Active", "Inactive"];
    const teamOptions = ["Team", "Team A", "Team B"];

    return (
        <div className="filters">
            {[statusOptions, teamOptions].map((options, index) => (
                <div className="filter-dropdown" key={index}>
                    <select>
                        {options.map((option, idx) => (
                            <option key={idx}>{option}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default Filters;
