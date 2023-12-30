import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Page from '../header/page'
import About from '../about/about'
import Quality from '../quality/quality'
import Slide from '../slide.jsx/slide'
export default function Layout() {
  return (
    <>
    <nav className="navbar">
      <ul>
      </ul>
    </nav>
      
<Outlet/>
    </>

  )
}
