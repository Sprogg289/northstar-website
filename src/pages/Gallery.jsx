import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'

export default function Gallery(){
  const EVENT = 'NorthStar Express'
  const [images,setImages]=useState([])
  const [index,setIndex]=useState(0)
  const [Uploading,setUploading]=useState(false)
  const timerRef = useRef(null)

  const fetchImages = ()=>{ axios.get('/api/gallery/event/'+encodeURIComponent(EVENT)).then(r=>setImages(r.data)).catch(()=>setImages([])) }

  useEffect(()=>{ fetchImages() },[])

  useEffect(()=>{
    // autoplay slideshow: advance every 5s
    if(images.length>1){
      timerRef.current = setInterval(()=>{
        setIndex(i=> (i+1) % images.length)
      },5000)
      return ()=>clearInterval(timerRef.current)
    }
    return undefined
  },[images])

  // Drag & drop handlers
  const onDrop = async (e)=>{
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || [])
    if(files.length===0) return
    setUploading(true)
        for(const f of files){
      try{
        const data = await fileToBase64(f)
        // strip data:prefix
        const comma = data.indexOf(',')
        const b64 = comma>=0 ? data.slice(comma+1) : data
        const payload = { event: EVENT, filename: f.name, data: b64 }
        const headers = { 'Content-Type':'application/json' }
        // include upload key from Vite env (VITE_UPLOAD_KEY)
        try{ if(import.meta && import.meta.env && import.meta.env.VITE_UPLOAD_KEY) headers['x-upload-key'] = import.meta.env.VITE_UPLOAD_KEY }catch(e){}
        await fetch('/api/gallery/upload', {method:'POST',headers,body:JSON.stringify(payload)})
        // wait 5s before next upload
        await new Promise(r=>setTimeout(r,5000))
      }catch(err){ console.error('upload err', err) }
    }
    setUploading(false)
    fetchImages()
  }

  const fileToBase64 = (file)=> new Promise((res,rej)=>{
    const r = new FileReader(); r.onload = ()=>res(r.result); r.onerror = rej; r.readAsDataURL(file)
  })

  const onDragOver = (e)=>{ e.preventDefault() }

  return (
    <div>
      <h2>Gallery — {EVENT}</h2>

      <div className="card" onDrop={onDrop} onDragOver={onDragOver} style={{padding:20,marginBottom:12}}>
        <strong>Drop images here to upload to "{EVENT}"</strong>
        <div style={{color:'var(--muted)',marginTop:8}}>{Uploading? 'Uploading...':'Files dropped will be uploaded automatically, 5s between each.'}</div>
      </div>

      <div style={{marginTop:12}} className="gallery-view">
        {images.length>0 ? (
          <div className="card" style={{textAlign:'center'}}>
            <img src={images[index].url} alt={images[index].file} style={{maxWidth:'100%',maxHeight:500}}/>
            <div style={{marginTop:8}}><strong>{images[index].file}</strong></div>
          </div>
        ) : (
          <div className="card">No images for {EVENT}</div>
        )}
      </div>
    </div>
  )
}
