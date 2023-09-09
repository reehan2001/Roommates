import React from 'react';
import { useHistory } from 'react-router-dom';

const RoomCard = ({ room }) => {
    
    return (
        <div
            
            className={'RoomCard_card'}
        >
            <h3 className={'styles.topic'}>{room.topic}</h3>
            <div
                className={`${'RoomCard_speakers'} ${
                    room.speakers.length === 1 ? 'RoomCard_singleSpeaker' : ''
                }`}
            >
                <div className={"RoomCard_avatars"}>
                    {room.speakers.map((speaker) => (
                        <img
                            key={speaker.id}
                            src={speaker.avatar}
                            alt="speaker-avatar"
                        />
                    ))}
                </div>
                <div className={'RoomCard_names'}>
                    {room.speakers.map((speaker) => (
                        <div key={speaker.id} className={'RoomCard_nameWrapper'}>
                            <span>{speaker.name}</span>
                            <img
                                src="/img/chat-bubble.png"
                                alt="chat-bubble"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={'RoomCard_peopleCount'}>
                <span>{room.totalPeople}</span>
                <img src="/img/user-icon.png" alt="user-icon" />
            </div>
        </div>
    );
};

export default RoomCard;