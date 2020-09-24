import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"

import Seo from "./seo"
import MenuButton from "./menuButton"
import MobileMenu from "./mobileMenu"

const ListLink = props => (
  <div id="list-link-style">
    <Link
      activeClassName="active-link"
      style={{ textDecoration: "none" }}
      to={props.to}
    >
      <span>{props.children}</span>
    </Link>
  </div>
)

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightMode: true,
      darkMode: false,
    }
  }

  setDarkMode = () => {
    this.setState(
      {
        lightMode: false,
        darkMode: true,
      },
      () => document.querySelector("body").classList.add("dark")
    )
  }

  setLightMode = () => {
    this.setState(
      {
        lightMode: true,
        darkMode: false,
      },
      () => document.querySelector("body").classList.remove("dark")
    )
  }

  render() {
    if (this.state.lightMode) {
      return (
        <div onClick={this.setDarkMode} id="theme-name">
          dark
        </div>
      )
    } else {
      return (
        <div onClick={this.setLightMode} id="theme-name">
          light
        </div>
      )
    }
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMobileMenu: false,
    }
  }

  showMobileMenu = () => {
    this.setState({
      showMobileMenu: true,
    })
  }

  closeMobileMenu = () => {
    this.setState({
      showMobileMenu: false,
    })
  }
  render() {
    return (
      <div
        id="layout"
        style={{
          backgroundColor: "var(--bg)",
          color: "var(--textNormal)",
          transition: "color 0.2s ease-out, background 0.2s ease-out",
        }}
      >
        <Seo />
        <header id="header">
          <div id="header-logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Livingstone Asabahebwa</span>
            </Link>
          </div>
          <div id="mobile-header-elements">
            <Toggle />

            <div id="menu-button" onClick={this.showMobileMenu}>
              <MenuButton />
            </div>
          </div>

          <div id="header-list">
            <ListLink to="/about">About</ListLink>
            <ListLink to="/products/">Products</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <Toggle />
          </div>
        </header>

        {this.state.showMobileMenu ? (
          <div id="mobile-menu">
            <MobileMenu closeMobileMenu={this.closeMobileMenu} />
          </div>
        ) : null}
        <main id="main">{this.props.children}</main>
        <div id="footer">
          <div id="footer-container">
            <div id="footer-contact">
              <h3>Contact</h3>
              <div id="contact-icons">
                <a href="https://twitter.com/lasabahebwa" target="_blank">
                  <TwitterIcon className="contact-icon" />
                </a>

                <a href="https://github.com/ahebwa49" target="_blank">
                  <GitHubIcon
                    style={{ height: "20px" }}
                    className="contact-icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/livingstone-asabahebwa-290594108/"
                  target="_blank"
                >
                  <LinkedInIcon className="contact-icon" />
                </a>
                <a href="mailto:ahebwa49@gmail.com" target="_blank">
                  <EmailIcon className="contact-icon" />
                </a>
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
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
