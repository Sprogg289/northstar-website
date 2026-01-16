import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/NSL_CLEAR_NO_TEXT.png'

export default function Header(){
  return (
    <header className="header container">
      <div className="logo">
        <img src={logo} alt="NSL" style={{height:48}} onError={(e)=>{e.currentTarget.style.display='none'}} />
        <div>
          <div style={{fontWeight:700}}>NorthStar Express</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Professional Virtual Trucking Company</div>
        </div>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">New Update coming soon</Link>
        <a href="https://discord.gg/QCTpUnHaRa" target="_blank" rel="noreferrer" className="discord-link">
          <img src="/src/assets/Discord.png" alt="discord" style={{height:18,marginRight:8,verticalAlign:'middle'}}/>
          <span style={{verticalAlign:'middle',fontWeight:700}}>Discord</span>
        </a>
      </nav>
    </header>

    // <Link to="/">Events</Link>, 
    // <Link to="/gallery">Gallery</Link>,
    // <Link to="/partnership">New Update coming soon</Link>
  )
}
