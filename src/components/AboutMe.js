// src/components/AboutMe.js
import React from "react";
import "../styles/AboutMe.css"; // Assume you have CSS for AboutMe

function AboutMe() {
  return (
    <section id="About Me">
      <div id="fh5co-about" class="animate-box">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>About Me</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <ul class="info">
                <li>
                  <span class="first-block">Full Name:</span>
                  <span class="second-block">Abdulgafar Ridwan</span>
                </li>
                <li>
                  <span class="first-block">Phone:</span>
                  <span class="second-block">+234 7045234431</span>
                </li>
                <li>
                  <span class="first-block">Email:</span>
                  <span class="second-block">abdulgafarridwan@gmail.com</span>
                </li>
                <li>
                  <span class="first-block">Website:</span>
                  <span class="second-block">www.OlaTech_Solutions.com</span>
                </li>
                <li>
                  <span class="first-block">Address:</span>
                  <span class="second-block">No.53 market Road </span>
                </li>
              </ul>
            </div>
            <div class="col-md-8">
              <h2>Hello There!</h2>
              <p>
                There live the blind texts far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in
                bookmarksgrove there live the blind texts far from the
                countries.
              </p>
              <p>
                Far far away, behind the word mountains, Quos quia provident
                consequuntur culpa facere ratione maxime commodi voluptates id
                repellat velit eaque aspernatur expedita. Possimus itaque
                adipisci there live the blind texts from the countries Vokalia
                and Consonantia, there live the blind texts. Quos quia provident
                consequuntur culpa facere ratione maxime commodi voluptates id
                repellat velit eaque aspernatur expedita. Possimus itaque
                adipisci.
              </p>
              <ul class="fh5co-social-icons">
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-github"></i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
