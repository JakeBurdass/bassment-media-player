import './library.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Library = () => {
    const [videoState, setVideoState] = useState()

// useEffect to load all videos from the server

useEffect(() => {
    
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
                        {/* {videoState.map((video, index) => (
                            <li></li>
                        ))} */}
                    </ul>
                </section>

            </div>
        </>
    )
}

export default Library