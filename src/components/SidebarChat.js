import React, {useEffect, useState} from 'react';
import "./styles/SidebarChat.css";
import {Avatar} from "@material-ui/core";

const SidebarChat = ({ addNewChat, id, name }) => {
    // we store the avatar here
    const [seed, setSeed] = useState('');

    useEffect(() => {
        // just generate the random number and store in the state
        // we are making the random number for every user, and then we pass it as the seed to generate the aavatar
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    //if we go to the addNewChat statement this shows the pop up to say the chat name
    const createChat = () => {
        // prompt to enter the chat name!
        const roomName = prompt("Please enter name for chat");
        // if we have the chat name, so we do some clever stuff there
        if (roomName) {
            // do some important things here!
        }
    };
    // so if we pass the addNewChat prop to the component we go redirected and render the second statement
    // which is createChat function and AddnewChat label
    // if we do not pass the add newChat prop, it goes smooth, as It should with avatars and son on
    return !addNewChat ? (
        // if we do not have addNewChat
        <div className="sidebarChat">
            {/* this is the avatar URL to generate it and show it in the icon*/}
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message....</p>
            </div>
        </div>
    ) : (
        // if we have the addNewChat prop, so this renders
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
};

export default SidebarChat;
