---
path: "/getting-started-with-react-and-d3-interactive-bar-chart"
date: "2020-01-14"
readTime: "7 min read"
title: "Getting started with React and D3 — interactive Bar Chart."
tags: "JavaScript D3.js React"
featuredImage: ../../images/bar-chart.png
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

<!-- ![Alt Text](https://thumbs.gfycat.com/HarmlessVacantGallinule-size_restricted.gif) -->

<iframe src='https://gfycat.com/ifr/HarmlessVacantGallinule' frameborder='0' scrolling='no' allowfullscreen width='100%' height='364'></iframe>

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

Before anything else, you need to add D3.js to the project. Navigate to your project folder and run the command _yarn add d3_ if you are using yarn else run _npm i d3_ for npm fans. After that, import D3 to the App.js file as shown at the beginning of the code snippet above.

    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    const w = 600;
    const h = 300;

In this file, we need to focus our attention on the componentDidMount lifecycle method. At the start of this method, we initialize the dataset variable to a simple array of numbers. We also initialize the height and width of the svg.

    const svg = d3
        .select(this.refs.chart)
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("class", "bar");

Here, we select the root element in the render method with the help D3’s _select()_ method, React refs and append an svg element to it. D3 has the _attr()_ method to add any HTML attribute to an element, including a class name. In the code snippet above, we add the width, height and a class bar to the svg element.

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

At the start of the highlighted code snippet, we are creating and appending a rectangle for each data point in the dataset variable. The first step in this process is to make D3 aware of the data. The _data()_ method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.

A common workflow pattern is to create a new element in the document for each piece of data in the set. D3 has the _enter()_ method for this purpose. When _enter()_ is combined with the _data()_ method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.

For each of the numbers in the dataset array, we append a rect element to the svg. We then add HTML attributes fill and class to the rect elements with the help of D3’s _attr()_ method. At this point, all rectangles the will be stacked on top of each other. The placement of a rectangle is handled by the _x_ and _y_ attributes. They tell D3 where to start drawing the shape in the _svg_ area.

Remember that the _x_ value, however, needs to change as you add new bars. Larger x values will push items farther to the right. The _attr()_ method in D3 accepts a callback function to dynamically set that attribute. The callback function takes two arguments, one for the data point itself (usually _d_) and one for the index of the data point in the array. In this case, we return the index multiplied by 60 so that we can leave some space between the bars.

Remember that in _svg_, higher _y_ values push the rectangle down. To make the bars right-side-up, you need to change the way the _y_ coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area. The _y_ coordinate that is _y = heightOfSVG - heightOfBar_ would place the bars right-side-up.

Adding a tooltip that shows the data value on hover effect is one of the simplest things to do, thanks to D3. You just need to append a title element and then call the _text()_ method with a callback function so the text displays the data value.

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

Adding the text labels above the bars is almost the same as adding rectangles for the bars. You just won’t need to worry about the width and height attributes as in adding rectangles. We subtract 3 on the returned value of the _y_ attribute so that the text can go just above the bars.

If you’ve read up to this point, happy to let you know that I’m now winding up. You should also be preparing to reward yourself, yeah. It’s worth it.

    .bar {
    padding-left: 60px;
    padding: 0 auto;
    }
    .sBar:hover {
    fill: brown;
    }

Anyways from our project structure, we have another small but important file, _index.css_ for adding styles for example changing the color of the bars on hover. The class attributes added in the _App.js_ file can be accessed in this file.

And you’ve successfully built an interactive bar chart with React and D3. Again, not too tough. Nah.

The source code can be found in [this GitHub repository](https://github.com/ahebwa49/bar_chart).

<iframe src='https://gfycat.com/ifr/SelfishRichFieldspaniel' frameborder='0' scrolling='no' allowfullscreen width='100%' height='364'></iframe>

## Conclusion

Getting started with React and D3 can be intimidating at first. However, if you master the basics of D3 and how it can be used with React, You’ll have a great tool-set to help you deal with the DOM without adding any bugs.

Check back in a few days, I’ll be writing about adding a brush with React and D3 to a bar chart so that only data within a specified visual range can be retrieved.

### If you enjoyed reading this, you may also enjoy some of my other blogs:

- [Make a clever bitcoin price chart with React and D3](https://medium.com/analytics-vidhya/make-a-clever-bitcoin-price-chart-with-react-and-d3-e6359d604b54).

- [Basic Node.js setup every JavaScript backend developer needs to know](https://medium.com/@ahebwa49/basic-node-js-setup-every-javascript-backend-developer-needs-to-know-f157dad834e6).

### References and Further Resources:

- [freeCodeCamp](https://www.freecodecamp.org/learn/data-visualization/data-visualization-with-d3)

- [d3js.org](https://d3js.org/)

### I have a keen interest about data visualization with React and D3. If you [follow me on Twitter](https://twitter.com/lasabahebwa), I won’t waste your time!
