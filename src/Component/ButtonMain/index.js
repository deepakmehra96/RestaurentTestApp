import React from 'react';
import './index.css'



const Button = (props) => {
    return (
        <div {...props} className="buttonMain">
            <p>
                {props.text}
            </p>
        </div>
    );
}

export default Button
