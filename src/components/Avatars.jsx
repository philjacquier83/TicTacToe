import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCloud, faSun, faCloudBolt, faMoon, faSnowflake, faFaceSmile, faFaceAngry, faHippo, faSpider, faFrog, faDove, faMosquito, faCat, faDog, faDragon } from "@fortawesome/free-solid-svg-icons"
import '../sass/main.scss'
import { useState } from "react"

function Avatars({ player }) {

    const [ avatarUser, setAvatarUser ] = useState(0)
    const [ avatarComputer, setAvatarComputer ] = useState(1)
    const avatars = [faStar, faCloud, faSun, faCloudBolt, faMoon, faSnowflake, faFaceSmile, faFaceAngry, faHippo, faSpider, faFrog, faDove, faMosquito, faCat, faDog, faDragon]
    
    return (

        <>
            <div className={`avatarsList ${player === 'user' ? 'avatarUser' : 'avatarComputer'}`}>
                {avatars.map((avatar, index) => 
                <div className={`avatar ${((player === 'user' && avatarUser === 'faStar') || (player === 'computer' && avatarComputer === 'faStar')) && 'avatar--selected'}`}>
                    <FontAwesomeIcon icon={avatar} className="faAvatar" />
                </div>
                )}
                
            </div>
        </>

    )
}

export default Avatars