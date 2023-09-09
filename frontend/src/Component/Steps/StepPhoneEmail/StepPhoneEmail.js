import React, { useState } from 'react';
import Phone from './phone';
import Email from './email';
import styles from '../StepPhoneEmail/PhoneEmail.module.css';






const phoneEmailMap = {
    phone: Phone,
    email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type];

    return (
        <>
            <div className={"PhoneEmail_cardWrapper"}>
                <div>
                    <div className={"PhoneEmail_buttonWrap"}>
                        <button
                            className={`${"PhoneEmail_tabButton"} ${
                                type === 'phone' ? styles.active : ''
                            }`}
                            onClick={() => setType('phone')}
                        >
                            <img src='/img/mobile.png' alt="phone" />
                        </button>
                        <button
                            className={`${"PhoneEmail_tabButton"} ${
                                type === 'email' ? styles.active : ''
                            }`}
                            onClick={() => setType('email')}
                        >
                            <img src= '/img/email.png' alt="email" />
                        </button>
                    </div>
                    <Component onNext={onNext} />
                </div>
            </div>
        </>
    );
};

export default StepPhoneEmail;