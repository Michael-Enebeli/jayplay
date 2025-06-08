import React, { useRef, useState, useEffect } from 'react';
import "../styles/MusicPlayer.css";

interface MusicPlayerProps {
    src: string;
    title: string;
    backgroundImage: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src, title, backgroundImage }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleRewind = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 10;
        }
    };

    const handleForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 10;
        }
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
        };
    }, [src]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
      
        if (isPlaying) {
          audio.pause();
          audio.load();
          audio.play().catch((err) => console.log("Autoplay failed:", err));
        } else {
          audio.load(); 
        }
      
        setCurrentTime(0); 
      }, [src]);
      

    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div className="music-player-wrapper">
            <h3 className="song-title">{title}</h3>
            <div
                className="player"
                style={{
                    background: `url(${backgroundImage}) center/cover no-repeat`,
                }}
            >
                <div className="album-cover" />
                <div className="controls">
                    <button title="Rewind 10 seconds" onClick={handleRewind}>
                        <i className="fas fa-backward" />
                    </button>
                    <button title={isPlaying ? "Pause" : "Play"} onClick={handlePlayPause}>
                        <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`} />
                    </button>
                    <button title="Forward 10 seconds" onClick={handleForward}>
                        <i className="fas fa-forward" />
                    </button>
                </div>

                <div className="progress-container">
                    <div className="progress-bar-static" />
                    <div className="progress-bar" style={{ width: `${progressPercent}%` }} />
                </div>

                <div className="time-container">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>

                <audio ref={audioRef} src={src} />
            </div>
        </div>
    );
};

export default MusicPlayer;
