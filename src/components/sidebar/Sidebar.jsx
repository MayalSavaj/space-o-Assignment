"use client";

import React, { useEffect } from 'react'
import Image from 'next/image';

import "@/components/sidebar/Sidebar.css";
import Imageicon from '../../assets/mask-group4.svg';

const Sidebar = () => {
    function closeSidebar() {
        const sidebar = document.querySelector(".sidebar-container");
        const gridAll = document.getElementById("grid-all");

        if (sidebar && gridAll) {
            sidebar.style.transition = "transform 0.3s ease-in-out";
            sidebar.style.transform = "translateX(100%)";

            setTimeout(() => {
                sidebar.style.display = "none";
                gridAll.style.display = "block";
            }, 300);
        }
    }

    useEffect(() => {
        function handleResize() {
            const sidebar = document.querySelector(".sidebar-container");
            const gridAll = document.getElementById("grid-all");

            if (window.innerWidth > 768) {
                if (sidebar) {
                    sidebar.style.transform = "translateX(0)";
                    sidebar.style.display = "block";
                }
                if (gridAll) {
                    gridAll.style.display = "block";
                }
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const ClientCard = ({ name, address, jobNumber }) => (
        <div className="client-card">
            <div className="client-info">
                <div className="client-name">{name}</div>
                <div className="client-address">{address}</div>
            </div>
            <div>
                <div className="job-number">{jobNumber}</div>
                <button className="assign-btn">Assign</button>
            </div>
        </div>
    );

    const clients = [
        {
            name: "Cameron Williamson",
            address: "4140 Parker Rd.\nAllentown, New Mexico 31134",
            jobNumber: "JOB106731"
        },
        {
            name: "Cameron Williamson",
            address: "4140 Parker Rd.\nAllentown, New Mexico 31134",
            jobNumber: "JOB106731"
        },
        {
            name: "Cameron Williamson",
            address: "4140 Parker Rd.\nAllentown, New Mexico 31134",
            jobNumber: "JOB106731"
        },
        {
            name: "Cameron Williamson",
            address: "4140 Parker Rd.\nAllentown, New Mexico 31134",
            jobNumber: "JOB106731"
        }
    ];

    return (
        <div className="sidebar-container" id="sidebar-icon">
            <div className="sidebar-filter-bar">
                <div className="assignment-tabs">
                    <div className="assignment-tab active">Assigned</div>
                    <div className="unassigned-tab">Unassigned</div>
                </div>
            </div>
            <div className="sidebar-main">
                <div onClick={closeSidebar}>
                    <span className="nav-arrow">&#8249;</span>
                </div>
                <div className="sidebar-filter-bar2">
                    <div className="assignment-tabs">
                        <div className="assignment-tab active">Assigned</div>
                        <div className="unassigned-tab">Unassigned</div>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3>Assign All</h3>
                    <Image src={Imageicon} width={500} height={500} alt="icon" />
                </div>
                {clients.map((client, index) => (
                    <ClientCard key={index} {...client} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
