import React, { useState } from 'react'
import "./dashboard.scss"
import Topbar from '../../layout/topbar/Topbar';
import Sidebar from '../../layout/sidebar/Sidebar';
import { Data } from './cardApi';
import Card from './Card';
import SearchIcon from '@mui/icons-material/Search';

const Dashboard = () => {

  const [open, setOpen] = useState(false)

  const handle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className='layout-2'>
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='dashboard'>
          <div className='search__bar'>
            <SearchIcon className='rightIcon' />
            <input type="text" placeholder='SEARCH' />
          </div>
          <div className='dashboard__left'>
            {
              Data.map((curElm) => (
                <>
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                  <Card img={curElm.img} three={curElm.three} six={curElm.six} />
                </>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard