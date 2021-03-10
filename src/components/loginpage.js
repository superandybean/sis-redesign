import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./loginpage.css"

import Layout from "../components/layout"

const LoginPage = ({ children }) => {
  return (
    <Layout>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 620,
          padding: `8px`,
          marginTop:'5rem',
          backgroundColor:"#202c34",
          borderRadius: '0.5rem',
          textAlign: 'center',
        }}
      >
        <div>
          <div
          style={{
            fontSize: '3rem',
            lineHeight: '1'
          }}>
            SIS
          </div>
          <div style={{textAlign:'left'}}>
            <p style={{padding: '3px', margin: '0'}}>Username:</p>
            <input type="username" style={{width:'100%', borderRadius: '0.25rem'}}></input>
            <p style={{padding: '3px', margin: '0'}}>Password:</p>
            <input type="password" style={{width:'100%', borderRadius: '0.25rem'}}></input>
            </div>
            <Link to="/gradepage/" style={{color: 'black', }}><button style={{fontSize: '0.8rem', cursor: 'pointer'}}>Login</button></Link>
        </div>
        <main>{children}</main>
      </div>
    </Layout>
  )
}

export default LoginPage
