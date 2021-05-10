import React, {useEffect, useState} from 'react';
import "./styles/Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import SearchIcon from '@material-ui/icons/Search';
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "../firebase";
import {useStateValue} from "../StateProvider";

const Sidebar = () => {

    const [rooms, setRooms] = useState();
    const [{user}, dispatch] = useStateValue();

    console.log(rooms)

    useEffect(() => {
    //     we run just once to attach the firebase listener
    //    we go to the collection rooms, and take the picture of the snapshot, take the all data of rooms
    //    and also on all changes take the snapshot and update the data, it is all the data which is inside
       const unsubscribe = db.collection("rooms").onSnapshot(snapshot => (
            // so this sets the ROom state, to the docs object, with the id and the name as the array of the objects
            // so it goes per all the id's and takes the objects, in this case, it has just the id and the name
            // and adds the objects to the state of rooms
            setRooms(snapshot.docs.map(doc =>
                ({
                    // this reffers to the id in the room id, in the middle one
                    id: doc.id,
                    // this is in the id all the data, in tis case just the name
                    data: doc.data(),
                })
            ))
        ));
       // we always detach the listener, then we finished using it, and then attach the new one, to make the performance better,
        // to not to keep the old one
       return () => {
           unsubscribe();
       }
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                {/* if there is no photo, go on do not freak out, ? this means that*/}
                <Avatar src={user?.photoURL} />

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
                <SidebarChat addNewChat/>
                {/* this goes per each object in the rooms array of objects, and outputs it as the components to the Sidebar Chat, which forms*/}
                {/* the message*/}
                {rooms?.map(room => (
                    // the key for performance, id and the name in the objext by that id, and the name, we have added
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
