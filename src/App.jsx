import {Routes, Route} from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'
import Mvsd from './components/Mvsd'
import Vendors from './components/Vendors'
import Application from './components/Application'
import Sponsors from './components/Sponsors'
import Volunteers from './components/Volunteers'
import Schedule from './components/Schedule'
import Entertainment from './components/Entertainment'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element = {<Home />}></Route>
          <Route path = '/info' element = {<Info />}></Route>
          <Route path = '/mvsd' element = {<Mvsd />}></Route>
          <Route path = '/vendors' element = {<Vendors />}></Route>
          <Route path = '/vendor-app' element = {<Application />}></Route>
          <Route path = '/sponsors' element = {<Sponsors />}></Route>
          <Route path = '/volunteers' element = {<Volunteers />}></Route>
          <Route path = '/schedule' element = {<Schedule />}></Route>
          <Route path = '/entertainment' element = {<Entertainment />}></Route>
        </Route>
      </Routes>
    </>
  )
}


export default App

