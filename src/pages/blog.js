import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/Post"

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
                    description
                    author
                    path
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            <h1>Blog</h1>
            {data.allMarkdownRemark.edges.map(post => {
              const {
                title,
                author,
                date,
                description,
                path,
              } = post.node.frontmatter

              return (
                <Post
                  title={title}
                  author={author}
                  date={date}
                  description={description}
                  key={`${date}__${title}`}
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
