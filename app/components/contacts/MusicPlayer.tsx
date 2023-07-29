'use client';

import styles from './MusicPlayer.module.css';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const myMusic = useRef(new Audio());

  const togglePlay = () => {
    isPlaying ? myMusic.current.pause() : myMusic.current.play();
    setIsPlaying(!isPlaying)
  }

  myMusic.current.addEventListener('ended', () => {
    myMusic.current.currentTime = 0;
    setIsPlaying(false);
  })

  return (
    <div className={styles.player}>
      {
        isPlaying ? 
        (<AiFillPauseCircle 
          className={styles.icon}
          onClick={togglePlay} 
        />) : 
        (<AiFillPlayCircle 
          className={styles.icon}
          onClick={togglePlay}  
        />)
      }
      <audio
        src="/music/instrumental1.flac"
        ref={myMusic}
      />
    </div>
  )
}

export default MusicPlayer;