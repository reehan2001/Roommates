import React, { useEffect, useState } from 'react';
import Card from '../../Card.js';
import Button from '../../Button.js';
import { useSelector, useDispatch } from 'react-redux';
import { setAvatar } from '../../../store/activateSlice.js';
import { setAuth } from '../../../store/authSlice.js';
import { activate } from '../../../http/index.js';


const StepAvatar = ({ onNext }) => {
    const dispatch = useDispatch();
    const { name, avatar } = useSelector((state) => state.activate);
    const [image, setImage] = useState('/img/avatar.png');
    const [loading , setLoading] = useState(false);
    const [unMounted, setUnMounted] = useState(false);
    function captureImage(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setImage(reader.result);
            dispatch(setAvatar(reader.result));
        };
    }
    async function submit() {
        if(!name || !avatar) return;
        setLoading(true);
        try {
            const { data } = await activate({ name, avatar });

            if (data.auth) {
                if(!unMounted){
                    dispatch(setAuth(data));
                }
            }
            console.log(data);
        } catch (err) {
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() =>{
        return() =>{
            setUnMounted(true)
        }
    })


    if(loading) return <loader message='Activation is progress... '  />
    return (
        <>
            <Card title={`Okay, ${name}`} icon="avatar">
                <p className={"subHeading"}>How’s this photo?</p>
                <div className={"avatarWrapper"}>
                    <img
                        className={"avatarImage"}
                        src={image}
                        alt="avatar"
                    />
                </div>
                <div>
                    <input
                        onChange={captureImage}
                        id="avatarInput"
                        type="file"
                        className={"avatarInput"}
                    />
                    <label className={"avatarLabel"} htmlFor="avatarInput">
                        Choose a different photo
                    </label>
                </div>
                <div>
                    <Button onClick={submit} text="Next" />
                </div>
            </Card>
        </>
    );
};

export default StepAvatar;