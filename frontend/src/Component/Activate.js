import React, { useState } from 'react';
import StepName from '../Component/Steps/StepName/StepName.js';
import StepAvatar from '../Component/Steps/StepAvatar/StepAvatar.js';

const steps = {
    1: StepName,
    2: StepAvatar,
};

const Activate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }
    return (
        <div className="Activate_cardWrapper">
            <Step onNext={onNext}></Step>
        </div>
    );
};

export default Activate;