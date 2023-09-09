import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="Button_button">
            <span>{text}</span>
            <img
                className="Button_arrow"
                src= '/img/arrow-forward.png'
                alt="arrow"
            />
        </button>
    );
};
export default Button;