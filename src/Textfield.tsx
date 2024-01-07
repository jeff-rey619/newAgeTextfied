import React, { useState } from 'react';
import './textfield.css';

function TextfieldComp(props: { width: string }) {
    const [inputValue, setInputValue] = useState('');
 

  

    return (
        <div className="textfield">
            <input
                className="Christmas-Input-box"
                style={{ width: `${props.width}%` }}
              
            />
            
        </div>
    );
}

export default TextfieldComp;
