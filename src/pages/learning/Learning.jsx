import React, { useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'

const Learning = () => {

  const [open, setOpen] = useState(false)

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='learning' style={{ color: "#fff", padding: "40px" }}>
          <h1> Learning </h1>
        </div>
      </div>
    </>
  )
}

export default Learning