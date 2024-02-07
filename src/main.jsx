import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Screens/Home/Home.jsx'
import Layout from './components/layout/layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>,
)
