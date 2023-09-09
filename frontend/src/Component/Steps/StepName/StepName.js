import React, { useState } from 'react';
import Card from '../../Card.js';
import Button from '../../Button.js';
import TextInput from '../../Steps/StepPhoneEmail/TextInput.js';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../../store/activateSlice';



const StepName = ({ onNext }) => {
    const { name } = useSelector((state) => state.activate);
    const dispatch = useDispatch();
    const [fullname, setFullname] = useState(name);

    function nextStep() {
        if (!fullname) {
            return;
        }
        dispatch(setName(fullname));
        onNext();
    }
    return (
        <>
            <Card title="What’s your full name?" icon="man">
                <TextInput
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                />
                <p className={"name_paragraph"}>
                    Enter your user name here :) !
                </p>
                <div>
                    <Button onClick={nextStep} text="Next" />
                </div>
            </Card>
        </>
    );
};

export default StepName;