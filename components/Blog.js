import React from 'react'
import { articles } from '../constants/articles'
import { useStateContext } from '../context/StateContext'
import Article from './Article'

const Blog = () => {
  const { darkModeActive } = useStateContext()

  const styles = {
    blog: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515]'}`
  }

  return (
    <div className={styles.blog}>
      <h1>Blog</h1>
      <div>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Blog