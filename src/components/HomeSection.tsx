import React from "react";
import "./HomeSection.css";

const badgeIcons: { [key: string]: string } = {
  Founder: "fas fa-crown",
  Admin: "fas fa-shield-alt",
  Developer: "fas fa-code",
  Designer: "fas fa-paint-brush",
  Moderator: "fas fa-gavel",
  Member: "fas fa-user",
  Lead: "fas fa-star",
  "???": "fas fa-question-circle",
};

const TeamCard = ({
  name,
  image,
  badge,
}: {
  name: string;
  image: string;
  badge?: string;
}) => {
  const iconClass =
    badge && badgeIcons[badge] ? badgeIcons[badge] : "fas fa-user";

  return (
    <div className="team-card">
      {badge && (
        <div className="team-badge">
          <i className={iconClass} style={{ marginRight: "6px" }}></i>
          {badge}
        </div>
      )}
      <img className="team-avatar" src={image} alt={name} />
      <h3 className="team-name">{name}</h3>
      <div className="team-icons">
        <i className="fab fa-discord"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>
  );
};

const HomeSection = () => (
  <div className="home-root">
    <main className="home-main">
      <section className="main-content">
        <h1 className="main-title">Design confidently.</h1>
        <p className="main-desc">
          SovereignStudio is a digital creative studio that takes the guesswork
          out of design decisions by validating them with real users and
          delivering innovative solutions for the Minecraft and creator
          community.
        </p>
        <button className="main-cta">Get started</button>
      </section>

      <section className="main-illustration">
        <div className="img-blur-bg" />
        <img src="/homeimg.svg" alt="Teamwork Illustration" className="main-img" />
      </section>
    </main>

    <section className="home-companies">
      <div className="companies-caption">
        The world’s best companies rely on SovereignStudio to make better
        design decisions.
      </div>
      <div className="companies-logos">
        <img src="https://imgur.com/YyrV6wF.png" alt="Alwination" />
        <img src="https://imgur.com/zlOm0sX.png" alt="CitizenCraft" />
      </div>
    </section>

    {/* ✅ About Section */}
    <section className="home-about">
      <h2>About Sovereign Studio</h2>
      <div className="underline" />
      <p>
        Welcome to the world of Blocky adventure. Make your server more
        interesting with resources from Sovereign Studio. We provide Minecraft
        Models, Minecraft Skins, Plugin Configurations, Custom Textures. You
        can get our resources through BuiltByBit or Polymart websites.
      </p>
      <p>
        Want something unique? We also accept commissions! We are ready to
        realize your Minecraft ideas whether for servers, personal projects, or
        content creators. Just tell us your concept, and let us build your dream
        world block by block.
      </p>
    </section>

    <section className="home-team">
      <TeamCard
        name="Noctenz"
        image="https://minotar.net/helm/Noctenz/100.png"
        badge="Founder"
      />
      <TeamCard
        name="Open Application"
        image="https://minotar.net/helm/user/100.png"
        badge="???"
      />
      <TeamCard
        name="Open Application"
        image="https://minotar.net/helm/user/100.png"
        badge="???"
      />
    </section>
  </div>
);

export default HomeSection;
