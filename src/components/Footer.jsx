import React, {useEffect, useState} from 'react'

export default function Footer(){
  const STORAGE_KEY = 'nsl_accent'
  const [color, setColor] = useState('')

  useEffect(()=>{
    try{
      // Revert to default on mount and clear any saved custom color
      const def = '#2f7bdc'
      try{ localStorage.removeItem(STORAGE_KEY) }catch(e){}
      document.documentElement.style.setProperty('--accent', def)
      setColor(def)
    }catch(e){}
  },[])

  const apply = (val)=>{
    if(!val) return
    document.documentElement.style.setProperty('--accent', val)
    try{ localStorage.setItem(STORAGE_KEY, val) }catch(e){}
    setColor(val)
  }

  const reset = ()=>{
    const def = '#2f7bdc'
    document.documentElement.style.setProperty('--accent', def)
    try{ localStorage.removeItem(STORAGE_KEY) }catch(e){}
    setColor(def)
  }

  return (
    <footer className="footer container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <a href="https://discord.gg/QCTpUnHaRa" className="btn btn-outline" target="_blank" rel="noreferrer">Discord</a>
        <a href="https://truckersmp.com" target="_blank" rel="noreferrer" className="btn btn-outline">TruckersMP</a>
      </div>

      {/* Theme color controls removed per request */}

      <div style={{color:'var(--muted)'}}>&copy; {new Date().getFullYear()} NorthStar Express</div>
    </footer>
  )
}
