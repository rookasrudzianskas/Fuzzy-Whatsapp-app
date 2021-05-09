import React from 'react';
import "./styles/Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import SearchIcon from '@material-ui/icons/Search';
import {SearchOutlined} from "@material-ui/icons";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />

                <div className="sidebar__headerRight">
                    <IconButton><DonutLargeIcon /></IconButton>
                    <IconButton><ChatIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                        <input type="text" placeholder="Search or start a new chat"/>
                    </div>
            </div>

            <div className="sidebar__chats">

            </div>
        </div>
    );
};

export default Sidebar;
