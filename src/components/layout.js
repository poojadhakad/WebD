import * as React from "react"
import PropTypes from "prop-types"
import "../pages/login.module.css"
import Navbar from "./navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from "../styles/GlobalStyles"
import "../pages/images.css"


const Layout = ({ children }) => {
  return (
    <>

<Navbar/>
      <GlobalStyle />
      <styled />
      <main>{children}</main>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
