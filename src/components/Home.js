// src/components/Home.js
import React from "react";
import "../styles/Home.css"; // Assume you have CSS for Home

function Home() {
  return (
    <section id="home">
      <div class="home-content">
        <img
          src="../images/propic/pro.png"
          alt="Your Name"
          class="profile-pic"
        />
        <div class="text-content">
          <h1>Your Name</h1>
          <p>
            Web Designer, Web Developer, Front End Developer, Apps Designer,
            Apps Developer
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
