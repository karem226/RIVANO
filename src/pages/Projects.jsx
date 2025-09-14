import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = new Array(6).fill(0).map((_, i) => ({
    title: `Project ${i + 1}`,
    description: 'مثال لوصف المشروع'
  }))

  return (
    <div className="container">
      <h1>Our Projects</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 16,
        marginTop: 16
      }}>
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </div>
  )
}
