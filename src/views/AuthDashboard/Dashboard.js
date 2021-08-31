import React from 'react'
import ellipse from '../../assets/Ellipse 20.png'

export default function Dashboard() {
  return (
    <div style={{top: '35%', left: '40%', position: 'fixed'}}>
      <img style={{width: 300, height: 300, opacity: 100 }}  src={ellipse} alt='ellipse'/>
    </div>
  )
}
