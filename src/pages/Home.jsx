import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const sample = [
    { title: 'Living Room Makeover', description: 'تصميم داخلي لغرفة معيشة مع لمسات مودرن' },
    { title: 'Kitchen Remodel', description: 'ديكور مطبخ مع تخزين ذكي وتصميم عملي' }
  ]
  return (
    <div className="container">
      <section style={{ padding: '24px 0' }}>
        <h1>مرحبا في Rivano</h1>
        <p>شركة تصميم داخلي وديكورات — نقدم حلول تصميمية متكاملة.</p>
      </section>

      <section style={{ padding: '24px 0' }}>
        <h2>أعمال مختارة</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16
        }}>
          {sample.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>
      </section>
    </div>
  )
}
