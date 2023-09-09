import React from 'react';


const TextInput = (props) => {
    return (
        <div>
            <input className={"Text_input"} 
            style={{
                width: props.fullwidth =='true' ? '100%' : 'inherit',
            }}
                type="text" 
                {...props} />
        </div>
    );
};

export default TextInput;