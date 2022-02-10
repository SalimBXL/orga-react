import React from "react";
import uuid from "react-uuid";
import ShortcutsBar from "./ShortcutsBar";

const Shortcuts = () => {

    const SHORTCUTS = [
        {
            typeColor: "primary", 
            actions: [
                {icon: "bi bi-calendar-day", link: "#", label: "Today"},
                {icon: "bi bi-calendar-week", link: "#", label: "This Week"},
                {icon: "bi bi-calendar3", link: "#", label: "This Month"}
            ]
        },
        {
            typeColor: "success", 
            actions: [
                {icon: "bi bi-bandaid", link: "#", label: "Absences"},
                {icon: "bi bi-calendar-check", link: "#", label: "Events"},
                {icon: "bi bi-calendar-x", link: "#", label: "Days Off" },
                {icon: "bi bi-grid-3x3", link: "#", label: "Grid"}
            ]
        },
        {
            typeColor: "dark", 
            actions: [
                {icon: "bi bi-grid-3x2-gap", link: "/dashboard/7", label: "Dashboard"},
                {icon: "bi bi-journals", link: "/blog", label: "Blog"},
                {icon: "bi bi-sticky", link: "/postits", label: "Post-Its"}
            ]
        }
    ];

    return (
        <div className="card shadow-sm Home-shortcuts" >
            {SHORTCUTS.map(bar => (
                <ShortcutsBar 
                    key={uuid()} 
                    typeColor={bar.typeColor} 
                    actions={bar.actions}
                />
            ))}
        </div>
    );
}

export default Shortcuts;