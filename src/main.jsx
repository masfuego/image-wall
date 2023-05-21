import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://omktwlumqkjiiqrbwxxc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ta3R3bHVtcWtqaWlxcmJ3eHhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzOTQ3MDMsImV4cCI6MTk5OTk3MDcwM30.l7A8VmABcf-gmGwPi8wb71jS5elIHjs_u31lqY5hddc')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase} >
    <App />
    </SessionContextProvider>
  </React.StrictMode>,
)
