import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import abstract from "../sass/img/abstract-medium.jpg";
import resume from "./resume_christopher_leja.pdf";


const styles = makeStyles(theme => ({
  mainContainer: {
    width: '100%',
    padding: "2.5rem",
    zIndex: "-1",
    position: "relative"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    zIndex: "-1",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #6292BC",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]:{
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #6292BC",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#6292BC #6292BC transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #6292BC #6292BC"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    borderRadius: "5px",
    background: "#382633",
    color: "#ddd",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "#382633",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: 'blanchedalmond',
    padding: "0",
    textTransform: "uppercase",
    fontSize: 18,
  },
  textBorder: {
    background: "#382633",
    borderRadius: "5px",
    borderBottom: "2px solid #6292BC",
  },
  link: {
    "&:hover, &:active": {
      background: "#6292BC"
    } 
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    position: "absolute",
    top: '0',
    left: '0',
    zIndex: '-1',
    borderRadius: "5px",
    overflow: "hidden"
  }
})
)

const Resume = () => {
  const classes = styles()
  return (
    <>
    <h1 className="heading-1 resume__heading" id="resume"> Resume </h1>
    <button className="resume__button">
      <a href={resume} download className="resume__button-link">
        Downloadable version
        </a>
        </button>
      <Box component="header" className={classes.mainContainer}>
        <img src={abstract} alt="Art by Annie Spratt on Unsplash" className={classes.backgroundImg}>
        </img>

        <Typography variant="h4" align="center" className={classes.heading}>
          Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography variant="h2" 
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2020
            </Typography>
            <Box component="div" className={`${classes.timeLineItem} ${classes.textBorder}`}>
              <Typography variant="h5" align="center" className={classes.subHeading}>
                Software Engineering Student
              </Typography>
              <Typography variant="body1" align="center" style={{color: "#6292BC" }}>
                Flatiron School
              </Typography>
              <Typography variant="subtitle1" align="center" style={{color: "#ddd" }}>
                - Learned full stack web development and software engineering. 
                <br/>
                - Built projects in Ruby on Rails, JavaScript, and React.
                <br/>
                - Emphasized project-oriented learning, collaboration, and creative coding approaches.
              </Typography>
            </Box>
            <Typography variant="h2" 
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
              2019-2020
              </Typography>
              <Box component="div" className={`${classes.timeLineItem} ${classes.textBorder}`}>
                <Typography variant="h5" align="center" className={classes.subHeading}>
                  Communications Consultant
                </Typography>
                <Typography variant="body1" align="center" style={{color: "#6292BC" }}>
                  Clean Fuels Development Coalition
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color: "#ddd" }}>
                  - Collaboratively developed long-term media strategies and handled media outreach for a national ad campaign.
                  <br/>
                  - Oversaw social media campaigns that generated over 50,000 new engagements.
                  <br/>
                  - Collaborated on traditional media campaigns resulting in client’s core messages appearing in Forbes, The Hill and the Des Moines Register.
                </Typography>
              </Box>
            <Typography variant="h2" 
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2019
                </Typography>
                <Box component="div" className={`${classes.timeLineItem} ${classes.textBorder}`}>
                  <Typography variant="h5" align="center" className={classes.subHeading}>
                    Writer, IMPACT 2019 Conference
                  </Typography>
                  <Typography variant="body1" align="center" style={{color: "#6292BC" }}>
                    Sans Serif
                  </Typography>
                  <Typography variant="subtitle1" align="center" style={{color: "#ddd" }}>
                    - Wrote and reviewed attendee materials for Charles Schwab’s IMPACT 2019 Conference to ensure quality and clarity.
                    <br/>
                    - Created guide materials clarifying workshops and speaker biographies for thousands of conference attendees.
                  </Typography>
            </Box>
            <Typography variant="h2" 
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2012-2020
                </Typography>
                <Box component="div" className={`${classes.timeLineItem} ${classes.textBorder}`}>
                  <Typography variant="h5" align="center" className={classes.subHeading}>
                    Teaching Artist/Freelance Editor
                  </Typography>
                  <Typography variant="body1" align="center" style={{color: "#6292BC" }}>
                    Self-Employed 
                  </Typography>
                  <Typography variant="subtitle1" align="center" style={{color: "#ddd" }}>
                    - Orchestrated and executed multiple national and international tours, organizing and conducting hundreds of readings and workshops.
                    <br/>
                    - Served as primary creative editor for Clementine von Radics’ Mouthful of Forevers, which sold over 60,000 copies, and was nominated for a Goodreads Choice Award (Best Poetry Collection).
                    <br/>
                    - Facilitated writing workshops in universities, high schools, and juvenile detention facilities.
                  </Typography>
            </Box>
            <Typography variant="h2" 
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2008-2012
                </Typography>
                <Box component="div" className={`${classes.timeLineItem} ${classes.textBorder}`}>
                  <Typography variant="h5" align="center" className={classes.subHeading}>
                    Student
                  </Typography>
                  <Typography variant="body1" align="center" style={{color: "#6292BC" }}>
                    Lewis & Clark College
                  </Typography>
                  <Typography variant="subtitle1" align="center" style={{color: "#ddd" }}>
                    - Earned a Bachelor of Arts in English Literature, with a Creative Writing Focus. 
                    <br />
                    - Minored in Communication
                  </Typography>
            </Box>
          </Box>
        </Box>
    </>
  )
}

export default Resume