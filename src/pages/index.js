import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"
import Image from "../components/image"
import PlanogyImage from "../components/planogyImage"
import HotlineImage from "../components/hotlineImage"
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
      render={data => (
        <div id="index-page">
          <div id="heading">
            <div id="heading-wording">
              <h1>
                Hi, I'm Livingstone. I build products with TypeScript, React,
                and GraphQL.
              </h1>
            </div>
            <div id="heading-image">
              <Image />
            </div>
          </div>

          <h2>Articles</h2>
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
            <div id="product">
              <div id="product-image">
                <PlanogyImage />
              </div>
              <div id="product-description">
                <a href="https://planogy.com/" target="_blank" rel="noreferrer">
                  <h3>Planogy</h3>
                </a>
                <p>
                  A tool that helps you keep track of your design work. We allow
                  designers to share design assets with their team who can leave
                  comments and explain additional details with simple shapes.
                </p>
              </div>
            </div>
            <div id="product">
              <div id="product-image">
                <HotlineImage />
              </div>
              <div id="product-description">
                <a
                  href="https://thehotline.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>Hotline</h3>
                </a>
                <p>
                  Sometimes even if you think your relationship is healthy it
                  can hide signs of abuse from one of the partners. This app
                  will help you identify signs of abuse and offer resources on
                  what you can do next.
                </p>
              </div>
            </div>
            <div id="product">
              <div id="product-image">
                <BlogImage />
              </div>
              <div id="product-description">
                <a
                  href="https://covid-19-info.live/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>2019nCoV Visualizer</h3>
                </a>
                <p>
                  An interactive visualization of the exponential spread of
                  COVID-19 across the world. These graphs are not just images.
                  Hover over any country to see the data behind it.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
