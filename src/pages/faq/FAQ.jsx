import React, { useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
import { Data } from './AdApi'
import AdCard from './AdCard'
import "./add.scss"

const FAQ = () => {

  const [open, setOpen] = useState(false)

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div style={{ color: "#fff", padding: "40px" }}>
          <h1> Approve Ads </h1>
          <div className='approve'>
            {
              Data.map((item) => (
                <AdCard img={item.img} title={item.title}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ