import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  console.log(articles)

  return (
    <div>
      {articles.map((article, i) => {
        return (
          <Card article={article} key={`article__${article.node.strapiId}`} />
        )
      })}
    </div>
  )
}

export default Articles
