import React, {useEffect, useState} from 'react';

const Game = (props) => {

    const [state, setState] = useState({
        compCard: '',
        playerCard: ''
    })

    const data = {
        compDeck: [],
        playerDeck: [],
        compWins: 0,
        playerWins: 0
    }

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
        data.compDeck = deck.slice(0, deck.length / 2)
        data.playerDeck = deck.slice(deck.length / 2, deck.length)
    },[])

    const handleClickNext = () => {
        if (data.compDeck.length) {
            let compCard = data.compDeck.pop();
            let playerCard = data.playerDeck.pop();
            setState({
                compCard: `${compCard.range}, ${compCard.suit}`,
                playerCard: `${playerCard.range}, ${playerCard.suit}`,
            })
            if (compCard.range > playerCard.range) {
                data.compWins++
            } else if (compCard.range < playerCard.range) {
                data.playerWins++
            }
        } else {
            props.changePage('result', data.compWins, data.playerWins)
        }
    }

    return (
        <div>
            <h1>Computer</h1>
            <h2>Comp Card: {state.compCard}</h2>
            <h2>Player Card: {state.playerCard}</h2>
            <h1>{props.name}</h1>

            <button onClick={() =>
                handleClickNext()
            }>NEXT
            </button>
        </div>
    );
};

export default Game;