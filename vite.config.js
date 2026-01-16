import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import fs from 'fs'

// Dev middleware to serve mock APIs and gallery from local photos folder.
function devApiMiddleware() {
  return {
    name: 'dev-api-middleware',
    configureServer(server) {
      const photosDir = join(process.cwd(), 'photos')
      const uploadKey = process.env.UPLOAD_KEY || 'local-secret'
      console.log('[vite dev-api] uploadKey set:', uploadKey ? 'yes' : 'no')
      server.middlewares.use(async (req, res, next) => {
        try{
          // Serve static photos under /photos/* from workspace photos folder
          if(req.url && req.url.startsWith('/photos/')){
            const p = decodeURIComponent(req.url.replace('/photos/',''))
            const filePath = join(photosDir, p)
            if(fs.existsSync(filePath) && fs.statSync(filePath).isFile()){
              const ext = filePath.split('.').pop().toLowerCase()
              const map = {jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',gif:'image/gif',webp:'image/webp',svg:'image/svg+xml'}
              res.setHeader('Content-Type', map[ext] || 'application/octet-stream')
              const stream = fs.createReadStream(filePath)
              return stream.pipe(res)
            }
            res.statusCode = 404; return res.end('Not found')
          }
          if(req.url && req.url.startsWith('/api/gallery/events')){
            if(!fs.existsSync(photosDir)) return res.end('[]')
            const names = fs.readdirSync(photosDir)
            const dirs = names.filter(n=>{
              try{ return fs.statSync(join(photosDir,n)).isDirectory() }catch(e){return false}
            })
            res.setHeader('Content-Type','application/json')
            return res.end(JSON.stringify(dirs.map(d=>({id:d,name:d}))))
          }
          if(req.url && req.url.startsWith('/api/gallery/event/')){
            const id = decodeURIComponent(req.url.replace('/api/gallery/event/','').split('?')[0])
            const folder = join(photosDir,id)
            if(!fs.existsSync(folder)) return res.end('[]')
            const all = fs.readdirSync(folder).filter(f=>/\.(jpe?g|png|gif|webp|svg)$/i.test(f))
            const items = all.map(f=>({file:f,url:`/photos/${encodeURIComponent(id)}/${encodeURIComponent(f)}`,event:id,photographer:''}))
            res.setHeader('Content-Type','application/json')
            return res.end(JSON.stringify(items))
          }
          // Upload endpoint: accept JSON { event, filename, data } where data is base64
          if(req.url && req.url.startsWith('/api/gallery/upload') && req.method==='POST'){
            // simple auth: require matching x-upload-key header
            const provided = (req.headers['x-upload-key'] || req.headers['X-Upload-Key'] || req.headers['x_upload_key'])
            if(!provided || provided !== uploadKey){ res.statusCode = 403; return res.end(JSON.stringify({ok:false,error:'forbidden'})) }
            let body=''
            for await (const chunk of req) body += chunk
            try{
              const obj = JSON.parse(body)
              const event = obj.event || 'Alpine Run'
              const filename = obj.filename || ('upload-'+Date.now())
              const data = obj.data || ''
              const b = Buffer.from(data, 'base64')
              const folder = join(photosDir, event)
              if(!fs.existsSync(folder)) fs.mkdirSync(folder, {recursive:true})
              const dest = join(folder, filename)
              fs.writeFileSync(dest, b)
              res.setHeader('Content-Type','application/json')
              return res.end(JSON.stringify({ok:true,file:`/photos/${encodeURIComponent(event)}/${encodeURIComponent(filename)}`}))
            }catch(e){ res.statusCode=500; return res.end(JSON.stringify({ok:false,error:e.message})) }
          }
          // Mock drivers and events for dev if backend isn't running
          if(req.url && req.url === '/api/drivers'){
            res.setHeader('Content-Type','application/json')
            return res.end(JSON.stringify([{id:'d1',name:'Alice'},{id:'d2',name:'Bob'}]))
          }
          if(req.url && req.url === '/api/events'){
            res.setHeader('Content-Type','application/json')
            return res.end(JSON.stringify([{id:'e1',title:'Alpine Run'},{id:'e2',title:'Northern Convoy'}]))
          }
        }catch(err){
          // fallthrough to next middleware
        }
        return next()
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), devApiMiddleware()],
  server: { port: 5173 }
})
