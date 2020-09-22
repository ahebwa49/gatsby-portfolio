---
path: "/my-first-blog"
date: "2020-01-14"
readTime: "7 min read"
title: "Getting started with React and D3 — interactive Bar Chart."
tags: "TypeScript GraphQL React"
featuredImage: ../../images/2019nCoV.png
author: "Livingstone Asabahebwa"
description: "D3, which stands for data driven documents, has been the industry standard for creating custom data visualizations on the web since it’s creation in 2011. I like to think about D3 as a library that loads data and attaches it to the DOM. React is a Facebook technology which makes it painless to create interactive UIs..."
---

D3, which stands for data driven documents, has been the industry standard for creating custom data visualizations on the web since it’s creation in 2011. I like to think about D3 as a library that loads data and attaches it to the DOM. React is a Facebook technology which makes it painless to create interactive UIs. It is believed to be the most powerful UI library ever created.

Both React and D3 are two great tools used for building custom data visualizations on the web. However, they were designed with purposes that collide. Both take control of user interface elements or manipulate the DOM and do it in different ways. How can we make them work together while maximizing for their distinct advantages?

In this article, we shall use these two libraries, leveraging the power of their distinct advantages to create an interactive bar chart. There are various approaches to using react and D3 in the same project but one rule must be followed;

> **They should never share DOM control**. That would be a recipe for disaster. — Marcos Iglesias

Here is what we shall build and what I'll be walking you through this article

![Alt Text](https://media.giphy.com/media/J21UGTKr7eefvtciXx/giphy.gif)

When creating data visualizations with React and D3, we can use use a number of different approaches, leaning more on the React side or the D3.js side. In my previous article about creating a 30 day bitcoin price chart with React and D3, I used React for the DOM, D3 for Math.

### React for the DOM, D3.js for the math

In this strategy, we limit the use of D3.js as much as possible. This means that we perform calculations for SVG paths, scales, layouts and transformations that require data with D3.js and transform it into something that we can draw with React. For this demo, we shall be using D3.js within React.

### D3.js within React

In this approach, we give D3.js as much DOM control as possible. We employ React to render a div that works as the root element for our data visualization. Then we make use of the componentDidMount lifecycle method to make the data visualization with D3.js code and append it to the root element with the help of React refs.

Alright, enough of the talking! Let's get started implementing the interactive bar chart.

![Alt Text](https://thumbs.gfycat.com/HarmlessVacantGallinule-size_restricted.gif)

## Implementation of the interactive bar chart

All I needed to implement this bar chart were mainly two files;

### React component

- Contains the _componentDidMount_ lifecycle method where the D3.js calculations take place.

- Where the root element is rendered by React.

- Where D3.js is added to the project.

- Contains some styles for the bar chart.

### Styles file

- For additional styles for the bar chart.

Pretty simple and straight forward … :)

## Here’s how I did it

To get started real quick on this project, I bootstrapped the application with create-react-app, a node module created by the Engineers at Facebook to generate boiler plate code for a React application. It takes care of webpack and babel configuration under the hood.

I’ll start with code in the React component which is responsible for making D3.js calculations and rendering the bar graph visualization onto the DOM.

    import React from "react";
    import * as d3 from "d3";
    
    class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    }
  
    componentDidMount() {
        const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
        const w = 600;
        const h = 300;
        
        const svg = d3
            .select(this.refs.chart)
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("class", "bar");

        svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("fill", "navy")
        .attr("class", "sBar")
        .attr("x", (d, i) => i * 60)
        .attr("y", (d, i) => {
            return h - 7 * d;
        })
        .attr("width", 50)
        .attr("height", (d, i) => 7 * d)
        .append("title")
        .text(d => d);
 
        svg
        .selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .style("font-size", 18)
        .attr("fill", "red")
        .attr("x", (d, i) => i * 60)
        .attr("y", (d, i) => h - 7 * d - 3)
        .text(d => d);
        }

        render() {
            const styles = {
                container: {
                    display: "grid",
                    justifyItems: "center"
                }
            };
            return (
                <div ref="chart" style={styles.container}>
                    <h1 style={{ textAlign: "center" }}>Hi, I'm the bar chart</h1>
                </div>
                );
            }
        }
    export default App;