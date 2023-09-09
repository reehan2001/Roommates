import React, { useState } from 'react';
import Card from '../../Card';
import Button from '../../Button';
import TextInput from './TextInput';
import {sendOtp} from '../../../http/index.js'
import { useDispatch } from 'react-redux';
import { setOtp } from '../../../store/authSlice';


const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    
    async function submit() {
        if(!phoneNumber) return;
        const { data } = await sendOtp({ phone: phoneNumber });
        console.log(data);
        dispatch(setOtp({ phone: data.phone, hash: data.hash }));
        onNext();
    }
    

    
    return (
        <Card title="Enter you phone number" icon="phone">
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                <div className={"Phone_actionButtonWrap"}>
                    <Button text="Next" onClick={submit}  />
                </div>
                <p className={"Phone_bottomParagraph"}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    );
};

export default Phone;