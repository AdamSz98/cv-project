'use client';

import styles from './MusicPlayer.module.css';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [audio, setAudio] = useState({});

  useEffect(() => {
    setAudio(document.getElementsByTagName('audio')[0]);
    console.log(audio);
  }, [])

  const togglePlay = () => {
    console.log(audio);
    isPlaying ? (audio! as HTMLAudioElement).pause() : (audio as HTMLAudioElement).play();
    setIsPlaying(!isPlaying)

    if(!messageSent) {
      toast(() => (
        <span className={styles.popup}>
          🎸 Hope you like my song!
        </span>
      ))
      setMessageSent(true);
    }
  }

  if((audio as HTMLAudioElement).currentTime != null) {
    (audio as HTMLAudioElement).addEventListener('ended', () => {
      (audio as HTMLAudioElement).currentTime = 0;
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
        />)
      }
      <audio
        src="/music/instrumental1.flac"
      />
    </div>
  )
}

export default MusicPlayer;