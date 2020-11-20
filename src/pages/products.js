import React from "react"
import Layout from "../components/layout"
import PlanogyImage from "../components/planogyImage"
import HotlineImage from "../components/hotlineImage"
import BlogImage from "../components/blogImage"
import Swipe2payImage from "../components/swipe2payImage"

export default function About() {
  return (
    <Layout>
      <div id="products">
        <h1>Products</h1>
        <p>
          Here you will find some of my personal/group projects I've worked on
          and built over the years. The ones here are alive and thriving while
          others have been buried in the graveyard of my Github{" "}
          <span role="img">😅</span>.
        </p>
        <a
          href="https://planogy.com/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div id="product">
            <div id="product-image">
              <PlanogyImage />
            </div>
            <div id="product-description">
              <h3>Planogy</h3>

              <p>
                A tool that helps you keep track of your design work. We allow
                designers to share design assets with their team who can leave
                comments and explain additional details with simple shapes.
              </p>
            </div>
          </div>
        </a>

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
                An interactive visualization of the exponential spread of
                COVID-19 across the world. These graphs are not just images.
                Hover over any country to see the data behind it.
              </p>
            </div>
          </div>
        </a>
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
                swipe2pay takes the friction out of payments, so you can focus
                on what you do best " Making sales". It allows SMEs to accept
                mobile payments and grow their businesses.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://thehotline.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div id="product">
            <div id="product-image">
              <HotlineImage />
            </div>
            <div id="product-description">
              <h3>Hotline</h3>

              <p>
                Sometimes even if you think your relationship is healthy it can
                hide signs of abuse from one of the partners. This app will help
                you identify signs of abuse and offer resources on what you can
                do next.
              </p>
            </div>
          </div>
        </a>
      </div>
    </Layout>
  )
}
