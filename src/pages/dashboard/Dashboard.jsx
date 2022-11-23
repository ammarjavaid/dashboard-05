import React, { useState } from 'react'
import "./dashboard.scss"
import DateRangeIcon from '@mui/icons-material/DateRange';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import EastIcon from '@mui/icons-material/East';
import Acco from '../../layout/Acco';
import Chart from '../../layout/chart/Chart';
import one from "../../images/3.jpg"
import two from "../../images/2.jpg"
import three from "../../images/1.jpg"
import png from "../../images/profile.jpeg"
import Topbar from '../../layout/topbar/Topbar';
import Sidebar from '../../layout/sidebar/Sidebar';

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
          <div className='dashboard__left'>
            <div className='one'>
              <div className='one__content'>
                <h5> Spent this month </h5>
                <h1> $682.5 </h1>
              </div>
              <div className='one__icon'>
                <DateRangeIcon style={{ fontSize: "25px" }} />
              </div>
            </div>
            <div className='two'>
              <div className='two__content'>
                <h5> Earnings </h5>
                <h1> $350.40 </h1>
              </div>
              <div className='two__icon'>
                <SignalCellularAltIcon style={{ fontSize: "25px" }} />
              </div>
            </div>
            <div className='three'>
              <div className='three__content'>
                <h5> New Cients </h5>
                <h1> 321 </h1>
              </div>
              <div className='three__icon'>
                <PeopleIcon style={{ fontSize: "25px" }} />
              </div>
            </div>
            <div className='four'>
              <div className='four__content'>
                <h5> Activity </h5>
                <h1> $540.50 </h1>
              </div>
              <div className='four__icon'>
                <InsightsIcon style={{ fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <div className='dashboard__right'>
            <div className='right__content'>
              <h2> Informations for Drivers </h2>
              <Acco />
            </div>
          </div>
        </div>

        <div className='bottom__dashboard'>
          <div className='bottom__left'>
            <div className='bottom__left__content'>
              <p> This month earnings </p>
              <h2> $682.5 </h2>
              <button> +2.45% </button>
            </div>
            <div className='chart'><Chart /></div>
          </div>
          <div className='bottom__mid'>
            <h2> Your Transfer </h2>
            <div className='bottom__mid__content'>
              <div className='wrapper'>
                <div className='image'>
                  <img src={one} alt='img' />
                </div>
                <div className='userName'>
                  <h3> From Ammar Javaid </h3>
                  <p> Today, 2:30 </p>
                </div>
                <div className='butn'>
                  <p> +$50 </p>
                </div>
              </div>
              <div className='wrapper'>
                <div className='image'>
                  <img src={two} alt='img' />
                </div>
                <div className='userName'>
                  <h3> From Usama Sultan </h3>
                  <p> Today, 7:30 </p>
                </div>
                <div className='butn'>
                  <p> +$150 </p>
                </div>
              </div>
              <div className='wrapper'>
                <div className='image'>
                  <img src={three} alt='img' />
                </div>
                <div className='userName'>
                  <h3> From Hassan Younas </h3>
                  <p> Today, 10:30 </p>
                </div>
                <div className='butn'>
                  <p> +$70 </p>
                </div>
              </div>
              <h2> View All <EastIcon /> </h2>
            </div>
          </div>
          <div className='bottom__right'>
            <div className='bottom__right__content'>
              <img src={png} alt='img' />
              <h1> Ammar Javaid </h1>
              <p> Sargodha, Pak </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                <div>
                  <p style={{ color: "#fff" }}> Days at Work </p>
                  <p style={{ color: "#fff" }}> 28 </p>
                </div>
                <div>
                  <p style={{ color: "#fff" }}> Rides </p>
                  <p style={{ color: "#fff" }}> 427 </p>
                </div>
                <div>
                  <p style={{ color: "#fff" }}> Hours </p>
                  <p style={{ color: "#fff" }}> 76 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard