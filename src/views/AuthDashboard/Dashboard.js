import React from 'react'
import ellipse from '../../assets/Ellipse 20.png'

export default function Dashboard() {
  return (
    <div style={{top: '40%', left: '40%', position: 'fixed'}}>
      <img style={{width: 200, height: 200, opacity: 3 }}  src={ellipse} alt='ellipse'/>
    </div>
  )
}
