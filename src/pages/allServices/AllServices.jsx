import React, { useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
import "./allservices.scss"
import { ServiceData } from './ServiceApi'
import ServiceCard from './ServiceCard'
import SearchIcon from '@mui/icons-material/Search';

const AllServices = () => {

  const [open, setOpen] = useState(false)

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='search__bar'>
              <SearchIcon className='rightIcon' />
              <input type="text" placeholder='SEARCH' />
          </div>
        <div className='Services' style={{ color: "#fff", padding: "40px" }}>
          {
            ServiceData.map((item) => (
              <ServiceCard img={item.img} title={item.title} desc={item.desc} id={item.id}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AllServices