import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Moment from "react-moment"

import Layout from "../components/layout"

import "./blogTemplate.css"

export default function Template({ data }) {
  const post = data.markdownRemark
  console.log(post)
  const postTags = post.frontmatter.tags.split(" ")
  console.log(postTags)
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  const { title, author, date } = post.frontmatter

  return (
    <Layout>
      <div id="article">
        <h1 id="article-heading">{title}</h1>
        <div id="article-image-container">
          <Img fluid={featuredImgFluid} style={{ width: "100%" }} />
        </div>
        {postTags.map((tag, index) => (
          <div id="article-tag" key={index}>
            #{tag}
          </div>
        ))}

        <div id="article-content">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        title
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        path
      }
      html
    }
  }
`
