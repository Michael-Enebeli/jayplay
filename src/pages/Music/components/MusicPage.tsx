import React, { useState } from 'react';
import MusicPlayer from "../../../shared/components/MusicPlayer";
import { musicLibrary } from "../../../utils/musicLibrary";
import "../styles/MusicPage.css";

const MusicPage: React.FC = () => {
    const [currentTrack, setCurrentTrack] = useState(musicLibrary[0]);
    const [otherTracks, setOtherTracks] = useState(musicLibrary.slice(1));

    const handleListenNow = (selectedTrack: typeof currentTrack) => {
        if (selectedTrack.id === currentTrack.id) return;

        setOtherTracks(prev =>
            prev.map(track =>
                track.id === selectedTrack.id ? currentTrack : track
            )
        );
        setCurrentTrack(selectedTrack);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div id="musicPage">
            <section className="music-player-section">
                <MusicPlayer
                    title={currentTrack.title}
                    src={currentTrack.src}
                    backgroundImage={currentTrack.backgroundImage}
                />
            </section>

            <section className="music-cards-section">
                {otherTracks.map(track => (
                    <div className="music-card" key={track.id}>
                        <img src={track.backgroundImage} alt={track.title} />
                        <h4>{track.title}</h4>
                        <p>{track.artist}</p>
                        <div className="card-buttons">
                            <button onClick={() => handleListenNow(track)}>Listen Now</button>
                            <a href={track.src} download={`${track.title}.mp3`}>
                                <button className="download-btn">Download</button>
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MusicPage;
