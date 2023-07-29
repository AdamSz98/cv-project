'use client';

import styles from './MusicPlayer.module.css';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { useState } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.player}>
      {
        isPlaying ? 
        (<AiFillPauseCircle 
          className={styles.icon}
          onClick={() => setIsPlaying(!isPlaying)} 
        />) : 
        (<AiFillPlayCircle 
          className={styles.icon}
          onClick={() => setIsPlaying(!isPlaying)}  
        />)
      }
    </div>
  )
}

export default MusicPlayer;