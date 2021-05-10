import React, {useEffect, useState} from 'react';
import "./styles/Chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from "react-router-dom";

const Chat = () => {
    // we store the avatar here
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    // to get everything what follows after the /rooms/sffsdfds
    const { roomId } = useParams();

    // to keep the track of the room
    const [roomName, setRoomName] = useState('');

    // console.log(input)

    useEffect(() => {

        // just generate the random number and store in the state
        // we are making the random number for every user, and then we pass it as the seed to generate the aavatar
        // and by using this numbers as the seeds we generate the random avatar for the system
        // the number between 0 and 5000
        setSeed(Math.floor(Math.random() * 5000))
    //    after that we set the seed to that number, and it gets the array of the random generated numbers
    }, []);
    // send message function
    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed', input)
        setInput('');
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ....................</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton><SearchOutlined /></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </div>

            </div>

            <div className="chat__body">
                {/* if something is true, so add the chatreceiiver class*/}
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">Rookas Rudzianskas</span>
                    Hey guys
                    <span className="chat__timestamp">3.45PM</span>
                </p>


            </div>

            <div className="chat__footer">

                <InsertEmoticon />
                {/* we want to have the enter functionality*/}
                <form action="">
                    {/* we got and then somebody types something, we set the value to the state with setInput and the value of the */}
                    {/* input becomes the input in the state, so the array*/}
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message 🚀"/>
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />

            </div>
        </div>
    );
};

export default Chat;
