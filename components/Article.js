import React from 'react'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'

const Article = ({ article }) => {
  const { darkModeActive } = useStateContext()

  const styles = {
    article: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515]'}`
  }

  return (
    <div className={styles.article}>
      <Link href={`/blog/${article.id}`}>
        {article.title}
      </Link>
    </div>
  )
}

export default Article