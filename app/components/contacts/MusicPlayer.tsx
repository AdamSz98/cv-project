'use client';

import styles from './MusicPlayer.module.css';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [messageSent, setMessageSent] = useState([false, false]);

  const myMusic = useRef();

  const togglePlay = () => {
    isPlaying ? (myMusic.current! as HTMLAudioElement).pause() : (myMusic.current! as HTMLAudioElement).play();
    setIsPlaying(!isPlaying)

    if(!messageSent[1]) {
      toast(() => (
        <span className={styles.popup}>
          🎵 Hope you like it! <br/>
          Don't worry, the links will open in a new tab.
        </span>
      ))
      setMessageSent([messageSent[0], true]);
    }
  }

  const sendFirstMessage = () => {
    if(!messageSent[0]) {
      toast(() => (
        <span>
          🎸 Listen to my song
          while browsing! 
        </span>
      ))
      setMessageSent([true, messageSent[1]]);
    }
  }

  if(myMusic.current) {
    (myMusic.current! as HTMLAudioElement).addEventListener('ended', () => {
      (myMusic.current! as HTMLAudioElement).currentTime = 0;
      setIsPlaying(false);
    })
  }

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
          onMouseEnter={sendFirstMessage}   
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