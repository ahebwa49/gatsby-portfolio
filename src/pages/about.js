import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <div id="about">
        <h1 id="about-heading">About Me</h1>
        <p id="about-paragraph">
          Hi, my name is Livingstone and I am a remote software engineer living
          and working in Kampala, Uganda. I grew up in a small village known as
          Kalinabiri of Ntinda and graduated from{" "}
          <a
            href="https://www.mak.ac.ug/"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            Makerere University
          </a>{" "}
          with a Bachelors degree in Computer Engineering. I'm a software
          developer and have been coding for over three years.{" "}
        </p>
        <p id="about-paragraph">
          I specialize in building enterprise web platforms using JavaScript
          (TypeScript nowadays!), Node, GraphQL, React and Python. I've been lucky to
          work with a lot of brilliant engineers along that way at some of the
          best startups in the world like{" "}
          <a
            href="https://planogy.com/"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            Planogy
          </a>{" "}
          and{" "}
          <a
            href="https://www.swipe2payug.com/"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            Swipe2pay
          </a>
          .
        </p>

        <p id="about-paragraph">
          I am currently contracting at{" "}
          <a
            href="https://aimform.com/"
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            aimform
          </a>{" "}
          as a frontend application developer architecting a fintech platform
          containing multiple SaaS solutions surrounding education. I build my
          own products on the side (like a 2019nCoV world map visualizer) and
          have been blogging things I’ve learned over the years to share what
          I’ve learned..{" "}
        </p>

        <p id="about-paragraph">
          When I'm not coding, I'm in nature exploring, gaming, or swimming.
        </p>

        <h2>Speaking</h2>
        <p id="about-paragraph">
          I'm starting to speak on events and give back to the community. I'd
          like to speak on typescript, react, data visualization, and the JAM
          stack.
        </p>
        <h3>
          JAM in 15: How to build and deploy a JAM stack app in 15 minutes, 2020
        </h3>
        <p id="about-paragraph">
          An overview of the JAM stack for beginners using Gatsby and Heroku.
          The talk is 100% in the editor walking through how to bootstrap your
          application, add a blog, and deploy all within 15 minutes.
        </p>
        <h2>Contact Me</h2>
        <p id="about-paragraph">
          You can reach me by email at ahebwa49@gmail.com if you would like to
          discuss an idea, book a speaking engagement, ask questions about a
          coding problem, or just connect!
        </p>
      </div>
    </Layout>
  )
}
