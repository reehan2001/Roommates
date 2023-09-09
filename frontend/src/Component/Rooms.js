import React, { useState, useEffect } from 'react';
import RoomCard from './RoomCard.js';
import AddRoomModal from '../Component/AddRoomModal/AddRoomModal.js'
import { getAllRooms } from '../http';


 const rooms = [
    {
        id: 1,
       topic: 'Which framework best for frontend ?',
         speakers: [
          {
                id: 1,
                name: 'Sam joel',
//                 avatar: '/images/monkey-avatar.png',
            },
            {
                id: 2,
                name: 'Jane Doe',
                 avatar: '/images/monkey-avatar.png',
             },
         ],
        totalPeople: 40,
    },
    {         id: 3,
        topic: 'What’s new in machine learning?',
        speakers: [
            {
                id: 1,
                 name: 'Rohith Narayanan',
            avatar: '/img/speakers/rohith.jpeg',
             },
            {
                id: 2,
                name: 'Saran',
//                 avatar: '/images/monkey-avatar.png',
            },
        ],
                 totalPeople: 40,
   },
  {
        id: 4,
       topic: 'Why people use stack overflow?',
       speakers: [
           {
               id: 1,
                 name: 'Reehan',
//                 avatar: '/images/monkey-avatar.png',
            },
//             {
//                 id: 2,
//                 name: 'Jane Doe',
//                 avatar: '/images/monkey-avatar.png',
//             },
        ],
        totalPeople: 40,
     },
    {
        id: 5,
        topic: 'Artificial inteligence is the future?',
        speakers: [
            {
                id: 1,
                 name: 'John Doe',
                 avatar: '/images/monkey-avatar.png',
            },
             {
                 id: 2,
                 name: 'Jane Doe',
                 avatar: '/images/monkey-avatar.png',
            },
        ],
        totalPeople: 40,
     },
     {
        id: 6,
        topic: "Pega Systems",
        speakers: [
            {
                id:1,
                name: 'Prasanth'
            }
        ]
     }
];

const Rooms = () => {
    const [showModal , setShowModal] = useState(false);
    const [rooms , setRooms] = useState([]);
    
    useEffect(() =>{
        const fetchRooms = async() =>{
            const{data} = await getAllRooms();
            setRooms(data);
        };
        fetchRooms();
    },[]);
    function openModal(){
        setShowModal(true);
    }

  return (
    <>
    <div className="container">
                <div className={'Rooms_roomsHeader'}>
                    <div className={'Rooms_left'}>
                        <span className={'Rooms_heading'}>All voice rooms</span>
                        <div className={"Rooms_searchBox"}>
                            <img src="/img/search.png" alt="search" />
                            <input type="text" className={'Rooms_searchInput'} />
                        </div>
                    </div>
                    <div className={'Roomd_right'}>
                        <button
                          onClick={openModal}
                            className={'Rooms_startRoomButton'}
                        >
                            <img
                                src="/img/add-room-icon.png"
                                alt="add-room"
                            />
                            <span>Start a room</span>
                        </button>
                    </div>
                </div>
                <div className={'Rooms_roomList'}>
                  {
                    rooms.map((room) => (
                      <RoomCard key={room.id} room={room} />
                    ))}
                </div>
            </div>

            {showModal && <AddRoomModal onClose={() => setShowModal(false)} />}
        </>
   
  )
}

export default Rooms
    
 


