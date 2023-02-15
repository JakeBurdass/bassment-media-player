import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './dashboard.css'
import playButton from '../../assets/playbutton.svg'
import videoButton from '../../assets/videobutton.svg'
import libraryButton from '../../assets/librarybutton.jpg'

const Dashboard = () => {
    const [isLive, setIsLive] = useState(false)
    const navigate = useNavigate()

    const handleClick = (event) => {
        console.log("1. buttons working")
        console.log("2.", isLive)
        if (event.target.value === "play") {
            console.log("3. play button working")
            if (isLive === false) {
                console.log("4. Stream is not live")
                navigate(`/library`)
            } if (isLive === true) {
                console.log("4. Stream is live")
            }
            // Play if live / isLive state = true
            // Navigate if not / isLive state = false
            // Nav to library

        }
        if (event.target.value === "video") {
            console.log("3. video button working")
            if (isLive === false) {
                console.log("4. Stream is not live")
            } if (isLive === true) {
                console.log("4. Stream is live")
            }
            // Navigate to video player if live
            // Navigate to library if not live

        }
        if (event.target.value === "library") {
            console.log("3. library button working")
            if (isLive === false) {
                console.log("4. Stream is not live")
            } if (isLive === true) {
                console.log("4. Stream is live")
            }
            // Navigate to library

        }

    }

    return (
        <div className="dashboardMain">
            <section>
                <h2>BASSMENT
                    ONLINE
                </h2>  
            </section>

            {/* Swipeable list of play buttons */}
            <section>
                <ul className="buttonWrapper">
                    <li><button onClick={handleClick} value="play"><img src={playButton}/></button></li>
                    <li><button onClick={handleClick} value="video"><img src={videoButton}/></button></li>
                    <li><button onClick={handleClick} value="library"><img src={libraryButton}/></button></li>
                </ul>
            </section>

            {/* Conditional render the audio player */}
        </div>
    )
}

export default Dashboard