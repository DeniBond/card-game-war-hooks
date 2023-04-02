import React, {useEffect, useState} from 'react';

let compDeck = [];
let playerDeck = [];
let compWins = 0;
let playerWins = 0;

const Game = (props) => {

    const [state, setState] = useState({
        compCard: '',
        playerCard: ''
    })

    useEffect(() => {
        let deck = [];
        let suits = ['diamonds', 'spade', 'clubs', 'hearts']
        for (let i = 0; i < suits.length; i++) {
            for (let j = 2; j <= 13; j++) {
                deck.push({
                    range: j,
                    suit: suits[i]
                })
            }
        }
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i + 1);
            let temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        compDeck = deck.slice(0, deck.length / 2);
        playerDeck = deck.slice(deck.length / 2, deck.length
        )}, [])

    const handleClickNext = () => {
        console.log(compDeck)
        if (compDeck.length) {
            let compCard = compDeck.pop();
            let playerCard = playerDeck.pop();
            setState({
                compCard: compCard,
                playerCard: playerCard
            })
            if (compCard.range > playerCard.range) {
                compWins = compWins + 1;
            } else if (compCard.range < playerCard.range) {
                playerWins = playerWins +1;
            }
        } else {
            props.changePage('result', compWins, playerWins)
            compWins=0;
            playerWins=0;
        }
    }

    return (
        <div>
            <h1>Computer</h1>
            <h2>Comp Card: {state.compCard.range}</h2>
            <h2>Player Card: {state.playerCard.range}</h2>
            <h1>{props.name}</h1>
            <button onClick={() =>
                handleClickNext()}>NEXT
            </button>
        </div>
    );
};

export default Game;