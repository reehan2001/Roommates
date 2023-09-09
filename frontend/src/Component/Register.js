import React, { useState } from 'react';
import StepPhoneEmail from './Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Component/Steps/SetOtp/SetOtp.js';
import StepName from '../Component/Steps/StepName/StepName.js';
import StepAvatar from '../Component/Steps/StepAvatar/StepAvatar.js';
import StepUsername from '../Component/Steps/StepUsername/StepUsername.js';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername,
};

const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return (
        <div>
            <Step onNext={onNext} />
        </div>
    );
};

export default Register;