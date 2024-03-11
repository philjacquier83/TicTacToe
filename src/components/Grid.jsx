import { useEffect, useState } from 'react'
import '../sass/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCloud } from '@fortawesome/free-solid-svg-icons'

function Grid() {

    const winningCombo1 = [1,2,3]
    const winningCombo2 = [4,5,6]
    const winningCombo3 = [7,8,9]
    const winningCombo4 = [1,4,7]
    const winningCombo5 = [2,5,8]
    const winningCombo6 = [3,6,9]
    const winningCombo7 = [1,5,9]
    const winningCombo8 = [3,5,7]
    
    const [ attempts, setAttempts ] = useState(0)
    const [ caseChoices, setCaseChoices ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [ howPlays, setHowPlays ] = useState(true) // true = user joue, false = computer joue
    const [ selectedCase, setSelectedCase ] = useState([])
    const [ yourSelectedCase, setYourSelectedCase ] = useState([])
    const [ comSelectedCase, setComSelectedCase ] = useState([])
    const [ winningCases, setWinningCases ] = useState([])
    const [ games, setGames ] = useState(1)
    const [ score1, setScore1 ] = useState(0)
    const [ score2, setScore2 ] = useState(0)

    const [ winner, setWinner ] = useState(1)

    const handleCase = (numCase) => {
        setSelectedCase(prev => [...prev, numCase])
        setYourSelectedCase(prevYou => [...prevYou, numCase])
        setCaseChoices(caseChoices.filter(item => item !== numCase))
        setAttempts(prevAtt => prevAtt + 1)
        if(attempts !== 8) {
            setHowPlays(!howPlays)
        }
    }

    useEffect(() => {
        if(winner === 1 && !howPlays) {
        setTimeout(() => {
            console.log(winner)
            
                setSelectedCase(prev => [...prev, comChoice])
                setComSelectedCase(prevCom => [...prevCom, comChoice])
                setCaseChoices(caseChoices.filter(item => item !== comChoice))
                setHowPlays(!howPlays)
                setAttempts(prevAtt => prevAtt + 1)
            
            }, 2000)
        }
    }, [howPlays])

    if(winner === 1) {
        if(winningCombo1.every(value => yourSelectedCase.includes(value)) ||
            winningCombo2.every(value => yourSelectedCase.includes(value)) ||
            winningCombo3.every(value => yourSelectedCase.includes(value)) ||
            winningCombo4.every(value => yourSelectedCase.includes(value)) ||
            winningCombo5.every(value => yourSelectedCase.includes(value)) ||
            winningCombo6.every(value => yourSelectedCase.includes(value)) ||
            winningCombo7.every(value => yourSelectedCase.includes(value)) ||
            winningCombo8.every(value => yourSelectedCase.includes(value))) {
            setWinner(2)
            if([1,2,3].every(element => yourSelectedCase.includes(element))) { setWinningCases([1,2,3]) }
            else if([4,5,6].every(element => yourSelectedCase.includes(element))) { setWinningCases([4,5,6]) }
            else if([7,8,9].every(element => yourSelectedCase.includes(element))) { setWinningCases([7,8,9]) }
            else if([1,4,7].every(element => yourSelectedCase.includes(element))) { setWinningCases([1,4,7]) }
            else if([2,5,8].every(element => yourSelectedCase.includes(element))) { setWinningCases([2,5,8]) }
            else if([3,6,9].every(element => yourSelectedCase.includes(element))) { setWinningCases([3,6,9]) }
            else if([1,5,9].every(element => yourSelectedCase.includes(element))) { setWinningCases([1,5,9]) }
            else if([3,5,7].every(element => yourSelectedCase.includes(element))) { setWinningCases([3,5,7]) }
            setScore1(prev => prev + 1)
        } else if(winningCombo1.every(value => comSelectedCase.includes(value)) ||
            winningCombo2.every(value => comSelectedCase.includes(value)) ||
            winningCombo3.every(value => comSelectedCase.includes(value)) ||
            winningCombo4.every(value => comSelectedCase.includes(value)) ||
            winningCombo5.every(value => comSelectedCase.includes(value)) ||
            winningCombo6.every(value => comSelectedCase.includes(value)) ||
            winningCombo7.every(value => comSelectedCase.includes(value)) ||
            winningCombo8.every(value => comSelectedCase.includes(value))) {
            setWinner(3)
            if([1,2,3].every(element => comSelectedCase.includes(element))) { setWinningCases([1,2,3]) }
            else if([4,5,6].every(element => comSelectedCase.includes(element))) { setWinningCases([4,5,6]) }
            else if([7,8,9].every(element => comSelectedCase.includes(element))) { setWinningCases([7,8,9]) }
            else if([1,4,7].every(element => comSelectedCase.includes(element))) { setWinningCases([1,4,7]) }
            else if([2,5,8].every(element => comSelectedCase.includes(element))) { setWinningCases([2,5,8]) }
            else if([3,6,9].every(element => comSelectedCase.includes(element))) { setWinningCases([3,6,9]) }
            else if([1,5,9].every(element => comSelectedCase.includes(element))) { setWinningCases([1,5,9]) }
            else if([3,5,7].every(element => comSelectedCase.includes(element))) { setWinningCases([3,5,7]) }
            setScore2(prev => prev + 1)
        } else {
            if(attempts === 9) {
                setWinner(4)
            }
        }
    }   

    let comChoice;
    
    if(([2,3].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(1) !== -1) {
        comChoice = 1
    } else if(([4,7].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(1) !== -1) {
        comChoice = 1
    } else if(([5,9].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(1) !== -1) {
        comChoice = 1
    } else if(([1,3].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(2) !== -1) {
        comChoice = 2
    } else if(([5,8].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(2) !== -1) {
        comChoice = 2
    } else if(([1,2].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(3) !== -1) {
        comChoice = 3
    } else if(([6,9].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(3) !== -1) {
        comChoice = 3
    } else if(([5,7].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(3) !== -1) {
        comChoice = 3
    } else if(([1,7].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(4) !== -1) {
        comChoice = 4
    } else if(([5,6].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(4) !== -1) {
        comChoice = 4
    } else if(([1,9].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(5) !== -1) {
        comChoice = 5
    } else if(([2,8].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(5) !== -1) {
        comChoice = 5
    } else if(([3,7].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(5) !== -1) {
        comChoice = 5
    } else if(([4,6].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(5) !== -1) {
        comChoice = 5
    } else if(([3,9].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(6) !== -1) {
        comChoice = 6
    } else if(([4,5].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(6) !== -1) {
        comChoice = 6
    } else if(([1,4].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(7) !== -1) {
        comChoice = 7
    } else if(([3,5].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(7) !== -1) {
        comChoice = 7
    } else if(([8,9].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(7) !== -1) {
        comChoice = 7
    } else if(([2,5].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(8) !== -1) {
        comChoice = 8
    } else if(([7,9].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(8) !== -1) {
        comChoice = 8
    } else if(([3,6].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(9) !== -1) {
        comChoice = 9
    } else if(([1,5].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(9) !== -1) {
        comChoice = 9
    } else if(([7,8].every(element => comSelectedCase.includes(element))) && 
        caseChoices.indexOf(9) !== -1) {
        comChoice = 9
    } else if([2,3].every(element => yourSelectedCase.includes(element)) && 
        caseChoices.indexOf(1) !== -1) {
        comChoice = 1
    } else if([4,7].every(element => yourSelectedCase.includes(element)) && 
        caseChoices.indexOf(1) !== -1) {
        comChoice = 1
    } else if([5,9].every(element => yourSelectedCase.includes(element)) && 
        caseChoices.indexOf(1) !== -1) {
        comChoice = 1
    } else if(([1,3].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(2) !== -1) {
        comChoice = 2
    } else if(([5,8].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(2) !== -1) {
        comChoice = 2
    } else if([1,2].every(element => yourSelectedCase.includes(element)) && 
        caseChoices.indexOf(3) !== -1) {
        comChoice = 3
    } else if(([6,9].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(3) !== -1) {
        comChoice = 3
    } else if(([5,7].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(3) !== -1) {
        comChoice = 3
    } else if(([1,7].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(4) !== -1) {
        comChoice = 4
    } else if(([5,6].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(4) !== -1) {
        comChoice = 4
    } else if(([1,9].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(5) !== -1) {
        comChoice = 5
    } else if(([2,8].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(5) !== -1) {
        comChoice = 5
    } else if(([3,7].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(5) !== -1) {
        comChoice = 5
    } else if(([4,6].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(5) !== -1) {
        comChoice = 5
    } else if(([3,9].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(6) !== -1) {
        comChoice = 6
    } else if(([4,5].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(6) !== -1) {
        comChoice = 6
    } else if(([1,4].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(7) !== -1) {
        comChoice = 7
    } else if(([3,5].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(7) !== -1) {
        comChoice = 7
    } else if(([8,9].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(7) !== -1) {
        comChoice = 7
    } else if(([2,5].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(8) !== -1) {
        comChoice = 8
    } else if(([7,9].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(8) !== -1) {
        comChoice = 8
    } else if(([3,6].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(9) !== -1) {
        comChoice = 9
    } else if(([1,5].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(9) !== -1) {
        comChoice = 9
    } else if(([7,8].every(element => yourSelectedCase.includes(element))) && 
        caseChoices.indexOf(9) !== -1) {
        comChoice = 9
    } else {
        comChoice = caseChoices[Math.floor(Math.random() * caseChoices.length)]
    }

    const handleReset = () => {
        setHowPlays(true)
        setSelectedCase([])
        setYourSelectedCase([])
        setComSelectedCase([])
        setCaseChoices([1, 2, 3, 4, 5, 6, 7, 8, 9])
        setWinner(1)
        setScore1(0)
        setScore2(0)
        setGames(1)
        setAttempts(0)
        setWinningCases([])
    }
    
    const handleNewGame = () => {
        setHowPlays(true)
        setSelectedCase([])
        setYourSelectedCase([])
        setComSelectedCase([])
        setCaseChoices([1, 2, 3, 4, 5, 6, 7, 8, 9])
        setWinner(1)
        setAttempts(0)
        setWinningCases([])
        setGames(prev => prev + 1)
    }
    
    return (

        <div className="tictactoeGame">
            <div className="tictactoeGrid">
                <div className="line">
                    <div className={`case ${selectedCase.indexOf(1) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(1) !== -1 ? 'winningCase' : 'opacity')}`} id="case1" onClick={(selectedCase.indexOf(1) === -1 && winner === 1 && howPlays) ? () => handleCase(1) : null}>{yourSelectedCase.includes(1) ? <FontAwesomeIcon icon={faStar} className='faIcon' /> : comSelectedCase.includes(1) ? <FontAwesomeIcon icon={faCloud} className='faIcon faIcon--computer' /> : ''}</div>
                    <div className={`case ${selectedCase.indexOf(2) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(2) !== -1 ? 'winningCase' : 'opacity')}`} id="case2" onClick={(selectedCase.indexOf(2) === -1 && winner === 1 && howPlays) ? () => handleCase(2) : null}>{yourSelectedCase.includes(2) ? <FontAwesomeIcon icon={faStar} className='faIcon' /> : comSelectedCase.includes(2) ? <FontAwesomeIcon icon={faCloud} className='faIcon faIcon--computer' /> : ''}</div>
                    <div className={`case ${selectedCase.indexOf(3) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(3) !== -1 ? 'winningCase' : 'opacity')}`} id="case3" onClick={(selectedCase.indexOf(3) === -1 && winner === 1 && howPlays) ? () => handleCase(3) : null}>{yourSelectedCase.includes(3) ? <FontAwesomeIcon icon={faStar} className='faIcon' /> : comSelectedCase.includes(3) ? <FontAwesomeIcon icon={faCloud} className='faIcon faIcon--computer' /> : ''}</div>
                </div>
                <div className="line">
                    <div className={`case ${selectedCase.indexOf(4) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(4) !== -1 ? 'winningCase' : 'opacity')}`} id="case4" onClick={(selectedCase.indexOf(4) === -1 && winner === 1 && howPlays) ? () => handleCase(4) : null}>{yourSelectedCase.includes(4) ? <FontAwesomeIcon icon={faStar} className='faIcon' /> : comSelectedCase.includes(4) ? <FontAwesomeIcon icon={faCloud} className='faIcon faIcon--computer' /> : ''}</div>
                    <div className={`case ${selectedCase.indexOf(5) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(5) !== -1 ? 'winningCase' : 'opacity')}`} id="case5" onClick={(selectedCase.indexOf(5) === -1 && winner === 1 && howPlays) ? () => handleCase(5) : null}>{yourSelectedCase.includes(5) ? <FontAwesomeIcon icon={faStar} className='faIcon' /> : comSelectedCase.includes(5) ? <FontAwesomeIcon icon={faCloud} className='faIcon faIcon--computer' /> : ''}</div>
                    <div className={`case ${selectedCase.indexOf(6) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(6) !== -1 ? 'winningCase' : 'opacity')}`} id="case6" onClick={(selectedCase.indexOf(6) === -1 && winner === 1 && howPlays) ? () => handleCase(6) : null}>{yourSelectedCase.includes(6) ? <FontAwesomeIcon icon={faStar} className='faIcon' /> : comSelectedCase.includes(6) ? <FontAwesomeIcon icon={faCloud} className='faIcon faIcon--computer' /> : ''}</div>
                </div>
                <div className="line">
                    <div className={`case ${selectedCase.indexOf(7) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(7) !== -1 ? 'winningCase' : 'opacity')}`} id="case7" onClick={(selectedCase.indexOf(7) === -1 && winner === 1 && howPlays) ? () => handleCase(7) : null}>{yourSelectedCase.includes(7) ? <FontAwesomeIcon icon={faStar} className='faIcon' /> : comSelectedCase.includes(7) ? <FontAwesomeIcon icon={faCloud} className='faIcon faIcon--computer' /> : ''}</div>
                    <div className={`case ${selectedCase.indexOf(8) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(8) !== -1 ? 'winningCase' : 'opacity')}`} id="case8" onClick={(selectedCase.indexOf(8) === -1 && winner === 1 && howPlays) ? () => handleCase(8) : null}>{yourSelectedCase.includes(8) ? <FontAwesomeIcon icon={faStar} className='faIcon' /> : comSelectedCase.includes(8) ? <FontAwesomeIcon icon={faCloud} className='faIcon faIcon--computer' /> : ''}</div>
                    <div className={`case ${selectedCase.indexOf(9) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(9) !== -1 ? 'winningCase' : 'opacity')}`} id="case9" onClick={(selectedCase.indexOf(9) === -1 && winner === 1 && howPlays) ? () => handleCase(9) : null}>{yourSelectedCase.includes(9) ? <FontAwesomeIcon icon={faStar} className='faIcon' /> : comSelectedCase.includes(9) ? <FontAwesomeIcon icon={faCloud} className='faIcon faIcon--computer' /> : ''}</div>
                </div>                
            </div>

            <div className="scoreboard">
                <div className={`score ${(winner === 1 && howPlays) && "score--playing"}`}><span className="titleScore">YOU</span><span className="currentScore">{score1}</span></div>
                <div className={`games ${winner === 2 ? 'games--YouWin' : winner === 3 && 'games--YouLose'}`}><span className="titleScore">Games : {games}</span><span className={`currentScore ${winner !== 1 && 'currentScore--result'}`}>{winner === 2 ? 'YOU WIN' : winner === 3 ? 'YOU LOSE' : winner === 4 ? 'DRAW' : '...'}</span></div>
                <div className={`score ${(winner === 1 && !howPlays) && "score--playing"}`}><span className="titleScore">COMPUTER</span><span className="currentScore">{score2}</span></div>
            </div>

            <div className="button reset" onClick={() => handleReset()}>Reset</div>
            <div className="button newGame" onClick={() => handleNewGame()}>New Game</div>

        </div>
    )
}

export default Grid