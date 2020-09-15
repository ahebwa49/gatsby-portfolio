import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"

import Seo from "./seo"

const ListLink = props => (
  <div id="list-link-style">
    <Link
      activeClassName="active-link"
      style={{ textDecoration: "none", color: "#333" }}
      to={props.to}
    >
      {props.children}
    </Link>
  </div>
)

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Seo />
      <header id="header">
        <div id="header-logo">
          <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
            <span>Livingstone Asabahebwa</span>
          </Link>
        </div>
        <div id="header-list">
          <ListLink to="/about">About</ListLink>
          <ListLink to="/products/">Products</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <div id="dark-button">Dark</div>
        </div>
      </header>
      <main id="main">{children}</main>
      <div id="footer">
        <div id="footer-container">
          <div id="footer-contact">
            <h3>Contact</h3>
            <div id="contact-icons">
              <TwitterIcon className="contact-icon" />
              <GitHubIcon style={{ height: "20px" }} className="contact-icon" />
              <LinkedInIcon className="contact-icon" />
              <EmailIcon className="contact-icon" />
            </div>
          </div>
          <div id="footer-newsletter">
            <h3>Newsletter</h3>
            <div id="newsletter-email">
              <input placeholder="Email Address" />
              <span id="subscribe">Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
