import { Link } from "react-router-dom";
import "./Header.css";
 import axios from "axios";
import assets from "../assets/mahires.png";
import event from "../assets/events.png";
import meal from "../assets/meals.png";
import expense from "../assets/expense.png";
import movie from "../assets/movie.png";
import {
  FaCompass,
  FaCss3,
  FaCss3Alt,
  FaDolly,
  FaEnvelope,
  FaExchangeAlt,
  FaFileExport,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLeaf,
  FaNodeJs,
  FaReact,
  FaVoicemail,
} from "react-icons/fa";
import { FaCss, FaEarDeaf, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

function Header() {
  //  const [formData, setFormData] = useState({
  //    name: "",
  //    email: "",
  //    message:""
  //  });
 

  // const sendMessage = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/contact", 
  //       {...formData});

  //     alert(response.data.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div className="Parent-head">
        <div className="name">Magesh</div>
        <div className="sub-title">
          <ul>
            <li>
              <a className="a" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="a" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="a" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="a" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="a" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* --------------home----------------- */}
      <section className="home" id="home">
        <div className="home-child1">
          <h1 className="new"> Hello.</h1>
          <div className="same-1">
            <div className="dash-1"></div>
            <h3>I'm Magesh</h3>
          </div>
          <h1 className="new">Full Stack Web Developer</h1>
          <div className="btn-div">
            <a
              href="https://drive.google.com/file/d/13BXJ0DvveTJlDUrBItFpLpxCWNVKvXEq/view?usp=sharing"
              target="_blank"
              className="btn-my"
            >
              My resume
            </a>
          </div>
        </div>
        <div className="home-child2">
          <div className="dot1"></div>
          <img src={assets}></img>
          <div className="dot2"></div>
        </div>
      </section>
      {/* ------about---------- */}
      <section className="about" id="about">
        <div className="same-2">
          <h1 className="choose">About me</h1>
          <div className="dash2"></div>
        </div>
        <div className="about-child">
          <div className="about-child1">
            <p className="mahi-abt">
              I’m a passionate Full Stack Web Developer with a strong foundation
              in the MERN stack (MongoDB, Express.js, React.js, Node.js). I
              focus on building modern, responsive, and user-friendly web
              applications that deliver seamless user experiences.
            </p>
            <p className="mahi-abt">
              I enjoy working on both frontend and backend development, creating
              efficient and scalable solutions. With a keen interest in learning
              new technologies, I continuously strive to improve my skills and
              stay updated with industry trends.
            </p>
          </div>

          <div className="about-child2">
            <h3 style={{ color: "#f5a623" }}>Personal Info</h3>
            <div className="email">
              <div>
                <FaEnvelope color="#f5a623" />
              </div>
              <p>Email</p>
            </div>

            <p className="email-identify">
              <b>mageshgovinthan16@gmail.com</b>
            </p>
            <div className="link1">
              <div className="link-li">
                <a
                  className="a2"
                  href="https://www.linkedin.com/in/mageshg2003/"
                  target="_blank"
                >
                  <div>
                    <FaGithub color="#f5a623" />
                  </div>
                  LinkedIn
                </a>
              </div>
              <div className="link-li">
                <a
                  className="a2"
                  href="https://github.com/magesh-Govinthan"
                  target="_blank"
                >
                  <div>
                    <FaLinkedin color="#f5a623" />
                  </div>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* --------Skills-------- */}
      </section>
      <section className="skills" id="skills">
        <div className="same-2">
          <h1 className="choose">Technical Skills</h1>
          <div className="dash2"></div>
        </div>
        <div className="skill-child">
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaHtml5 color="red" className="ht-color" />
                </span>
                <span>HTML</span>
              </div>
              <div>
                <p className="per">95 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in"></div>
            </div>
          </div>
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaCss3 color="#38bdf8" className="ht-color2" />
                </span>
                <span>CSS</span>
              </div>
              <div>
                <p className="per">90 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in1"></div>
            </div>
          </div>
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaCss color="#264de4" className="ht-color3" />
                </span>
                <span>Tailwind CSS</span>
              </div>
              <div>
                <p className="per">93 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in2"></div>
            </div>
          </div>
          {/* ----------------- */}
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaJs color="#f7df1e" className="ht-color4" />
                </span>
                <span>JavaScript</span>
              </div>
              <div>
                <p className="per">90 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in1"></div>
            </div>
          </div>
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaReact color="#38bdf8" className="ht-color2" />
                </span>
                <span>React</span>
              </div>
              <div>
                <p className="per">90 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in1"></div>
            </div>
          </div>
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaNodeJs color="#339933" className="ht-color5" />
                </span>
                <span>Node.js</span>
              </div>
              <div>
                <p className="per">93 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in2"></div>
            </div>
          </div>
          {/* ---------- */}
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaExchangeAlt color="#f5a623" className="ht-color6" />
                </span>
                <span>Express.js</span>
              </div>
              <div>
                <p className="per">95 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in"></div>
            </div>
          </div>
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaLeaf color="#47a248" className="ht-color7" />
                </span>
                <span>MangoDB</span>
              </div>
              <div>
                <p className="per">80 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in4"></div>
            </div>
          </div>
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaCompass color="#4479a1" className="ht-color8" />
                </span>
                <span>MySQL</span>
              </div>
              <div>
                <p className="per">90 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in1"></div>
            </div>
          </div>
          <div className="skill-child1">
            <div className="child1">
              <div className="in-child1">
                <span>
                  <FaGithub color="#f1502f" className="ht-color9" />
                </span>
                <span>Git</span>
              </div>
              <div>
                <p className="per">85 %</p>
              </div>
            </div>
            <div className="child2">
              <div className="child2-in5"></div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------Projects------------------ */}
      <section className="projects" id="projects">
        <div className="same-2">
          <h1 className="choose">Projects</h1>
          <div className="dash2"></div>
        </div>
        <div className="project-child">
          <div className="project-child1">
            <h3 className="project-name">Online Event Management Platform</h3>
            <div className="sub-project">
              <span className="sub-ti">HTML</span>
              <span className="sub-ti">CSS</span>
              <span className="sub-ti">React</span>
              <span className="sub-ti">MongoDB</span>
              <span className="sub-ti">Express</span>
              <span className="sub-ti">Node.js</span>
            </div>

            <p className="project-para">
              Built a platform for organizing and managing events with features
              for event listings, ticket sales, and attendee registration.
              Implement tools for providing event schedules, and offering event
              analytics to support event planning.
            </p>
            <div className="project-btn">
              <div>
                <a
                  className="btn-1"
                  href="https://github.com/magesh-Govinthan/FSP-Frontend"
                  target="_blank"
                >
                  View GitHub
                </a>
              </div>
              <div>
                <a
                  className="btn-2"
                  href="https://fsp-frontend-eight.vercel.app/"
                  target="_blank"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
          <div className="project-child2">
            <div className="box"></div>
            <div>
              <img src={event} className="event-image"></img>
            </div>
          </div>
        </div>
        <div className="project-child">
          <div className="project-child2">
            <div className="box"></div>
            <div>
              <img src={meal} className="event-image"></img>
            </div>
          </div>
          <div className="project-child1">
            <h3 className="project-name">Recipe App</h3>
            <div className="sub-project">
              <span className="sub-ti">HTML</span>
              <span className="sub-ti">CSS</span>
              <span className="sub-ti">JavaScript</span>

              <span className="sub-ti">Api</span>
            </div>

            <p className="project-para">
              Develop a dynamic recipe application that allows users to browse,
              search, and filter recipes based on various criteria using data
              fetched from a public meals API.
            </p>
            <div className="project-btn">
              <div>
                <a
                  className="btn-1"
                  href="https://github.com/magesh-Govinthan/Receipe-App"
                  target="_blank"
                >
                  View GitHub
                </a>
              </div>
              <div>
                <a
                  className="btn-2"
                  href="https://receipe-app-mocha.vercel.app/"
                  target="_blank"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-child">
          <div className="project-child1">
            <h3 className="project-name">Smart Expense Tracker</h3>
            <div className="sub-project">
              <span className="sub-ti">HTML</span>
              <span className="sub-ti">CSS</span>
              <span className="sub-ti">React</span>
            </div>

            <p className="project-para">
              Build a smart expense tracking application using React JS that
              allows users to track their daily expenses by category, filter,
              charts and manage data using localStorage.
            </p>
            <div className="project-btn">
              <div>
                <a
                  className="btn-1"
                  href="https://github.com/magesh-Govinthan/Expense-Tracker"
                  target="_blank"
                >
                  View GitHub
                </a>
              </div>
              <div>
                <a
                  className="btn-2"
                  href="https://expense-tracker-pied-ten.vercel.app/"
                  target="_blank"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
          <div className="project-child2">
            <div className="box"></div>
            <div>
              <img src={expense} className="event-image"></img>
            </div>
          </div>
        </div>
        <div className="project-child">
          <div className="project-child2">
            <div className="box"></div>
            <div>
              <img src={movie} className="event-image"></img>
            </div>
          </div>
          <div className="project-child1">
            <h3 className="project-name">Movies Search App</h3>
            <div className="sub-project">
              <span className="sub-ti">HTML</span>
              <span className="sub-ti">CSS</span>
              <span className="sub-ti">React</span>
              <span className="sub-ti">OMDB-Api</span>
            </div>

            <p className="project-para">
              Develop a full-featured movie search application using React that
              integrates with the OMDB API. The application should allow users
              to search for movies, view detailed information
            </p>
            <div className="project-btn">
              <div>
                <a
                  className="btn-1"
                  href="https://github.com/magesh-Govinthan/movieApp"
                  target="_blank"
                >
                  View GitHub
                </a>
              </div>
              <div>
                <a
                  className="btn-2"
                  href="https://movie-app-green-zeta.vercel.app/"
                  target="_blank"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------Contact --------- */}
      <section className="contact" id="contact">
        <div className="same-2">
          <h1 className="choose">Contact</h1>
          <div className="dash2"></div>
        </div>
        <section className="contact-section">
          <div className="contact-left">
            <h1>
              Have a project?
              <br />
              Let’s talk!
            </h1>

            <button>Submit</button>
          </div>

          <div className="contact-right">
            <div className="input-box">
              <input type="text" placeholder="Name" />
            </div>

            <div className="input-box">
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-box">
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Header;
