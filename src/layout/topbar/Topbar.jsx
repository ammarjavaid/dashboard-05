import React from 'react'
import "./topbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

const Topbar = ({open, setOpen, handle}) => {
    return (
        <>
            <div className='topbar'>
                <div className="topbar__content">
                    <div className='left'>
                        <div>
                        <h5> Hi Ammar, </h5>
                        <h4> Welcome to <span>MY TAXI DASHBOARD</span> </h4>
                        </div>
                        {open ? <FormatAlignRightIcon className='bars' onClick={handle}/> : <FormatAlignJustifyIcon className='bars' onClick={handle}/>}
                    </div>
                    <div className='right'>
                        <SearchIcon className='rightIcon'/>
                        <input type="text" placeholder='SEARCH' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar