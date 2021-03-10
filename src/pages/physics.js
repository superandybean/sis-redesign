import * as React from "react"
import { Link } from "gatsby"
import { motion } from 'framer-motion'
import { fadeInUp, staggerAnimation, fadeInDown, fadeInRight } from '../animation/animations'
import Layout from "../components/layout"

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

const PhysicsPage = () => (
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
              Welcome, today is {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()}. <Link to="/" style={{color: 'lightblue'}}>Logout</Link>
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
      </div>
    </motion.div>
  </Layout>
)

export default PhysicsPage