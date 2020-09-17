import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

// export const query = graphql`
//   query ArticleQuery($id: Int!) {
//     strapiArticle(strapiId: { eq: $id }) {
//       strapiId
//       title
//       content
//       published_at
//       category {
//         name
//       }
//       image {
//         url
//       }
//     }
//   }
// `

const Article = ({ data }) => {
  // const article = data.strapiArticle
  // console.log(article)
  // console.log(article.image[0].url)

  return (
    <Layout>
      <div id="article">
        <h1 id="article-heading">{article.title}</h1>
        <div id="article-image-container">
          <img
            src={`http://localhost:1337${article.image[0].url}`}
            id="article-image"
          />
        </div>
        <div id="article-tag">#{article.category.name}</div>

        <div id="article-content">
          <div>
            <ReactMarkdown source={article.content} />
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
