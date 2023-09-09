import React, { useState } from 'react';
import Card from '../../Card.js';
import TextInput from '../StepPhoneEmail/TextInput.js';
import Button from '../../Button.js';
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../store/authSlice.js';




const StepOtp = () => {
    const [otp, setOtp] = useState('');
    const { phone, hash } = useSelector((state) => state.auth.otp);
    const dispatch = useDispatch();
    async function submit() {
        if(!otp || !phone || !hash) return;
        try {
            const { data } = await verifyOtp({ otp, phone, hash });
            dispatch(setAuth(data));
        } catch (err) {
            console.log(err);
        }
    }
  
    return (
        <>
            <div className={'Otp_cardWrapper'}>
                <Card
                    title="Enter the code we just texted you"
                    icon="lock"
                >
                     <TextInput
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                   
                    <div className={'Otp_actionButtonWrap'}>
                    <Button onClick={submit} text="Next" />
                    </div>
                    <p className={'Otp_bottomParagraph'}>
                        By entering your number, you’re agreeing to our Terms of
                        Service and Privacy Policy. Thanks!
                    </p>
                </Card>
            </div>
        </>
    );
};

export default StepOtp;