import React from 'react'

export default function Join(){
  return (
    <div>
      <h2>Join</h2>
      <div className="card">
        <h3>Requirements</h3>
        <ul>
          <li>18+ hours driving experience</li>
          <li>Trucker's respectful conduct</li>
          <li>Active Discord account</li>
        </ul>
        <h3>Benefits</h3>
        <ul>
          <li>Regular events</li>
          <li>Mentoring</li>
          <li>Ranking system</li>
        </ul>
        <h3>Application</h3>
        <form action="https://discord.gg/QCTpUnHaRa" target="_blank">
          <label>Steam profile link</label>
          <input style={{width:'100%',padding:8,marginTop:8}} placeholder="https://steamcommunity.com/id/..."/>
          <label style={{marginTop:8}}>Discord username</label>
          <input style={{width:'100%',padding:8,marginTop:8}} placeholder="Name#1234"/>
          <label style={{marginTop:8}}>Experience</label>
          <textarea style={{width:'100%',padding:8,marginTop:8}} placeholder="Tell us about your experience"/>
          <div style={{marginTop:10}}>
            <button className="btn btn-accent" type="submit" style={{display:'inline-flex',alignItems:'center',gap:8}}>
              <img src="/src/assets/discord.svg" alt="discord" style={{height:18}} />
              <span style={{fontWeight:700}}>DISCORD</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
