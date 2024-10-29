import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom"
import enigmatic from './assets/images/enigmatic.png'
import ricecake from './assets/images/ricecake.png'
import yots from './assets/images/yots.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)




