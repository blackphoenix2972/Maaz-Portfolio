import { Container } from "react-bootstrap";
import maaz from "../Images/maaz.png";


import { Chrono } from "react-chrono";
import "../Styles/About.css";
const About = () => {
  return (
    <>
      <div>
        <Container>
          <h1 className="title-about">About Me</h1>
          <br />
          <div className="about-image">
            <img src={maaz} width="500px" />
          </div>
          <br />
          <br />
          <div className="about-card-container">
            I am currently a Graduate with a Bachelors of Commerce from Carleton
            University in Ottawa, Canada. Majoring in Finance and having a minor
            in Statistics, I love working with data and using it to conduct
            analyses in order to make better informed decisions.
            <br />
            <br />
            <div style={{color:'black'}}>
              <h3 id="about-subtitle">Educational Background</h3>
              What I’ve Learned So Far For me, academic institutions are where
              we gain the tools to build successful experiences, careers, and
              futures. Take a look below to learn more about my educational path
              and achievements along the way.
              <br />
            </div>
            <br/>

            <span style={{fontSize:'20px', color:'black'}}>September 2017 - Present</span> <br/><h4 id="about-subtitle">Carleton University, Ottawa, Canada</h4>
            <div className="about-points">
            <ul><li>
            Teamwork & team leading skills.
            </li>
            <li>
             Time management & organizational
            skills.
            </li>
            <li> SQL Server, R, Python & MS Office Applications.
                </li>
                <li> Introduction
            to Python.
            </li><li> Finance, Accounting, Economics & Business expertise.
            Research Projects, Professional Reporting & Presentations.
            </li>
            </ul>
            </div><hr/>
            <br/>
            <span style={{fontSize:'20px', color:'black'}}>September
            2015 - April 2017</span><br/> 
            <h4 id="about-subtitle">Merryland International School (MIS), Abu Dhabi,
            UAE Sciences, Mathematics & ICT.
            </h4><div className="about-points">
             <ul><li>Used MS Access to generate reports
            and manage large databases.</li><li> Used MS Excel to perform in-depth
            analyses through functions and data manipulation.</li><li> Made use of macros
            in MS Excel and Word to perform repetitive tasks.</li>
            </ul></div> I have also done
            some Python for Finance, Financial Analysis and Personal Finance
            courses outside the scope of these institutions.

            <br />
            <br />
          </div>
 
          <br />
          <br />
        </Container>
      </div>
    </>
  );
};

export default About;
