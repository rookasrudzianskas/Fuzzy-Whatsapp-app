import React, {useEffect, useState} from 'react';
import "./styles/SidebarChat.css";
import {Avatar} from "@material-ui/core";

const SidebarChat = () => {
    // we store the avatar here
    const [seed, setSeed] = useState('');

    useEffect(() => {
        // just generate the random number and store in the state
        // we are making the random number for every user, and then we pass it as the seed to generate the aavatar
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    return (
        <div className="sidebarChat">
            {/* this is the avatar URL to generate it and show it in the icon*/}
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message....</p>
            </div>
        </div>
    );
};

export default SidebarChat;
