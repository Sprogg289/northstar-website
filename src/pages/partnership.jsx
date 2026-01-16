import React from 'react'

// Partnerships (static)
// Edit the `partners` array below to add or update partnership cards.
// Images should be referenced by Vite-served paths (for example:
// '/src/pages/partnership/NSL_CLEAR_NO_TEXT.png'). If you add files
// to that folder, restart the dev server if they don't appear.

const partners = [
   {
    id: 'Flc',
    name: 'FluxLine Cargo',
    desc: 'Fluxline Cargo is a virtual trucking company focused on delivering quality service and fostering a strong community of truckers.',
    img: '/src/pages/partnership/FL Partner.png'
  },

  {
    id: 'apcl',
    name: 'Apex color logistics',
    desc: 'Apex color logistics is a virtual trucking company focused on delivering quality service and fostering a strong community of truckers.',
    img: '/src/pages/partnership/apcl.png'
  }
  // Example partner:
  // {
  //   id: 'nsl',
  //   name: 'NorthStar Logistics',
  //   desc: 'Official community partner',
  //   img: '/src/pages/partnership/NSL_CLEAR_NO_TEXT.png'
  // }
]

export default function Partnership(){
  return (
    <div>
      <h2>Partnerships</h2>
      <p style={{color:'var(--muted)'}}>NorthStar Express is proud to partner with companies and organisations. If you are interested in becoming a partner, please reach out to us on Discord.</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:12}}>
        {partners.length === 0 && (
          <div className="card">No partnerships defined. Edit this file and add entries to the `partners` array.</div>
        )}

        {partners.map(p => (
          <div key={p.id || p.img} className="card">
            <div style={{height:120,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',borderRadius:8,background:'rgba(255,255,255,0.02)'}}>
              {p.img ? <img src={p.img} alt={p.name} style={{maxHeight:'100%',maxWidth:'100%'}}/> : <div style={{color:'var(--muted)'}}>No image</div>}
            </div>
            <div style={{marginTop:10}}>
              <div style={{fontWeight:700}}>{p.name}</div>
              <div style={{color:'var(--muted)',marginTop:6}}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

