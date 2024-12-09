import React, { useEffect, useState } from "react";
import "../Carousel/Carousel.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import axios from "axios";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = () => {
  // CounterUp
  const [counterOn, setCounterOn] = useState(false);

  //aboutus

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  //contact
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { fullname, email, message };

    try {
      const response = await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* home page */}
      <section className="home_page">
        <div className="carousel">
          <div className="list">
            <div className="item">
              <img src="home_img.jpg" alt="Notes_img" />
              <div className="content">
                <div className="title">ROTARACT</div>
                <div className="topic">PCE</div>
                <Link to="/Notes"></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counter section */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section className="counter-sec ">
          <div className="container_counter">
            <div className="row_counter row-cols-lg-5 gy-3 justify-content-center row-cols-2 gx-lg-5">
              <div className="col-lg-2 col-5">
                <div className="counter-box">
                  <h3 className="mb-0 primary-purple">
                    {counterOn && (
                      <CountUp start={0} end={10} duration={2} delay={0} />
                    )}
                  </h3>
                  <p>Years of Lagecy </p>
                </div>
              </div>
              <div className="col-lg-2 col-5">
                <div className="counter-box">
                  <h3 className="mb-0 primary-purple">
                    {" "}
                    {counterOn && (
                      <CountUp start={0} end={10} duration={2} delay={0} />
                    )}
                  </h3>
                  <p>Citations </p>
                </div>
              </div>
              {/* <div className="col-lg-2 col-5">
                    <div className="counter-box">
                        <h3 className="mb-0 primary-purple">  { counterOn &&    <CountUp start={0}  end={5}  duration={2} delay={0}/> }+</h3>
                        <p>Platinum Citations </p>
                    </div>
                </div> */}
              <div className="col-lg-2 col-5">
                <div className="counter-box">
                  <h3 className="mb-0 primary-purple">
                    {counterOn && (
                      <CountUp start={0} end={5} duration={2} delay={0} />
                    )}
                    +
                  </h3>
                  <p>National Awards</p>
                </div>
              </div>
              <div className="col-lg-2 col-5">
                <div className="counter-box">
                  <h3 className="mb-0 primary-purple">
                    {counterOn && (
                      <CountUp start={0} end={2} duration={2} delay={0} />
                    )}
                  </h3>
                  <p>India Book of Records</p>
                </div>
              </div>
              <div className="col-lg-2 col-5">
                <div className="counter-box">
                  <h3 className="d-inline">
                    {counterOn && (
                      <CountUp start={0} end={200} duration={2} delay={0} />
                    )}
                    +
                  </h3>
                  <p>Rotaractors</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
      <div className="main_hack" id="home_about">
        <section className="section2">
          <div className="container">
            <div className="items_hack">
              <div className="img_hack">
                <video autoPlay muted controls loop>
                  <source src="intro.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="box">
                <div className="box1">
                  <h2>About Us</h2>
                </div>
                <div className="box2">
                  <div className="cards " data-aos="zoom-in">
                    <div className="card">
                      <div className="text">
                        <h3>What is Rotaract?</h3>
                        <p>
                          Rotaract clubs bring together people ages 18 and older
                          to exchange ideas with leaders in the community,
                          develop leadership and professional skills, and have
                          fun through service. In communities worldwide, Rotary
                          and Rotaract members work side by side to take action
                          through service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cards " data-aos="zoom-in">
                    <div className="card">
                      <div className="text">
                        <h3>Mission Statement</h3>
                        <p>
                          We wish to serve a platform that calls together the
                          members of the community to promote peace, infuse
                          integrity, boost goodwill and work towards creating a
                          better and sustainable world.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cards" data-aos="zoom-in">
                    <div className="card">
                      <div className="text">
                        <h3>District 3030</h3>
                        <p>
                          Rotaract 3030 is the District Rotaract Organization of
                          Rotary International District 3030 which comprises
                          revenue districts of Nashik, Jalgaon, Akola, Amravati,
                          Wardha, Buldhana, Washim, Yavatmal, Nagpur,
                          Chandrapur, Gondia, Bhandara, and Gadchiroli in the
                          state of Maharashtra, India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="home_events" id="home_events">
        <div className="hero">
          <div className="hero-wrapper">
            <div className="hero-block">
              <h1 className="hero-title">
                <span className="hero-title-text">
                  <strong>Events</strong>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <div className="event_card">
              <img src="tedx.jpg" alt="image1" />
              <div className="event_text">
                <h2>TEDXAmbazari Lake</h2>
                <h3>
                  30th April, 2023 <br />
                  10AM - 6PM
                </h3>
                <p>
                  An Opportunity to work and volunteer with TEDx Ambazari Lake
                  Nagpur
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="event_card">
              <img src="nirmalaya.jpg" alt="image2" />
              <div className="event_text">
                <h2>Nirmalaya Collection</h2>
                <h3>
                  Thursday, 28th September 2023
                  <br />
                  9AM-10PM
                </h3>
                <p>
                  The event was organized on the occasion of ganpati visarjan.
                  The event aimed at collecting nirmalyas.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="event_card">
              <img src="coscon.jpg" alt="image3" />
              <div className="event_text">
                <h2>Coscon</h2>
                <h3>
                  Sunday, October 28th, 2023
                  <br />
                  10AM-10PM
                </h3>
                <p>
                  Coscon is an annually organised anime cosplay based event
                  hosted on occasion of Halloween.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <section className="inst_contact">
        <div class="sec-title text-center">
          <h2>
            {" "}
            Connect, <span>Share, and Explore</span>
          </h2>
          <p>Find us on Instagram - #rotaractpce</p>
        </div>
        <div class="widget-box">
          <div class="widget-box-inner">
            <iframe
              src="https://www.instagram.com/p/C575n4Vr9Mu/embed"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/C41EQjkBNUI/embed"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
            ></iframe>
            <iframe
              src="https://www.instagram.com/p/C4yQTPPvcpH/embed"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="content_contact">
          <h2>Contact</h2>
          <p>
            If you are interested in becoming a part of our Rotaract Club or
            would like more information, contact us!
          </p>
        </div>
        <div className="container_contact">
          <div className="contactInfo">
            <div className="box_contact">
              <div className="icon_contact">
                <FaLocationArrow />
              </div>
              <div className="text_contact">
                <h3>Address</h3>
                <p>
                  Priyadarshini College of Engineering, Digdoh Hills, Hingna,
                  Nagpur, 440019
                </p>
              </div>
            </div>
            <div className="box_contact">
              <div className="icon_contact">
                <FaPhone />
              </div>
              <div className="text_contact">
                <h3>Phone</h3>
                <p>(+918080926073)</p>
              </div>
            </div>
            <div className="box_contact">
              <div className="icon_contact">
                <FaMailBulk />
              </div>
              <div className="text_contact">
                <h3>Email</h3>
                <p>rotaractpceclub@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>

              <div className="inputBOx">
                <input
                  type="email"
                  required="required"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <span>Email</span>
              </div>
              <div className="inputBOx">
                <textarea
                  required="required"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
                <span>Type your message</span>
              </div>
              <div className="inputBOx">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="home_footer">
        <div className="waves">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
        <h1>Rotaract PCE</h1>
        <p>&copy; 2024 Rotaract PCE. All rights reserved</p>
        <div>
          <a href="https://www.facebook.com/official.pcerotaract">
            <FaFacebook className="icons facebook" />
          </a>
          <a href="https://x.com/rotaractclubpce?t=MYlhafC4XvzfKDg_IsEhmg&s=08">
            <FaTwitter className="icons facebook" />
          </a>
          <a
            href="https://www.linkedin.com/in/rotaract-club-of-pce-2b4164215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            title="Go to LinkedIn"
          >
            <FaLinkedinIn className="icons linkedin" />
          </a>
          <a href="https://www.instagram.com/rotaractclubpce?igsh=OXZxbGN0cmhzNjly">
            <FaInstagram className="icons instagram" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Carousel;
