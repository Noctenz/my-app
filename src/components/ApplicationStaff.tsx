import React from "react";
import "./ApplicationStaff.css";

const positions = [
  {
    title: "Builder",
    description: "Design immersive worlds, cities, and landscapes.",
    badge: "Builder",
  },
  {
    title: "Moderator",
    description: "Ensure a safe and enjoyable environment for players.",
    badge: "Moderator",
  },
  {
    title: "Developer",
    description: "Build and maintain server features and plugins.",
    badge: "Developer",
  },
  {
    title: "Designer",
    description: "Create branding, UI/UX, and visual content.",
    badge: "Designer",
  },
];

const ApplicationStaff = () => (
  <div className="application-root">
    <section className="application-header">
      <h1 className="application-heading">Join Our Staff Team</h1>
      <p className="application-subtext">
        We’re looking for passionate people to help shape the future of our community.
      </p>
    </section>

    <section className="application-grid">
      {positions.map((pos, index) => (
        <div key={index} className="application-card">
          <h3 className="application-title">{pos.title}</h3>
          <p className="application-description">{pos.description}</p>
          <button className="application-btn">Apply Now</button>
        </div>
      ))}
    </section>
  </div>
);

export default ApplicationStaff;
