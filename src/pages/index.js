import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import Image from "../components/image"
import PlanogyImage from "../components/planogyImage"
import Swipe2payImage from "../components/swipe2payImage"
import BlogImage from "../components/blogImage"

import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query BlogPosts {
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
      render={data => {
        let blogPosts = data.allMarkdownRemark.edges.slice(-3)

        return (
          <div id="index-page">
            <div id="heading">
              <div id="heading-wording">
                <h1>
                  Hi, I'm Livingstone. I build products with TypeScript,
                  GraphQL, and Python.
                </h1>
              </div>
              <div id="heading-image">
                <Image />
              </div>
            </div>

            <h2>Articles</h2>
            {blogPosts.map(post => {
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

              return (
                <Card
                  tags={postTags}
                  title={title}
                  author={author}
                  date={date}
                  readTime={readTime}
                  description={description}
                  key={`${date}__${title}`}
                  featuredImgFluid={featuredImgFluid}
                  path={path}
                />
              )
            })}
            <div id="products">
              <h2>Products</h2>
              <span>
                <a
                  href="https://planogy.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div id="product" className="one">
                    <div id="product-image">
                      <PlanogyImage />
                    </div>
                    <div id="product-description">
                      <h3>Planogy</h3>

                      <p>
                        A tool that helps you keep track of your design work. We
                        allow designers to share design assets with their team
                        who can leave comments and explain additional details
                        with simple shapes.
                      </p>
                    </div>
                  </div>
                </a>
              </span>

              <span>
                <a
                  href="https://covid-19-info.live/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div id="product">
                    <div id="product-image">
                      <BlogImage />
                    </div>
                    <div id="product-description">
                      <h3>2019nCoV Visualizer</h3>

                      <p>
                        An interactive visualization of the exponential spread
                        of COVID-19 across the world. These graphs are not just
                        images. Hover over any country to see the data behind
                        it.
                      </p>
                    </div>
                  </div>
                </a>
              </span>
              <span>
                <a
                  href="https://www.swipe2payug.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div id="product">
                    <div id="product-image">
                      <Swipe2payImage />
                    </div>
                    <div id="product-description">
                      <h3>swipe2pay</h3>

                      <p>
                        swipe2pay takes the friction out of payments, so you can
                        focus on what you do best " Making sales". It allows
                        SMEs to accept mobile payments and grow their
                        businesses.
                      </p>
                    </div>
                  </div>
                </a>
              </span>
            </div>
          </div>
        )
      }}
    />
  </Layout>
)

export default IndexPage
