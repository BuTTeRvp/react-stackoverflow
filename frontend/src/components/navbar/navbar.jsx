import "./navbar.css"
import React, { useState } from 'react'
import Sidebar from "../sidebar/sidebar"
import Main from "../questions/Main"

export default function Navbar({toggelSidebar}){
  const [sidebar,setSidebar] = useState(false)
  const toggelSideBar = ()=>{
    setSidebar((sidebar)=>!sidebar)
  }

  return(
    <div className={sidebar?'navbar navbar-shift': "navbar"} style={{display: "flex", flexDirection: "column", width: "100%"}}>
      <div style={{display: "flex"}}>
        <div className='burger' onClick={toggelSideBar}>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(169,140,140,1)"/></svg>
        </span>
        </div>
        <div className='title'>VP</div>
      </div>
      <Sidebar sidebar={sidebar}/>
      <Main/>

    </div>
  )
}