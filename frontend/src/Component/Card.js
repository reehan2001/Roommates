import React from 'react';



const Card = ({ title, icon, children }) => {
    return (
        <div className="Card_card">
            <div className="Card_headingWrapper">
                <img src={`/img/${icon}.png`} alt="logo" />
                <h1 className="Card_heading">{title}</h1>
            </div>
            {children}
        </div>
    );
};

export default Card;