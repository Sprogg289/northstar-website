import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function EventDetails(){
  const {id} = useParams()
  const [ev,setEv]=useState(null)
  useEffect(()=>{
    axios.get('/api/events/'+id).then(r=>setEv(r.data)).catch(()=>setEv(null))
  },[id])
  if(!ev) return <div className="card">Loading or event not found</div>
  return (
    <div>
      <img src={ev.banner} alt="banner" className="event-banner"/>
      <h2>{ev.name}</h2>
      <p style={{color:'var(--muted)'}}>{ev.description}</p>
      <div className="card">
        <div><strong>Date:</strong> {ev.date}</div>
        <div><strong>Time (UTC):</strong> {ev.time}</div>
        <div><strong>Server:</strong> {ev.server}</div>
        <div><strong>Route:</strong> {ev.route}</div>
        <div><strong>DLC:</strong> {ev.dlc || 'None'}</div>
      </div>
      <div style={{marginTop:12}}>
        <a href="https://discord.gg/QCTpUnHaRa" target="_blank" rel="noreferrer" className="btn btn-accent">Join Discord</a>
        <Link to="/gallery" className="btn btn-outline" style={{marginLeft:8}}>View Event Gallery</Link>
      </div>
    </div>
  )
}
