const TeamGrid = () => {
    
    const timeSlots = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm"];

    const teamMembers = [
        { name: "Member 1", color: "#FFA500", appointments: [] },
        {
            name: "Member 2", color: "#90EE90", appointments: [
                {
                    gridIndex: 0, width: "150%", left: "0%", time: "10:20 am - 10:45 am",
                    backgroundColor: "rgba(238, 246, 255, 1)", borderColor: "rgba(203, 221, 238, 1)"
                },
                {
                    gridIndex: 3, width: "150%", left: "50%", time: "8:00 am - 8:30 am",
                    backgroundColor: "rgba(238, 246, 255, 1)", borderColor: "rgba(203, 221, 238, 1)"
                }
            ]
        },
        { name: "Member 3", color: "#40E0D0", appointments: [] },
        { name: "Member 4", color: "#ADD8E6", appointments: [] },
        {
            name: "Member 5", color: "#87CEFA", appointments: [
                {
                    gridIndex: 1, width: "150%", left: "50%", time: "09:30 am - 10:00 pm",
                    backgroundColor: "rgba(251, 245, 255, 1)", borderColor: "rgba(232, 227, 245, 1)"
                }
            ]
        },
        { name: "Member 6", color: "#98FB98", appointments: [] },
        { name: "Member 7", color: "#FFC0CB", appointments: [] },
        {
            name: "Member 8", color: "#FFEFD5", appointments: [
                {
                    gridIndex: 4, width: "150%", left: "50%", time: "11:30 am - 12:00 pm",
                    backgroundColor: "rgba(251, 245, 255, 1)", borderColor: "rgba(232, 227, 245, 1)"
                },
                {
                    gridIndex: 6, width: "150%", left: "50%", time: "01:15 pm - 2:00 pm",
                    backgroundColor: "rgba(254, 247, 236, 1)", borderColor: "rgba(239, 216, 192, 1)"
                }
            ]
        },
        { name: "Member 9", color: "#FFA07A", appointments: [] },
        { name: "Member 10", color: "#DDA0DD", appointments: [] },
        {
            name: "Member 11", color: "#FFFFA0", appointments: [
                {
                    gridIndex: 2, width: "150%", left: "50%", time: "12:30 pm - 1:00 pm",
                    backgroundColor: "rgba(238, 246, 255, 1)", borderColor: "rgba(203, 221, 238, 1)"
                }
            ]
        }
    ];
    return (
        <div className="main-grid-container">
            <div className="grid-container">
                <div className="grid-header">
                    <div className="grid-header-cell">Team</div>
                    {timeSlots.map((slot, index) => (
                        <div key={index} className="grid-header-cell">
                            {slot}
                        </div>
                    ))}
                </div>

                {teamMembers.map((member, index) => (
                    <div className="team-row" key={index}>
                        <div className="team-member-cell">
                            <span className="member-dot" style={{ backgroundColor: member.color }}></span>
                            {member.name}
                        </div>
                        {[...Array(9)].map((_, i) => (
                            <div className="grid-cell" key={i}>
                                <div className="line"></div>
                                {member.appointments.map((appt, idx) =>
                                    appt.gridIndex === i ? (
                                        <div
                                            key={idx}
                                            className="appointment"
                                            style={{
                                                width: appt.width,
                                                left: appt.left,
                                                backgroundColor: appt.backgroundColor,
                                                borderLeft: `3px solid ${appt.borderColor}`
                                            }}
                                        >
                                            <div>Client Name</div>
                                            <div className="appointment-time">{appt.time}</div>
                                        </div>
                                    ) : null
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamGrid;