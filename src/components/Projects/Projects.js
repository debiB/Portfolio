import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wanderwise from "../../Assets/Projects/wanderwise.png";
import campusBulletinApp from "../../Assets/Projects/campus_bulletin_app.png";
import CustomEd from "../../Assets/Projects/CustomEd.png";
import HakimHub from "../../Assets/Projects/Hakimhub.png";
import mesobmagic from "../../Assets/Projects/mesobmagic.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CustomEd}
              isBlog={false}
              title="CustomEd"
              description="The project aims to improve traditional education by offering dynamic, personalized learning experiences through an AI-powered system. Students and teachers use the system, with students receiving chatbot support and resource links for their individualized learning paths. Teachers manage classrooms, facilitate discussions, and utilize progress tracking and milestone quizzes. Admins oversee classroom activities for effective management."
              ghLink="https://github.com/Son-OfAnton/custom-ed"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HakimHub}
              isBlog={false}
              title="Hakim Hub"
              description="HakimHub addresses the problem by offering a medical information recommendation system. Users can input their symptoms, preferences, and requirements, and the system generates personalized recommendations for doctors and medical institutions. Utilizing a conversation-based interface, the system understands user input and provides relevant recommendations in a conversational manner."
              ghLink="https://github.com/A2SV/HakimHub"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderwise}
              isBlog={false}
              title="Wander Wise"
              description="Wander Wise is an AI-powered website that utilizes users' past travel ratings and history to provide personalized travel recommendations. By analyzing preferences and experiences, the system generates tailored suggestions for future trips. Users can input their ratings and browse through recommended destinations and itineraries. Wander Wise continuously learns from user feedback to improve its recommendations over time, helping users discover new travel experiences that align with their preferences."
              ghLink="https://github.com/debiB/wander_wise"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mesobmagic}
              isBlog={false}
              title="Mesob Magic"
              description="Mesob Magic is an interactive recipe-sharing website that offers users a platform to explore, contribute, rate, and comment on a diverse range of recipes. With a focus on culinary diversity, users can browse through an extensive collection of recipes categorized by cuisine type, difficulty level, and preparation time. Advanced search filters enable users to refine their recipe search based on specific criteria, enhancing the user experience. Additionally, users can create profiles to manage their contributions, interact with others, and showcase their culinary expertise. "
              ghLink="https://github.com/debiB/mesobmagic"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campusBulletinApp}
              isBlog={false}
              title="Campus Bulletin app"
              description="The mobile application serves as a comprehensive communication platform for students, teachers, and student representatives in an educational context. Students have the ability to subscribe to channels created by administrators, teachers, and student representatives. By doing so, they receive notifications whenever new posts or updates are made by any of these stakeholders. This ensures that students stay informed about important announcements, events, deadlines, and other relevant information shared by administrators, teachers, and student representatives. "
              ghLink="https://github.com/Son-OfAnton/campus-bulletin-app"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
