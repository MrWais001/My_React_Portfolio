import React, { useState, useEffect } from "react";
import "../styles/Home.css"; // Assume you have CSS for Home

const Home = () => {
  const roles = [
    "Web Designer",
    "Web Developer",
    "Front End Developer",
    "Apps Designer",
    "Apps Developer",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((currentRole) => (currentRole + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section id="home">
      <div className="home-content">
        <h1>Abdulgafar Ridwan</h1>
        <p className="animated-role">{roles[currentRole]}</p>
      </div>
    </section>
  );
};

export default Home;
