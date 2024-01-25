import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Email Lists: The Foundation of Success",
      description: "Our meticulously curated email lists are a cornerstone of success. They offer unparalleled data quality, smart segmentation, and strict compliance to ensure your message reaches the right audience. ",
      imgUrl: "https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Commitment to Security",
      description: "Our commitment to maintaining the highest standards of data security gives you peace of mind, knowing that your information is in safe hands. ",
      imgUrl: "https://media.istockphoto.com/id/1543545376/photo/cyber-security-and-security-password-login-online-concept-hands-typing-and-entering-username.jpg?s=612x612&w=0&k=20&c=tu50zj5koXnK_ZkUH7MTfidbJdeyAXdKIRIzJ2o_T4M=",
    },
    {
      title: "Email Marketing: Engage, Grow, and Succeed",
      description: "From the inception of creative designs to the scrutiny of detailed analytics, we've got every aspect of your email marketing campaign expertly covered. We're not just a service, but your partner in achieving marketing success.",
      imgUrl: "https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Blogs</h2>
                <p>At 360 Marketing Concepts , we pride ourselves on being a leading provider of high-quality, targeted email lists tailored to meet the unique needs of your business. With years of industry expertise, we understand the importance of reaching the right audience at the right time.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img alt="Colorful geometric background" className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
