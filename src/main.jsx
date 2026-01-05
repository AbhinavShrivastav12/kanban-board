import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
     <App />
   </div>
  </StrictMode>,
)
