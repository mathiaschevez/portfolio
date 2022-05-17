import React from 'react'
import { useRouter } from 'next/router'
import { projects } from '../../constants/constants'

const ProjectDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const currentProject = projects[id]

  const styles = {
    project: `pl-40 h-screen`
  }

  return (
    <div className={styles.project}>
      <h1>{currentProject.title}</h1>
    </div>
  )
}

export default ProjectDetail