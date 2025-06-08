import React from "react";
import MusicPlayer from "../../../shared/components/MusicPlayer";
import "../styles/MusicSection.css";

const MusicSection: React.FC = () => {
    return (
        <section id="newAlbum">
            <span>New Album</span>
            <h2> DON'T PUT ME ON SILENT </h2>
            <div className="music-section">
                <div className="player-wrapper">
                    <MusicPlayer
                        title="Don't Put Me on Silent"
                        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                        backgroundImage="/images/newalbum.jpg"
                    />
                </div>
                <div className="music-info">
                    <h3>Don't Put me on Silent</h3>
                    <p>
                        "Don't Put Me on Silent" – A Soulful Plea for Connection. Jay Play pours his heart into his latest release, "Don't Put Me on Silent," a deeply emotional track inspired by a fleeting yet unforgettable encounter. Fueled by the lingering memory of a mysterious woman who left a profound impact, this song captures the ache of longing, the fear of being forgotten, and the desperate hope for a connection that refuses to fade. With soul-stirring melodies and raw vulnerability, Jay Play invites listeners into his world, one where every missed call, every unanswered message, and every moment of silence carries the weight of unspoken emotions.
                    </p>
                    <a href="https://example.com/your-download-link.mp3" download className="download-btn">
                        Download Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MusicSection;
