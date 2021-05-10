import React, {useEffect, useState} from 'react';
import "./styles/Chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from "react-router-dom";
import db from "../firebase";

const Chat = () => {
    // we store the avatar here
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    // to get everything what follows after the /rooms/sffsdfds
    const { roomId } = useParams();

    // to keep the track of the room
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState('');
    // console.log("haha", roomName)
    // console.log(input)

    useEffect(() => {

        // just generate the random number and store in the state
        // we are making the random number for every user, and then we pass it as the seed to generate the aavatar
        // and by using this numbers as the seeds we generate the random avatar for the system
        // the number between 0 and 5000
        setSeed(Math.floor(Math.random() * 5000))
    //    after that we set the seed to that number, and it gets the array of the random generated numbers
    }, [roomId]);

    useEffect(() => {
        //every time the room id changes, we run this useEffect, to get the messages for that room

        if(roomId) {
            // if there is a room id
            // this is going to go to the collection rooms, if there iis room id, to the particular document, which is specified in use params
            // and take all the data from it, now it is going to be just the object with room name
            // and set the roomName to the array with the room name
            // That is it
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name);
            })
            // this does very simple thing, if the roomId exsists, so it goes to the rooms collection
            // to the roomID with the following id from hte url, and in that id to the collection messages
            // orders by the timestamp, asc order
            // and then goes and takes the snapshot of that messages, and what is in here, basically takes that object, and sets it
            // to the SetMessages state,
            // then it maps per all the id's (the documents) in the messages collection, and for each one, returns the object with the data from that id
            // so the messages state fills up with the objects from the Messages colllection
            db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()));
            });
        }

    }, [roomId])

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
                    <h3>{roomName}</h3>
                    <p>Last seen at ....................</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton><SearchOutlined /></IconButton>
                    <IconButton><AttachFile /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </div>

            </div>

            <div className="chat__body">
                {/* we map per messages array of objects, and take each message, and show it on the screen in following order and view*/}
                {messages.map((message) => (
                     // if something is true, so add the chatreceiiver class
                    <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">{message.name}</span>
                        {message.message}
                    <span className="chat__timestamp">
                        {/* this forms a new date, from the each message key the timestamp, and formats it to thhe normal date*/}
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                    </p>

                    ))}
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
