import React from "react"
import { Link } from "gatsby"
// import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

const Card = ({ article }) => {
  function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-")
  }
  let url = urlSlug(article.node.title)
  console.log(url)
  return (
    <Link to={`/blog/${article.node.strapiId}`} className="uk-link-reset">
      <div id="card">
        <div id="card-image">
          <img
            src={`http://localhost:1337${article.node.image[0].url}`}
            alt={article.node.image[0].url}
            id="card-img"
          />
        </div>

        <div id="card-body">
          <p id="title">{article.node.title}</p>
          <p id="date">
            <Moment format="MMM Do YYYY">{article.node.published_at}</Moment>
          </p>
          <p id="card-text">{article.node.content}</p>
          <p id="read-more">Read more →</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
