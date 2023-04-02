import React, {useEffect, useState} from 'react';

const Game = (props) => {

    const [state, setState] = useState({
        compCard: '',
        playerCard: '',
        compDeck: [],
        playerDeck: [],
        compWins: 0,
        playerWins: 0
    })

    // const data = {
    //     compDeck: [],
    //     playerDeck: [],
    //     compWins: 0,
    //     playerWins: 0
    // }

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
        setState({...state,
            compDeck: deck.slice(0, deck.length / 2),
            playerDeck: deck.slice(deck.length / 2, deck.length)})
    },[])

    const handleClickNext = () => {
        if (state.compDeck.length) {
            let compCard = state.compDeck.pop();
            let playerCard = state.playerDeck.pop();
            if (compCard.range > playerCard.range) {
                setState({...state,
                    compWins: state.compWins+1,
                    playerCard: playerCard,
                    compCard: compCard})
            } else if (compCard.range < playerCard.range) {
                setState({...state,
                    playerWins: state.playerWins+1,
                    playerCard: playerCard,
                    compCard: compCard})
            }
        } else {
            props.changePage('result', state.compWins, state.playerWins)
        }
    }

    return (
        <div>
            <h1>Computer</h1>
            <h2>Comp Card: {state.compCard.range}</h2>
            <h2>Player Card: {state.playerCard.range}</h2>
            <h1>{props.name}</h1>

            <button onClick={() =>
                handleClickNext()
            }>NEXT
            </button>
        </div>
    );
};

export default Game;