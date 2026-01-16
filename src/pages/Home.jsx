import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="hero card" style={{backgroundImage:'linear-gradient(90deg, rgba(6,18,36,0.6), rgba(2,8,18,0.6)), url(/src/assets/NorthStar%20%281%29.png)',backgroundSize:'cover',backgroundPosition:'center'}}>
        <div style={{maxWidth:720}}>
          <h1 style={{fontSize:46,margin:0,lineHeight:1.02}}>NorthStar Express</h1>
          <p style={{color:'var(--muted)',marginTop:10, fontSize:16}}>Immersive convoys, structured training and a friendly community for ETS2 & ATS drivers.</p>

          <div className="cta" style={{marginTop:20}}>
            <a href="https://discord.gg/QCTpUnHaRa" target="_blank" rel="noreferrer" className="btn btn-accent" style={{display:'inline-flex',alignItems:'center',gap:10}}>
              <img src="/src/assets/Discord.png" alt="discord" style={{height:18}} />
              <span style={{fontWeight:700}}>Discord</span>
            </a>
            <Link to="/events" className="btn btn-outline">View Events</Link>
            <Link to="/gallery" className="btn btn-outline">Gallery</Link>
          </div>

          <div style={{display:'flex',gap:12,marginTop:22}}>
            <div className="card" style={{minWidth:140,background:'rgba(255,255,255,0.03)'}}>
              <div style={{fontSize:18,fontWeight:700}}>1</div>
              <div style={{color:'var(--muted)',fontSize:12}}>Drivers</div>
            </div>
            <div className="card" style={{minWidth:160,background:'rgba(255,255,255,0.03)'}}>
              <div style={{fontSize:18,fontWeight:700}}>1,347 km</div>
              <div style={{color:'var(--muted)',fontSize:12}}>Total Distance</div>
            </div>
            <div className="card" style={{minWidth:140,background:'rgba(255,255,255,0.03)'}}>
              <div style={{fontSize:18,fontWeight:700}}>0</div>
              <div style={{color:'var(--muted)',fontSize:12}}>Events Hosted</div>
            </div>
          </div>
        </div>

        <div style={{marginLeft:20,display:'flex',alignItems:'center'}}>
          <div className="card" style={{minWidth:320,background:'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))'}}>
            <img src="/src/assets/" alt="event" className="event-banner"/>
            <div style={{padding:12}}>
              <div style={{fontWeight:700}}>N/A</div>
              <div style={{color:'var(--muted)',marginTop:6}}>Sorry we do not have a event at this time.</div>
              <div style={{marginTop:12,display:'flex',gap:8}}>
                <Link to="/events" className="btn btn-accent">Sign up</Link>
                <Link to="/events" className="btn btn-outline">Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{marginTop:28}} className="cards">
        <div className="card">
          <h3>About</h3>
          <p style={{color:'var(--muted)'}}>NorthStar Express crafts immersive convoy experiences and provides training programs for serious virtual truckers or upcoming virtual truckers. If you think you want to behind the scenes of Northstar Express, join our Discord to participate.</p>
        </div>        <div className="card">
          <h3>Recent Highlights</h3>
          <ul style={{color:'var(--muted)',margin:0,paddingLeft:18}}>
            <li>Successfully got the website up and running</li>
            <li>Introduced new drivers to the team</li>
            <li>New photo gallery and planned streams</li>
            <li>Looking for partners who share our vision</li>
          </ul>
        </div>
        <div className="card">
          <h3>Upcoming Event</h3>
          <div>
            <img src="/src/assets/" alt="event" className="event-banner"/>
            <h4 style={{marginTop:10}}>N/A</h4>
            <div style={{color:'var(--muted)'}}>Sorry we do not have a event at this time.</div>
          </div>
        </div>
      </section>
    </div>
  )
}
