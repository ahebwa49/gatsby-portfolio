import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"

import { toggleDarkMode } from "../state/app"
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

  componentDidUpdate() {
    const { isDarkMode } = this.props
    if (isDarkMode) {
      document.querySelector("body").classList.add("dark")
    } else {
      document.querySelector("body").classList.remove("dark")
    }
  }

  render() {
    const { isDarkMode, dispatch } = this.props
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
            {isDarkMode ? (
              <div
                onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
                id="theme-name"
              >
                light
              </div>
            ) : (
              <div
                onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
                id="theme-name"
              >
                dark
              </div>
            )}

            <div id="menu-button" onClick={this.showMobileMenu}>
              <MenuButton />
            </div>
          </div>

          <div id="header-list">
            <ListLink to="/about">About</ListLink>
            <ListLink to="/products/">Products</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            {isDarkMode ? (
              <div
                onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
                id="theme-name"
              >
                light
              </div>
            ) : (
              <div
                onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
                id="theme-name"
              >
                dark
              </div>
            )}
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
                <a
                  href="https://twitter.com/lasabahebwa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon className="contact-icon" />
                </a>

                <a
                  href="https://github.com/ahebwa49"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon
                    style={{ height: "20px" }}
                    className="contact-icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/livingstone-asabahebwa-290594108/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon className="contact-icon" />
                </a>
                <a
                  href="mailto:ahebwa49@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
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

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(Layout)
