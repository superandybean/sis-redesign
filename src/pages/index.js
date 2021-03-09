import * as React from "react"
import { fadeInUp, staggerAnimation } from '../animation/animations'
import { motion } from 'framer-motion'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import LoginPage from "../components/loginpage"

const IndexPage = () => (
  <motion.div
      initial='initial'
      animate='animate'
      variants={staggerAnimation}
    >
    <motion.div variants={fadeInUp()}>
      <LoginPage>
        <footer
          style={{
            marginTop:'4px',
            textAlign: 'center'
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </LoginPage>
    </motion.div>
  </motion.div>
)

export default IndexPage
