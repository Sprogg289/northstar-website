import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Events(){
  const [events,setEvents]=useState([])
  useEffect(()=>{
    axios.get('/api/events').then(r=>setEvents(r.data)).catch(()=>{
      setEvents([])
    })
  },[])

  const upcoming = events
    .map(ev => ({...ev, parsedDate: ev.date ? Date.parse(ev.date) : NaN}))
    .filter(ev => !isNaN(ev.parsedDate) ? ev.parsedDate >= Date.now() : true)
    .sort((a,b)=> (a.parsedDate || 0) - (b.parsedDate || 0))
    .slice(0,3)

  return (
    <div>
      <h2>Events</h2>

      <section style={{margin:'18px 0'}}>
        <h3>Upcoming Events</h3>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          {upcoming.length===0 && <div className="card">No upcoming events at this time.</div>}
          {upcoming.map(ev=> (
            <div key={ev.id} className="card" style={{minWidth:220}}>
              {ev.banner && <img src={ev.banner} alt="banner" className="event-banner" />}
              <div style={{paddingTop:8,fontWeight:700}}>{ev.name}</div>
              <div style={{color:'var(--muted)'}}>{ev.date} • {ev.route}</div>
              <div style={{marginTop:8}}>
                <Link to={`/events/${ev.id}`} className="btn btn-outline">Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="grid">
        {events.length===0 && <div className="card">No events available (placeholder data)</div>}
        {events.map(ev=> (
          <div key={ev.id} className="card">
            <img src={ev.banner} alt="banner" className="event-banner"/>
            <h3>{ev.name}</h3>
            <div style={{color:'var(--muted)'}}>{ev.date} • {ev.route}</div>
            <div style={{marginTop:8}}>
              <Link to={`/events/${ev.id}`} className="btn btn-outline">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
