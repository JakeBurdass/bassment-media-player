import './library.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Library = () => {
    const [videoState, setVideoState] = useState([])

    const handleFetch = async () => {
        const response = await fetch("https://v1.nocodeapi.com/dreadzbassment/vimeo/JREMgkFPSLGDoBEl/videos?user_id=122966666")
        const data = await response.json()
        console.log("1. Data after fetch", data.data)
        setVideoState(data.data);
        console.log("2. looking for embed", videoState)
    }
    // useEffect to load all videos from the server

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <>
            <div className="libraryMain">
                <section className="title">
                    <h2>LIBRARY</h2>
                </section>
                <section className="bassmentOnline">
                    <header><h3>BASSment Online</h3></header>
                    <ul className="videoContainer">
                        {videoState.map((video, index) => (
                            <li>
                                <iframe src={video.player_embed_url}></iframe>
                                <p>{video.name}</p>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>
        </>
    )
}

export default Library