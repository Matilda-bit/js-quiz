import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// we have React's StrictMode turned on in main JSX.
// Now during development, and only there, 
// this StrictMode will actually execute
// every component function twice,
// which is done to help you catch certain errors in your app.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
