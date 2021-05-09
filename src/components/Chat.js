import React, {useEffect, useState} from 'react';
import "./styles/Chat.css";
import {Avatar} from "@material-ui/core";

const Chat = () => {
    // we store the avatar here
    const [seed, setSeed] = useState('');

    useEffect(() => {

        // just generate the random number and store in the state
        // we are making the random number for every user, and then we pass it as the seed to generate the aavatar
        // and by using this numbers as the seeds we generate the random avatar for the system
        // the number between 0 and 5000
        setSeed(Math.floor(Math.random() * 5000))
    //    after that we set the seed to that number, and it gets the array of the random generated numbers
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            </div>

            <div className="chat__body">

            </div>

            <div className="chat__footer">

            </div>
        </div>
    );
};

export default Chat;
