"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import styles from "./AmbientSound.module.css";

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleSound} className={styles.toggleBtn} aria-label="Toggle Ambient Sound">
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        <span className={styles.label}>{isPlaying ? "Om Chanting On" : "Play Om Sound"}</span>
      </button>
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/03/09/audio_c8c8a73467.mp3?filename=om-chanting-19266.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
