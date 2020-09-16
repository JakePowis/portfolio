import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avatar from '../images/jp2.png'

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            {/* <div style={{ textAlign: 'center' }}>
              <img
                src={avatar}
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div> */}

            <h2 style={{ paddingTop: '0em', fontSize: "40px" }}>Jake Powis</h2>
            <h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
            <hr style={{ borderTop: '3px solid #3498db', width: '50%' }} />
            <p className="resumeText">Enthusiastic and highly ambitious web developer seeking first formal role in Web Dev, experienced with technologies such as:<ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PSQL</li>
              <li>Firebase</li>
              <li>MongoDB</li>
            </ul>
            </p>
            <p className="resumeText">
              Background in Finance (nine years’ experience in corporate and tech
              banking, largely in lending to venture capital & private equity backed technology companies
              for growth), but now seeking to transition into a full time developer role to
              follow my personal passion for coding & tech.</p>
            <hr style={{ borderTop: '3px solid #3498db', width: '50%' }} />
            <h5>Address</h5>
            <p>Putney, London, UK</p>
            <h5>Phone</h5>
            <p>07894 547 932</p>
            <h5>Email</h5>
            <p>jakepowis@gamil.com</p>
            <h5>Web</h5>
            <p><a href="https://jp-portfolio.netlify.app/" >jp-portfolio.netlify.app/</a></p>
            <hr style={{ borderTop: '3px solid #3498db', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{ fontSize: "34px", marginTop: "0px" }}>Education</h2>


            <Education
              startYear={"March 2020"}
              endYear={"July 2020"}
              schoolName="WebAhead Full Stack Coding Bootcamp, Israel"
              schoolDescription="Selected to take part in a 4-month fully funded full stack coding bootcamp in
              Haifa, Israel. Full stack Javascript Webdev focussed course (Vanilla JS, React, Node.js, Express, PSQL).
              Other important skills learnt include versioning (GitHub), deploying (Heroku,
              Netlify) operating within the Command Line, Lean & Agile product development,
              product design, prototyping & testing, and working in small development teams
              on real customer projects."
            />

            <Education
              startYear={"August 2019"}
              endYear={"January 2020"}
              schoolName="Coding Fundamentals (self-taught)"
              schoolDescription="After leaving banking in July 2019, I taught myself the basics of coding in
              JavaScript, HTML, Python & MQL4 (financial automation language based on
              C++), with focus on building web apps, websites and algorithmic trading robots
              to explore programming for the first time."
            />


            <Education
              startYear={"September 2013"}
              endYear={"December 2014"}
              schoolName="Chartered Institute of Securities and Investments"
              schoolDescription="Certificate in Corporate Finance, required to become a FCA regulated person in the UK."
            />

            <Education
              startYear={"June 2010"}
              endYear={"April 2012"}
              schoolName="London Institute of Banking & Finance"
              schoolDescription="Professional Diploma in Financial Services & Banking Management, Distinction."
            />

            <Education
              startYear={"October 2006"}
              endYear={"July 2009"}
              schoolName="University of Sussex"
              schoolDescription="Economics BA, First Class Honours."
            />





            <hr style={{ borderTop: '3px solid orange' }} />

            <h2 style={{ fontSize: "34px" }}>Experience</h2>



            <Experience
              startYear={"July 2016"}
              endYear={"July 2019"}
              jobName="Senior Vice President, Leveraged Finance at Silicon Valley Bank, London"
              jobDescription="Responsible for leading deal teams delivering financings of $5MM to $50MM in
              support of Private Equity or Venture Capital backed acquisitions of technology
              companies in the UK and Europe.
              Role included sourcing opportunities, analysing commercial, technological and
              financial aspects of the deal, producing detailed multi-year financial forecasting
              models, presenting financing proposals to global credit committee for approval,
              negotiation of financing terms and legal documentation with the client, and
              managing the execution and delivery of funds."
            />

            <Experience
              startYear={"July 2010"}
              endYear={"JUne 2016"}
              jobName="Senior Associate, Corporate Banking at HSBC, UK"
              jobDescription="Joined initially on the Corporate Banking Graduate scheme and spent 6 years in
              various roles across the bank including:
              1) International Corporate Banking, managing a portfolio of International
              focused clients with turnover between $2MM-$30MM, supporting their
              financing and banking needs plus ongoing portfolio performance
              monitoring;
              2) Leveraged Acquisition Finance, supporting Private Equity acquisitions and
              MBO’s of companies with valuations between $50MM-$500MM across the
              West of England & Wales."
            />

            <Experience
              startYear={"January 2010"}
              endYear={"July 2010"}
              jobName="Native English Instructor at Geos Corporation, Japan"
              jobDescription="Six months as the sole Native English Instructor within a private conversational
            English school in Nagoya, Japan, having spent the previous six months studying
            at an intensive Japanese Language school in Okazaki, Japan."
            />

            <Experience
              startYear={"June 2008"}
              endYear={"August 2008"}
              jobName="Graduate Leadership Programme at Lloyds Banking Group, UK"
              jobDescription="Summer internship within the Risk Management & Fraud Prevention team of
              Lloyd’s Global Credit Card business, working on Finance related projects."
            />
            <hr style={{ borderTop: '3px solid orange' }} />
            <h2 style={{ fontSize: "34px" }}>Other Skills</h2>
            <Skills
              skill="Project & Client Management"
              progress={90}
            />
            <Skills
              skill="Data Manipulation & Visualization"
              progress={90}
            />
            <Skills
              skill="Deep Financial Knowledge"
              progress={95}
            />
            <Skills
              skill="Self Learning"
              progress={95}
            />
            <Skills
              skill="Working to Deadlines"
              progress={90}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
