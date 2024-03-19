import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dibora Berhanu </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am currently a Student at Addis Ababa University.
            <br style={{marginTop:"2px"}}/>
            Apart from coding, I love doing various activities such as:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books and Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If not now then when?"{" "}
          </p>
          <footer className="blockquote-footer">Malcolm X</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
