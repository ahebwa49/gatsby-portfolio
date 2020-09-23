import React from "react"
import { Link } from "gatsby"
// import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import Img from "gatsby-image"

// import logo from "../images/2019nCoV.png"

const Card = ({
  title,
  author,
  readTime,
  featuredImgFluid,
  date,
  description,
  path,
}) => {
  return (
    <Link to={path} style={{ textDecoration: "none", color: "#333" }}>
      <div id="card">
        <div id="card-image">
          <Img
            fluid={featuredImgFluid}
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

        <div id="card-body">
          <h3 id="card-title">{title}</h3>
          <p id="date">
            <Moment format="MMM Do YYYY">{date}</Moment>
            <span> / {readTime}</span>
          </p>
          <p id="card-text">{description}</p>
          <p id="read-more">Read more →</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
