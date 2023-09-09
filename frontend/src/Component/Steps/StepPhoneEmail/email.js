
import React, { useState } from 'react';
import Card from '../../Card';
import TextInput from './TextInput';
import Button from '../../Button';


const Email = ({ onNext }) => {
    const [email, setEmail] = useState('');
    return (
        <Card title="Enter your email id" icon="email">
            <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div>
                <div className={"Email_actionButtonWrap"}>
                    <Button text="Next" onClick={onNext} />
                </div>
                <p className={"Email_bottomParagraph"}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    );
};

export default Email;