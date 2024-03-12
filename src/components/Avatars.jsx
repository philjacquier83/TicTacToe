import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCloud, faSun, faCloudBolt, faMoon, faSnowflake, faFaceSmile, faFaceAngry, faHippo, faSpider, faFrog, faDove, faMosquito, faCat, faDog, faDragon } from "@fortawesome/free-solid-svg-icons"
import '../sass/main.scss'
import { useState } from "react"

function Avatars({ player }) {

    const [ avatarUser, setAvatarUser ] = useState('faStar')
    const [ avatarComputer, setAvatarComputer ] = useState('faCloud')

    return (

        <>
            <div className={`avatarsList ${player === 'user' ? 'avatarUser' : 'avatarComputer'}`}>
                <div className={`avatar ${((player === 'user' && avatarUser === 'faStar') || (player === 'computer' && avatarComputer === 'faStar')) && 'avatar--selected'}`}>
                    <FontAwesomeIcon icon={faStar} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faCloud} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faSun} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faCloudBolt} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faMoon} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faSnowflake} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faFaceSmile} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faFaceAngry} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faHippo} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faSpider} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faFrog} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faDove} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faMosquito} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faCat} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faDog} className="faAvatar" />
                </div>

                <div className="avatar">
                    <FontAwesomeIcon icon={faDragon} className="faAvatar" />
                </div>
                
            </div>
        </>

    )
}

export default Avatars