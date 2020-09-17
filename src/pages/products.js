import React from "react"
import Layout from "../components/layout"
import PlanogyImage from "../components/planogyImage"
import HotlineImage from "../components/hotlineImage"
import BlogImage from "../components/blogImage"

export default function About() {
  return (
    <Layout>
      <div id="products">
        <h1>Products</h1>
        <p>
          Here you will find some of my personal projects I've worked on and
          built over the years. Some are alive and thriving while others have
          been buried in the graveyard of my Github 😅.
        </p>
        <div id="product">
          <div id="product-image">
            <PlanogyImage />
          </div>
          <div id="product-description">
            <a href="https://planogy.com/" target="_blank">
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
            <a href="https://thehotline.herokuapp.com/" target="_blank">
              <h3>Hotline</h3>
            </a>
            <p>
              Sometimes even if you think your relationship is healthy it can
              hide signs of abuse from one of the partners. This app will help
              you identify signs of abuse and offer resources on what you can do
              next.
            </p>
          </div>
        </div>
        <div id="product">
          <div id="product-image">
            <BlogImage />
          </div>
          <div id="product-description">
            <a href="https://planogy.com/" target="_blank">
              <h3>2019nCoV Visualizer</h3>
            </a>
            <p>
              An interactive visualization of the exponential spread of COVID-19
              across the world. These graphs are not just images. Hover over any
              country to see the data behind it.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
