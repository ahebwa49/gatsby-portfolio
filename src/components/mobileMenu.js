import React, { Component } from "react"
import { Link } from "gatsby"
import CloseIcon from "@material-ui/icons/Close"

class MobileMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mobileMenu">
        <div className="listItems">
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <div className="list-item">About</div>
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="list-item">Products</div>
          </Link>
          <Link to="/blog" style={{ textDecoration: "none", color: "white" }}>
            <div className="list-item">Blog</div>
          </Link>
        </div>
        <div className="close" onClick={this.props.closeMobileMenu}>
          <CloseIcon style={{ color: "white" }} />
        </div>
      </div>
    )
  }
}
export default MobileMenu
