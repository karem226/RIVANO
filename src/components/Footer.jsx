import React from 'react'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #eee', padding: 24, textAlign:'center' }}>
      <div className="container">
        © {new Date().getFullYear()} Rivano — Interior Design & Decor
      </div>
    </footer>
  )
}
