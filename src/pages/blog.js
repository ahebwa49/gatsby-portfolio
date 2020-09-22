import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
export default function Blog() {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query AllBlogPosts {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    date
                    title
                    readTime
                    tags
                    description
                    author
                    featuredImage {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                    path
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div id="blog">
            <h1>Blog</h1>
            {data.allMarkdownRemark.edges.map(post => {
              const {
                title,
                tags,
                readTime,
                author,
                date,
                description,
                path,
              } = post.node.frontmatter
              const featuredImgFluid =
                post.node.frontmatter.featuredImage.childImageSharp.fluid
              const postTags = tags.split(" ")
              console.log(postTags)

              // console.log(post)
              return (
                <Card
                  tags={postTags}
                  title={title}
                  readTime={readTime}
                  author={author}
                  date={date}
                  description={description}
                  key={`${date}__${title}`}
                  featuredImgFluid={featuredImgFluid}
                  path={path}
                />
              )
            })}
          </div>
        )}
      />
    </Layout>
  )
}
