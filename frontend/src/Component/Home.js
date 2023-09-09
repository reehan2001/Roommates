import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import Card from './Card.js';
import Button from './Button.js';

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
    const history = useHistory();
    function startRegister() {
        history.push('/authentication');
    }
    return (
        <div className= "Home_cardWrapper">
            <Card title="Welcome to RemoteDriver!" icon="logo">
                <p className="Home_text">
                    We’re working hard to get RemoteDriver ready for everyone!
                    While we wrap up the finishing youches, we’re adding drivers
                    gradually to make sure nothing breaks
                </p>
                
                <div>
                    <Button onClick={startRegister} text="Lets Go" />
                </div>
                <div className="Home_signinWrapper">
                    <span className="Home_hasInvite">
                        Have an invite text?
                    </span>
                   
                </div>
            </Card>
        </div>
    );
};


export default Home;