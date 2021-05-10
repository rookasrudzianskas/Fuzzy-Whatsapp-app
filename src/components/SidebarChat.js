import React, {useEffect, useState} from 'react';
import "./styles/SidebarChat.css";
import {Avatar} from "@material-ui/core";
import db from "../firebase";
import {Link} from "react-router-dom";

const SidebarChat = ({ addNewChat, id, name }) => {
    // we store the avatar here
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');

    useEffect(() => {
        // if there is an id, so we go further
        if(id) {
            // we go to the rooms, and by the id, to the collection messages
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => (
                // we and take the messages, by the needed id, and store in the messages array of object
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ))
        }
    }, [id])

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
            // we add it to the firebase
            db.collection("rooms").add({
                // add name with id, and the name is the roomNem
                name: roomName,
            });
        }
    };
    // so if we pass the addNewChat prop to the component we go redirected and render the second statement
    // which is createChat function and AddnewChat label
    // if we do not pass the add newChat prop, it goes smooth, as It should with avatars and son on
    return !addNewChat ? (
        // this is going to send the whole room to the room id from the props
        <Link to={`/rooms/${id}`}>
            {/*// if we do not have addNewChat*/}
            <div className="sidebarChat">
                {/* this is the avatar URL to generate it and show it in the icon*/}
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    {/* this is the most recent one*/}
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        // if we have the addNewChat prop, so this renders
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
};

export default SidebarChat;
