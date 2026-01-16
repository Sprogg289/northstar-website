import React from 'react'

export default function About(){
  return (
    <div>
      <h2>About NorthStar Express</h2>
      <div className="card">
        <p>Founded by passionate truckers, NorthStar Express delivers a realistic and friendly community for virtual truckers across ETS2 and ATS. Our plans are to expand our convoy operations, enhance our training programs, and foster a stronger sense of community within the virtual trucking world.</p>
        <h3>Mission & Values</h3>
        <ul>
          <li>Realism</li>
          <li>Community</li>
          <li>Respect & Safety</li>
          <li>Professionalism</li>
          <li>Continuous Improvement</li>
        </ul>
        <h3>Our Plans</h3>
        <ul>
          <li>Grow as a community</li>
          <li>Host regular convoy events</li>
          <li>Develop partnerships within the virtual trucking industry</li>
          <li>Support new drivers in their journey</li>
        </ul>
        <h3>Supported Games</h3>
        <p>Euro Truck Simulator 2 (ETS2), American Truck Simulator (ATS)</p>
      </div>

      <h3 style={{marginTop:18}}>Management Team</h3>
      <div className="cards">
        <div className="card"><strong>Sprogg28"</strong><div style={{color:'var(--muted)'}}>Founder of NorthStar Express</div></div>
        <div className="card"><strong>N/A"</strong><div style={{color:'var(--muted)'}}>N/A</div></div>
        <div className="card"><strong>N/A"</strong><div style={{color:'var(--muted)'}}>N/A</div></div>
      </div>
    </div>
  )
}
