import React, {useState} from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import "./Header.css";
import logoimage from "./Images/logo.png";
import jojo from "./Images/jojo.png";


function Header() {

    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            
            <div className="header_left">
                <MenuIcon />
               
                    <Link to="/">
                        <img 
                            src={logoimage} 
                            className="headerLogoImage" 
                            alt="" 
                        />
                    </Link>
                
            </div>

            <div className="header_input">
                <input 
                    onChange={(e) => setInputSearch(e.target.value)} 
                    placeholder="Search" 
                    value={inputSearch} 
                    type="text" 
                />
              
                    <Link to={'/search/${inputSearch}'}>
                        <SearchIcon className="header_Inputbutton" />
                    </Link>
               
            </div>

            <div className="header_Icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar alt="jojo joseph" src={jojo} />
            </div>
            
        </div>
    )
}

export default Header
