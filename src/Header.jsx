import React from 'react'
import "./css/header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

const Header = ({photoURL}) => {
  return (
    <div className='header'>
      <div className='header_logo'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="Logo" />
      <span>drive</span>
      </div>
      <div className='header_search'>
        <SearchOutlinedIcon/>
        <input type="text" placeholder='Search in Drive'/>
        <FormatAlignCenterIcon/>
      </div>
      <div className='header_icons'>
        <span>
        <HelpIcon/>
        <SettingsIcon/>
        </span>
        <span>
        <AppsIcon/> 
        <Avatar src={photoURL}/>
        </span>
      </div>
    </div>
  )
}

export default Header
