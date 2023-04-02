import React from 'react';

const Result = (props) => {

    const getResult = () =>{
        if (props.compWins>props.playerWins)
            return "YOU LOSE!!!";
        if (props.compWins<props.playerWins)
            return "YOU WIN!!!";
        return "DRAW!";
    }

    return (
        <div>
            <h1>{getResult()}</h1>
            <h2>Computer : {props.compWins}: {props.name}: {props.playerWins}</h2>
            <button
                onClick={() => {
                    props.changePage('game')
                }
                }>Again?
            </button>
        </div>
    );
};

export default Result;