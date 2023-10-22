import './page.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import ComponentExample1 from './javascript/ComponentExample1.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot2')
  const root = createRoot(container)
  root.render(<ComponentExample1 />)
})
