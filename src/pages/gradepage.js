import * as React from "react"
import { Link } from "gatsby"
import { motion } from 'framer-motion'
import { fadeInUp, staggerAnimation, fadeInDown, fadeInRight } from '../animation/animations'
import Layout from "../components/layout"

function getGrade(grade) {
  var gradenum = parseFloat(grade['grade'])
  // console.log(gradenum)
  if (gradenum >= 92.5) {
    return 'A'
  }
  else if (gradenum >= 89.5) {
    return 'A-'
  }
  else if (gradenum >= 86.5) {
    return 'B+'
  }
  else if (gradenum >= 82.5) {
    return 'B'
  }
  else if (gradenum >= 79.5) {
    return 'B-'
  }
  else if (gradenum >= 76.5) {
    return 'C+'
  }
  else if (gradenum >= 72.5) {
    return 'C'
  }
  else if (gradenum >= 69.5) {
    return 'C-'
  }
  else if (gradenum >= 66.5) {
    return 'D+'
  }
  else if (gradenum >= 63.5) {
    return 'D'
  }
  return 'F'
}

const SidebarLink = ({name, link, selected}) => {
  if (selected == 'true') {
    return (
      <div style={{width: '100%', paddingTop: '0.5rem', paddingBottom: '0.5rem', color: 'red'}}><Link to={link} style={{textDecoration: 'none', color: 'red'}}>{name}</Link></div>
    )
  }
  else {
    return (
      <div style={{width: '100%', paddingTop: '0.5rem', paddingBottom: '0.5rem', color: 'white'}}><Link to={link} style={{textDecoration: 'none'}}>{name}</Link></div>
    )
  }
}

const QuarterLink = ({name, link, selected}) => {
  if (selected == "true") {
    return (
      <span style={{color: 'red'}}>{name} Quarter</span>
    )
  }
  return (
    <Link to={link} style={{textDecoration: 'none', color: 'lightblue'}}>{name} Quarter</Link>
  )
}

const ClassElement = ({period, classname, classlink, teacher, teacheremail, room, grade}) => {
  return (
    <motion.div variants={fadeInUp()} style={{marginTop: '0.5rem'}}>
      <div
        style={{
          width: "100%",
          paddingTop: '.5rem',
          paddingBottom: '.5rem',
          borderRadius: '0.5rem',
          backgroundColor: '#202c34',
        }}>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
        }}>
          <div style={{
            width: '33.33333%',
            fontWeight: '700',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            textAlign: "left",
            display: 'flex',
            justifyContent: 'center',
            //paddingLeft: '1.5rem',
            alignItems: 'center',
            verticalAlign: 'middle',
          }}>
            <Link to={classlink} style={{color: 'lightblue', textDecoration: 'none'}}>{period}: {classname}</Link>
          </div>
          <div style={{
            width: '33.33333%',
            fontWeight: '600',
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            display: 'flex',
            justifyContent: 'center',
            //paddingLeft: '1.5rem',
            alignItems: 'center',
            verticalAlign: 'middle',
          }}>
            <Link to={teacheremail} style={{color: 'lightblue', textDecoration: 'none'}}>{teacher}</Link>
          </div>
          <div style={{
            width: '16.16667%',
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            verticalAlign: 'middle',
          }}>
            Room: {room}
          </div>
          <div style={{
            width: '16.16667%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{
              width: '100%',
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '2.5rem'
            }}>
              {getGrade({grade})}
            </div>
            <div style={{
              width: '100%',
              fontSize: '1.125rem',
              lineHeight: '1.75rem'
            }}>
              {grade}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const SecondPage = () => (
  <Layout>
    <motion.div
        initial='initial'
        animate='animate'
        variants={staggerAnimation}
      >
      <motion.div variants={fadeInDown()} style={{marginBottom: '0.5rem'}}>
        <div 
          style={{
            backgroundColor:"#202c34",
            width: '100%',
            paddingTop: '1rem',
            paddingLeft: '2.5rem',
            paddingRight: '1rem',
            paddingBottom: '0.5rem'
          }}>
            <div 
              style = {{
                alignContent: 'left',
                fontWeight: '650',
                fontSize: '3.5rem',
              }}>
              SIS
            </div>
            <div 
              style = {{
                textAlign: 'right',
                fontWeight: '550',
              }}>
              Welcome, today is {new Date().getMonth()+1}/{new Date().getDate()}/{new Date().getFullYear()}. <Link to="/" style={{color: 'lightblue'}}>Logout</Link>
            </div>
        </div>
      </motion.div>
      <div style={{paddingBottom: '1rem', paddingRight: '2rem', paddingLeft: '2rem', width: '100%', display: 'flex', flexDirection: 'row'}}>
        <motion.div variants={fadeInRight()} style={{padding: '0.5rem', width: '16.666667%',}}>
          <div 
            style={{
              backgroundColor:"#202c34",
              padding: '0.5rem',
              textAlign: 'center',
              borderRadius: '0.5rem',
            }}>
              <SidebarLink name='Home' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Messages' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Calendar' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Attendance' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Class Schedule' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Course History' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Grade Book' link='/gradepage/' selected='true'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Health' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Report Card' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Student Info' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='FCPS Links' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Test History' link='/gradepage/' selected='false'></SidebarLink>
              <hr style={{margin: '0', background: 'white'}}></hr>
              <SidebarLink name='Documents' link='/gradepage/' selected='false'></SidebarLink>
          </div>
        </motion.div>
        <div style={{paddingTop: '0.5rem', paddingLeft: '0.5rem', paddingRight: '0.5rem', width: '83.333333%', color: 'white'}}>
            <motion.div variants={fadeInUp()}>
              <div style={{backgroundColor: '#202c34', borderRadius: '0.5rem',}}>
                <div style={{paddingRight: '.75rem', paddingLeft: '.75rem', paddingTop: '.75rem', textAlign: 'left', fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: '700', }}>
                  Grade Book
                  <hr style={{margin: '0', background: 'white'}}></hr>
                </div>
                <div style={{width: '100%', paddingRight: '.75rem', paddingLeft: '.75rem', paddingTop: '.5rem', paddingBottom: '.5rem', display: 'flex', flexDirection: 'row'}}>
                  <div style={{width: '50%'}}>Grade Book Summary for Third Quarter (ending 03/26/2021)</div>
                  <div style={{width: '50%', textAlign: 'right', fontWeight: '550'}}><QuarterLink name='First' link='/gradepage/' selected="false"></QuarterLink> | <QuarterLink name='Second' link='/gradepage/' selected="false"></QuarterLink> | <QuarterLink name='Third' link='/gradepage/' selected="true"></QuarterLink> | <QuarterLink name='Fourth' link='/gradepage/' selected="false"></QuarterLink></div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp()} style={{marginTop: '0.5rem'}}>
              <div
                style={{
                  width: "100%",
                  paddingTop: '.5rem',
                  paddingBottom: '.5rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#202c34',
                }}>
                <div style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '33.33333%',
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    //paddingLeft: '1.5rem',
                    alignItems: 'center',
                    verticalAlign: 'middle',
                  }}>
                    Class Name
                  </div>
                  <div style={{
                    width: '33.33333%',
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    //paddingLeft: '1.5rem',
                    alignItems: 'center',
                    verticalAlign: 'middle',
                  }}>
                    Teacher
                  </div>
                  <div style={{
                    width: '16.16667%',
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    verticalAlign: 'middle',
                  }}>
                    Room
                  </div>
                  <div style={{
                    width: '16.16667%',
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                  }}>
                    3rd Qtr
                  </div>
                </div>
              </div>
            </motion.div>
            <ClassElement period='1' classname='Matrix Algebra' classlink="/gradepage/" room='86' teacher='Alouf Jiraari Scavotto' teacheremail='/gradepage/' grade='69.61'></ClassElement>
            <ClassElement period='2' classname='Advanced Band' classlink="/gradepage/" room='134' teacher='Stephen Ballard' teacheremail='/gradepage/' grade='63.6'></ClassElement>
            <ClassElement period='3' classname='AP Physics C M&amp;EM' classlink="/physics/" room='236' teacher='Mark Hannum' teacheremail='/gradepage/' grade='98.8'></ClassElement>
            <ClassElement period='4' classname='Artifical Intell1' classlink="/gradepage/" room='18' teacher='Malcolm Eckel' teacheremail='/gradepage/' grade='88.61'></ClassElement>
            <ClassElement period='5' classname='AP Chinese' classlink="/gradepage/" room='73' teacher='Qin Xu' teacheremail='/gradepage/' grade='92.1'></ClassElement>
            <ClassElement period='6' classname='English 11' classlink="/gradepage/" room='243' teacher='Maria Gilbert' teacheremail='/gradepage/' grade='14.9'></ClassElement>
            <ClassElement period='7' classname='AP US History' classlink="/gradepage/" room='244' teacher='Emilia Gillevet' teacheremail='/gradepage/' grade='78.61'></ClassElement>
        </div>
      </div>
    </motion.div>
  </Layout>
)

export default SecondPage
