import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { articles } from '../../constants/articles'
import { useStateContext } from '../../context/StateContext'

const ArticleDetail = () => {
  const { darkModeActive } = useStateContext()
  const router = useRouter()
  const { id } = router.query
  const currentArticle = articles[id]

  const styles = {
    articleDetail: `${darkModeActive ? 'bg-[#151515] text-[#EBEBEB]' : 'bg-[#EBEBEB] text-[#151515]'} pt-20 mobileArticle`,
    articleDetailText: `px-3 py-6`,
    articleDetailTopBar: `flex justify-between items-center mb-6`,
    articleDetailTitle: `text-3xl font-bold`,
    articleDetailBody: ``,
  }

  return (
    <>
      {currentArticle ? 
        <div className={styles.articleDetail}>
          <Image 
            src={currentArticle.image} 
            width='1000'
            height='600'
            alt='image'
          />
          <div className={styles.articleDetailText}>
            <div className={styles.articleDetailTopBar}>
              <h1 className={styles.articleDetailTitle}>{currentArticle?.title}</h1>
              <h1>{currentArticle.date}</h1>
            </div>
            <h1 className={styles.articleDetailBody}>
              {currentArticle.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </h1>
          </div> 
        </div>
        : 
        <div className={styles.articleDetail}>
          <h1>Loading</h1>
        </div>
      }
    </>
  )
}

export default ArticleDetail