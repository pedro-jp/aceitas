'use client';
import { useRef, useEffect } from 'react';

export const Audio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Erro ao tentar reproduzir o áudio:', error);
        });
      }
    };

    // Adiciona evento listeners para tentar tocar o áudio
    const audioEl = audioRef.current;
    if (audioEl) {
      audioEl.addEventListener('canplay', playAudio);
      audioEl.addEventListener('loadedmetadata', playAudio);

      // Remover event listeners quando o componente desmontar
      return () => {
        audioEl.removeEventListener('canplay', playAudio);
        audioEl.removeEventListener('loadedmetadata', playAudio);
      };
    }

    // Espera 100ms e chama a função playAudio
    const timeoutId = setTimeout(playAudio, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src='https://borafessora.vercel.app/assets/audios/msc.ogg'
      autoPlay
      onPlay={() => console.log('Audio is playing')}
      onError={() => console.log('Error playing the audio')}
    />
  );
};
