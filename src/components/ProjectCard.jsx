import React from 'react'

export default function ProjectCard({ title, description, img }) {
  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: 8,
      overflow: 'hidden',
      background: '#fff'
    }}>
      <div style={{ height: 160, background: '#ddd' }}>
        {/* ضع هنا src={img} في حالة وجود صور فعلية */}
      </div>
      <div style={{ padding: 16 }}>
        <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
        <p style={{ margin: 0, color: 'var(--muted)' }}>{description}</p>
      </div>
    </div>
  )
}
