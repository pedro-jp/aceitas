'use client';
import React, { useState, useRef } from 'react';
import styles from './button.module.css';
import Link from 'next/link';

export const BtnNao = () => {
  const [style, setStyle] = useState({});
  const getOut = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    setStyle({
      position: 'absolute',
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  return (
    <button
      className={styles.btn}
      id={styles.blue}
      style={style}
      onClick={getOut}
      onMouseEnter={getOut}
    >
      Não
    </button>
  );
};

export const BtnSim = () => {
  const [clicked, setClicked] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const goFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleYes = () => {
    setClicked(true);
    setTimeout(() => {
      goFullScreen();
    }, 100);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleYes}>
        sim
      </button>

      {clicked ? (
        <video ref={videoRef} className={styles.video} preload='none' autoPlay>
          <source src='../assets/videos/video.mp4' type='video/mp4' />
        </video>
      ) : (
        ''
      )}
    </div>
  );
};
