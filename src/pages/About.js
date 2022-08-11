import React from "react";
import { Row, Col } from "react-bootstrap";

import "../css/About.css";
function About() {
  let team = [
    { name: "Simon Peteson", title: "cofounder, editor and chief" },
    { name: "Simon Brattson", title: "cofounder, partner" },
    { name: "Annie Luxomburd", title: "managing editor" },
    { name: "Reta Thompson", title: "Senior writer" },
    { name: "Simon Peteson", title: "cofounder, editor and chief" },
    { name: "Simon Brattson", title: "cofounder, partner" },
    { name: "Annie Luxomburd", title: "managing editor" },
    { name: "Reta Thompson", title: "Senior writer" },
    { name: "Simon Peteson", title: "cofounder, editor and chief" },
    { name: "Simon Brattson", title: "cofounder, partner" },
  ];

  return (
    <div className="about-container">
      <div className="about-top">
        <div className="about container">
          <div className="text-container">
            <div className="section-title-text">ABOUT</div>
            <h1>
              CLITA INCORRUPTE AT VIX. <br />
              NAM TE MOLESTIE IUDICABIT ERRORIBUS ODIO.
            </h1>
          </div>
        </div>
      </div>
      <div className="header"></div>
      <div className="about-blog">
        <div className="about container">
          <div className="text-container section-title">
            <h1>THIS IS BLOGLAND!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet
              voluptas ipsam, aspernatur deserunt dignissimos? Ratione itaque
              porro, excepturi optio similique quasi ipsam architecto aliquam
              rerum cumque voluptates possimus velit! Laudantium reiciendis
              blanditiis sequi, atque dolore animi modi aliquam tempore. Odio
              consequatur voluptatum voluptatibus quae eaque dicta similique ea.
              In!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet
              voluptas ipsam, aspernatur deserunt dignissimos? Ratione itaque
              porro, excepturi optio similique quasi ipsam architecto aliquam
              rerum cumque voluptates possimus velit! Laudantium reiciendis
              blanditiis sequi, atque dolore animi modi aliquam tempore. Odio
              consequatur voluptatum voluptatibus quae eaque dicta similique ea.
              In!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet
              voluptas ipsam, aspernatur deserunt dignissimos? Ratione itaque
              porro, excepturi optio similique quasi ipsam architecto aliquam
              rerum cumque voluptates possimus velit! Laudantium reiciendis
              blanditiis sequi, atque dolore animi modi aliquam tempore. Odio
              consequatur voluptatum voluptatibus quae eaque dicta similique ea.
              In!
            </p>
            <div className="link-block">CONTACT US</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="team">
        <div className="container">
          <div className="section-title-big">OUR TEAM</div>
          <Row className="team-wrapper">
            {team.map((member) => {
              return (
                <Col lg={3} className="team-member-wrapper">
                  <div className="profile-image"></div>

                  <div className="member-name">{member.name}</div>
                  <div className="member-title">{member.title}</div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className="divider"></div>
      <div className="contact">
        <div className="container">
          <div className="text-container">
            <div className="section-title-big">WANNA GET IN TOUCH?</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              deserunt deleniti eos temporibus nemo suscipit totam et,
              voluptatibus repellat accusantium delectus ducimus ullam quos
              adipisci cumque tempore praesentium, dolorum eius sapiente
              officiis maxime enim?
            </p>
          </div>
          <div className="contact-wrapper">
            <Row className="gx-5" style={{ width: "100%" }}>
              <Col className="contact-col">
                <div className="contact-number-wrapper">
                  <div className="contact-number">
                    <div>1</div>
                  </div>
                  <div className="contact-category">ADDRESS</div>
                  <div className="contact-info">
                    144 N 7th St. #536 Brooklyn, NY 11249 United States
                  </div>
                </div>
              </Col>
              <Col className="contact-col">
                <div className="contact-number-wrapper">
                  <div className="contact-number">
                    <div>2</div>
                  </div>
                  <div className="contact-category">GENERAL INQUIRES</div>
                  <div className="contact-info">hello@blogland.com</div>
                </div>
              </Col>
              <Col className="contact-col">
                <div className="contact-number-wrapper">
                  <div className="contact-number">
                    <div>3</div>
                  </div>
                  <div className="contact-category">PRESS INQUIES</div>
                  <div className="contact-info">press@blogland.com</div>
                </div>
              </Col>
              <Col className="contact-col">
                <div className="contact-number-wrapper">
                  <div className="contact-number">
                    <div>4</div>
                  </div>
                  <div className="contact-category">POTENTIAL CONTRIBUTORS</div>
                  <div className="contact-info">collab@blogland.com</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
