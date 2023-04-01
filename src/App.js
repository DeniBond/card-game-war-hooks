import React, {useState} from 'react';
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";


const App = () => {

    const [activePage, setPage] = useState('start');
    const [name, setName] = useState('Player');
    const [compWins, setCompWins] = useState('1');
    const [playerWins, setPlayerWins] = useState('2');

    const changeActivePage = (page, ...args) => {
        switch (args.length) {
            case 0: {
                setPage(page)
            }
                break;
            case 1: {
                setPage(page);
                setName(args[0] || name)
            }
                break;
            case 2: {
                setPage(page);
                setCompWins(args[0]);
                setPlayerWins(args[1]);
            }
        }
    }

    const switchPage= ()=>{
        switch (activePage) {
            case 'game' :
                return (<Game changePage={changeActivePage} name={name}/>)
            case 'result' :
                return (<Result changePage={changeActivePage} compWins={compWins}
                                playerWins={playerWins} name={name}/>)
            default :
                return (<Start changePage={changeActivePage}/>)
        }
    }

    return (
        <div>{switchPage()}</div>
    )

};

export default App;