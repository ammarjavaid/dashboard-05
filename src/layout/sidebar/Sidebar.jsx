import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const Sidebar = ({open, setOpen, handle}) => {

const navigate = useNavigate();

const logout = ()=>{

    const auth = getAuth();
    signOut(auth).then(() => {
        navigate("/")
    }).catch((error) => {
        alert(error);
    });

}

  return (
    <>
        <div className={`sidebar ${open ? "openSidebar" : ""}`}>
            <div className='sidebarTop'>
                <span><DriveEtaIcon className='headIcon'/></span><h2> MY TAXI </h2>
            </div>
            <div className='sidebarBottom'>
                <ul>
                    <Link className='link' to="/home" onClick={handle}><li> <DashboardIcon style={{fontSize: "17px"}}/> <span> Dashboard </span>  </li></Link>
                    <Link className='link' to="/riders" onClick={handle}><li> <LocalTaxiIcon style={{fontSize: "17px"}}/> <span> Riders </span>  </li></Link>
                    <Link className='link' to="/payment" onClick={handle}><li> <LocalAtmIcon style={{fontSize: "17px"}}/> <span> Payment Details </span>  </li></Link>
                    <Link className='link' to="/learning" onClick={handle}><li> <LightbulbIcon style={{fontSize: "17px"}}/> <span> Learning Center </span>  </li></Link>
                    <Link className='link' to="/faq" onClick={handle}><li> <LiveHelpIcon style={{fontSize: "17px"}}/> <span> FAQ's </span>  </li></Link>
                    <Link className='link' to="/settings" onClick={handle}><li> <SettingsIcon style={{fontSize: "17px"}}/> <span> Settings </span>  </li></Link>
                </ul>
            </div>
            <div className='logout'>
                <div onClick={logout}>
                <LogoutIcon style={{fontSize: "17px"}}/><span> Logout </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar