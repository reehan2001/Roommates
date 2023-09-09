import React, { useState } from 'react';
import TextInput from '../Steps/StepPhoneEmail/TextInput.js';
import styles from '../AddRoomModal/AddRoomModal.module.css';
import {createRoom as create} from '../../http';
import { useHistory } from 'react-router-dom';


const AddRoomModal = ({onClose}) => {
    const history = useHistory()
    const [roomType , setRoomType] = useState('open');
    const [topic , setTopic] = useState('');
    
 async function createRoom(){

    try{

        if(!topic) return;
     const {data} = await create({topic , roomType});
     history.push(`/room/${data.id}`)
     console.log(data)
    }catch(err){
        console.log(err.message);
    }
}
   
  
    return (
        <div className={'RoomModal_modalMask'}>
            <div className={"RoomModal_modalBody"}>
                <button onClick={onClose} className={"RoomModal_closeButton"}>
                    <img src="/img/close.png" alt="close" />
                </button>
                <div className={'RoomModal_modalHeader'}>
                    <h3 className={"RoomModal_heading"}>
                        Enter the topic to be disscussed
                    </h3>
                    <TextInput
                        fullwidth="true"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                    <h2 className={"RoomModal_subHeading"}>Room types</h2>
                    <div className={"RoomModal_roomTypes"}>
                        <div
                            onClick={() => setRoomType('open')}
                            className={`${"RoomModal_typeBox"} ${
                                roomType === 'open' ? styles.active: ''
                            }`}
                        >
                            <img src="/img/globe.png" alt="globe" />
                            <span>Open</span>
                        </div>
                        <div
                            onClick={() => setRoomType('social')}
                            className={`${"RoomModal_typeBox"} ${
                                roomType === 'social' ? styles.active : ''
                            }`}
                        >
                            <img src="/img/social.png" alt="social" />
                            <span>Social</span>
                        </div>
                        <div
                            onClick={() => setRoomType('private')}
                            className={`${"RoomModal_typeBox"} ${
                                roomType === 'private' ? styles.active : ''
                            }`}
                        >
                            <img src="/img/lock.png" alt="lock" />
                            <span>Private</span>
                        </div>
                    </div>
                </div>
                <div className={"RoomModal_modalFooter"}>
                    <h2>Start a room, open to everyone</h2>
                    <button
                         onClick={createRoom}
                        className={"RoomModal_footerButton"}
                    >
                        <img src="/img/celebration.png" alt="celebration" />
                        <span>Let's go</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddRoomModal;