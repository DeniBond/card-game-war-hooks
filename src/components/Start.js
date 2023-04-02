import React, {useState} from 'react';

const Start = (props) => {

    const [name, setName] = useState('')

    return (
        <div>
            <h1>Ready to WAR!!!</h1>
            <input type={"text"} placeholder={"Enter your name"}
                   onChange={(e) => {
                       setName(e.target.value)
                   }}/>
            <button onClick={() => {
                props.changePage('game', name)
            }}>START
            </button>
        </div>
    );
};

export default Start;