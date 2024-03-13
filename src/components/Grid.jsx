import { useEffect, useState } from 'react'
import '../sass/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCloud, faCat, faDog, faHippo, faSpider, faFrog, faDove, faMosquito, faDragon, faSun, faCloudBolt, faMoon, faSnowflake, faFaceSmile, faFaceAngry,
    faSkull, faPaw, faGuitar, faHeart, faHorseHead, faHatCowboy, faGun, faBone, faFaceKissWinkHeart, faCandyCane, faFish, faBug, faBurger, faTrophy } from '@fortawesome/free-solid-svg-icons'
import Avatars from './Avatars'

function Grid() {

    const winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
    
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
    const [ yourAvatar, setYourAvatar ] = useState(0)
    const [ comAvatar, setComAvatar ] = useState(1)
    const [ openAvatars, setOpenAvatars ] = useState(true)

    const handleCase = (numCase) => {
        setSelectedCase(prev => [...prev, numCase])
        setYourSelectedCase(prevYou => [...prevYou, numCase])
        setCaseChoices(caseChoices.filter(item => item !== numCase))
        setAttempts(prevAtt => prevAtt + 1)
        setHowPlays(!howPlays)
    }

    if(winner === 1) {
        winningCombos.forEach(winningCombo => {
            if(winningCombo.every(value => yourSelectedCase.includes(value))) { 
                setWinner(2)
                setWinningCases(winningCombo)
                setScore1(prev => prev + 1)
            } else if(winningCombo.every(value => comSelectedCase.includes(value))) { 
                setWinner(3)
                setWinningCases(winningCombo)
                setScore2(prev => prev + 1)
            } else {
                if(attempts === 9) {
                    setWinner(4)
                }
            }
        })
    }   

    let comChoice;
    let potentialChoice;

    const warningCombos = [{combo: [2,3], caseToPlay: 1}, {combo: [4,7], caseToPlay: 1}, {combo: [5,9], caseToPlay: 1}, 
                            {combo: [1,3], caseToPlay: 2}, {combo: [5,8], caseToPlay: 2}, 
                            {combo: [1,2], caseToPlay: 3}, {combo: [6,9], caseToPlay: 3}, {combo: [5,7], caseToPlay: 3}, 
                            {combo: [1,7], caseToPlay: 4}, {combo: [5,6], caseToPlay: 4}, 
                            {combo: [1,9], caseToPlay: 5}, {combo: [2,8], caseToPlay: 5}, {combo: [3,7], caseToPlay: 5}, {combo: [4,6], caseToPlay: 5}, 
                            {combo: [3,9], caseToPlay: 6}, {combo: [4,5], caseToPlay: 6}, 
                            {combo: [1,4], caseToPlay: 7}, {combo: [3,5], caseToPlay: 7}, {combo: [8,9], caseToPlay: 7}, 
                            {combo: [2,5], caseToPlay: 8}, {combo: [7,9], caseToPlay: 8}, 
                            {combo: [3,6], caseToPlay: 9}, {combo: [1,5], caseToPlay: 9}, {combo: [7,8], caseToPlay: 9}]

    if(!howPlays) {
        warningCombos.forEach((warningCombo) => {
            if((warningCombo.combo.every(element => comSelectedCase.includes(element))) && caseChoices.indexOf(warningCombo.caseToPlay) !== -1) {
                potentialChoice = warningCombo.caseToPlay
            } else if((warningCombo.combo.every(element => yourSelectedCase.includes(element))) && caseChoices.indexOf(warningCombo.caseToPlay) !== -1) {
                potentialChoice = warningCombo.caseToPlay
            }
        })
        
        if(potentialChoice !== undefined) {
            comChoice = potentialChoice
        } else {
            comChoice = caseChoices[Math.floor(Math.random() * caseChoices.length)]
        }
        
    }

    useEffect(() => {
        if(winner === 1 && !howPlays) {
        setTimeout(() => {
            console.log(winner)
            console.log(comChoice)
                setSelectedCase(prev => [...prev, comChoice])
                setComSelectedCase(prevCom => [...prevCom, comChoice])
                setCaseChoices(caseChoices.filter(item => item !== comChoice))
                setHowPlays(!howPlays)
                setAttempts(prevAtt => prevAtt + 1)            
            }, 2000)
        }
    }, [attempts])

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
        setSelectedCase([])
        setYourSelectedCase([])
        setComSelectedCase([])
        setCaseChoices([1, 2, 3, 4, 5, 6, 7, 8, 9])
        setAttempts(0)
        setWinningCases([])
        setGames(prev => prev + 1)
        setHowPlays(howPlays)
        setWinner(1)
    }

    const avatars = [faStar, faCloud, faSun, faCloudBolt, faMoon, faSnowflake, faFaceSmile, faFaceAngry, faFaceKissWinkHeart, faHeart, faHippo, faSpider, faFrog, faDove, faMosquito, faCat, faDragon, faHorseHead,
        faFish, faBug, faDog, faBone, faPaw, faCandyCane, faBurger, faGuitar, faTrophy, faHatCowboy, faGun, faSkull]
    
    const handleOpenAvatars = () => {
        setOpenAvatars(!openAvatars)
    }

    const handleSelectAvatar = (avatarId) => {
        setYourAvatar(avatarId)
        setComAvatar((Math.floor(Math.random() * avatars.length)))
    }
    
    return (

        <div className="tictactoeGame">
            
            {openAvatars ? 
                
                <>
                <div className="avatars">
                    <p>Select your Avatar</p>
                    <div className="selectAvatar">
                        {avatars.map((avatar, id) =>
                            <div className={`avatar ${yourAvatar === id && 'avatar--selected'}`} key={`${avatar}-${id}`} onClick={() => handleSelectAvatar(id)}><FontAwesomeIcon icon={avatar} className="faIcon" /></div>
                        )}
                    </div>
                </div>

                <div>
                    <div className="button validation" onClick={handleOpenAvatars}>OK</div>
                </div>
                </>

                :

                <>
                
                
                <div className="scoreboard">
                    <div className={`score score--You ${(winner === 1 && howPlays) && "score--playing"}`}><span className="titleScore">YOU</span><span className={`currentScore ${winner === 2 && 'currentScore--You'}`}>{score1}</span></div>
                    <div className={`games ${winner === 2 ? 'games--YouWin' : winner === 3 && 'games--YouLose'}`}><span className="titleScore">Games : {games}</span><span className={`currentScore ${winner !== 1 && 'currentScore--result'}`}>{winner === 2 ? 'YOU WIN' : winner === 3 ? 'YOU LOSE' : winner === 4 ? 'DRAW' : '...'}</span></div>
                    <div className={`score score--Computer ${(winner === 1 && !howPlays) && "score--playing"}`}><span className="titleScore">COMPUTER</span><span className={`currentScore ${winner === 3 && 'currentScore--Computer'}`}>{score2}</span></div>
                </div>
                
                <div className="Grid">
                    
                    <div className="tictactoeGrid">
                        <div className="line">
                            <div className={`case ${selectedCase.indexOf(1) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(1) !== -1 ? 'winningCase' : 'opacity')}`} id="case1" onClick={(selectedCase.indexOf(1) === -1 && winner === 1 && howPlays) ? () => handleCase(1) : null}>{yourSelectedCase.includes(1) ? <FontAwesomeIcon icon={avatars[yourAvatar]} className='faIcon' /> : comSelectedCase.includes(1) ? <FontAwesomeIcon icon={avatars[comAvatar]} className='faIcon faIcon--computer' /> : ''}</div>
                            <div className={`case ${selectedCase.indexOf(2) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(2) !== -1 ? 'winningCase' : 'opacity')}`} id="case2" onClick={(selectedCase.indexOf(2) === -1 && winner === 1 && howPlays) ? () => handleCase(2) : null}>{yourSelectedCase.includes(2) ? <FontAwesomeIcon icon={avatars[yourAvatar]} className='faIcon' /> : comSelectedCase.includes(2) ? <FontAwesomeIcon icon={avatars[comAvatar]} className='faIcon faIcon--computer' /> : ''}</div>
                            <div className={`case ${selectedCase.indexOf(3) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(3) !== -1 ? 'winningCase' : 'opacity')}`} id="case3" onClick={(selectedCase.indexOf(3) === -1 && winner === 1 && howPlays) ? () => handleCase(3) : null}>{yourSelectedCase.includes(3) ? <FontAwesomeIcon icon={avatars[yourAvatar]} className='faIcon' /> : comSelectedCase.includes(3) ? <FontAwesomeIcon icon={avatars[comAvatar]} className='faIcon faIcon--computer' /> : ''}</div>
                        </div>
                        <div className="line">
                            <div className={`case ${selectedCase.indexOf(4) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(4) !== -1 ? 'winningCase' : 'opacity')}`} id="case4" onClick={(selectedCase.indexOf(4) === -1 && winner === 1 && howPlays) ? () => handleCase(4) : null}>{yourSelectedCase.includes(4) ? <FontAwesomeIcon icon={avatars[yourAvatar]} className='faIcon' /> : comSelectedCase.includes(4) ? <FontAwesomeIcon icon={avatars[comAvatar]} className='faIcon faIcon--computer' /> : ''}</div>
                            <div className={`case ${selectedCase.indexOf(5) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(5) !== -1 ? 'winningCase' : 'opacity')}`} id="case5" onClick={(selectedCase.indexOf(5) === -1 && winner === 1 && howPlays) ? () => handleCase(5) : null}>{yourSelectedCase.includes(5) ? <FontAwesomeIcon icon={avatars[yourAvatar]} className='faIcon' /> : comSelectedCase.includes(5) ? <FontAwesomeIcon icon={avatars[comAvatar]} className='faIcon faIcon--computer' /> : ''}</div>
                            <div className={`case ${selectedCase.indexOf(6) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(6) !== -1 ? 'winningCase' : 'opacity')}`} id="case6" onClick={(selectedCase.indexOf(6) === -1 && winner === 1 && howPlays) ? () => handleCase(6) : null}>{yourSelectedCase.includes(6) ? <FontAwesomeIcon icon={avatars[yourAvatar]} className='faIcon' /> : comSelectedCase.includes(6) ? <FontAwesomeIcon icon={avatars[comAvatar]} className='faIcon faIcon--computer' /> : ''}</div>
                        </div>
                        <div className="line">
                            <div className={`case ${selectedCase.indexOf(7) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(7) !== -1 ? 'winningCase' : 'opacity')}`} id="case7" onClick={(selectedCase.indexOf(7) === -1 && winner === 1 && howPlays) ? () => handleCase(7) : null}>{yourSelectedCase.includes(7) ? <FontAwesomeIcon icon={avatars[yourAvatar]} className='faIcon' /> : comSelectedCase.includes(7) ? <FontAwesomeIcon icon={avatars[comAvatar]} className='faIcon faIcon--computer' /> : ''}</div>
                            <div className={`case ${selectedCase.indexOf(8) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(8) !== -1 ? 'winningCase' : 'opacity')}`} id="case8" onClick={(selectedCase.indexOf(8) === -1 && winner === 1 && howPlays) ? () => handleCase(8) : null}>{yourSelectedCase.includes(8) ? <FontAwesomeIcon icon={avatars[yourAvatar]} className='faIcon' /> : comSelectedCase.includes(8) ? <FontAwesomeIcon icon={avatars[comAvatar]} className='faIcon faIcon--computer' /> : ''}</div>
                            <div className={`case ${selectedCase.indexOf(9) !== -1 && 'case--selected'} ${winner !== 1 && (winningCases.indexOf(9) !== -1 ? 'winningCase' : 'opacity')}`} id="case9" onClick={(selectedCase.indexOf(9) === -1 && winner === 1 && howPlays) ? () => handleCase(9) : null}>{yourSelectedCase.includes(9) ? <FontAwesomeIcon icon={avatars[yourAvatar]} className='faIcon' /> : comSelectedCase.includes(9) ? <FontAwesomeIcon icon={avatars[comAvatar]} className='faIcon faIcon--computer' /> : ''}</div>
                        </div>                
                    </div>

                </div>

                <div className='actions'>
                    <div className="button changeAvatar" onClick={handleOpenAvatars}>Change Avatar</div>
                    <div className="button reset" onClick={() => handleReset()}>Reset</div>
                    <div className="button newGame" onClick={() => handleNewGame()}>New Game</div>
                </div>
                </>
        }
        </div>
    )
}

export default Grid