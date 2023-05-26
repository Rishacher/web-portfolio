import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Slider } from '@mui/material';
import { SkipPrevious, PlayArrow, Pause, SkipNext } from '@mui/icons-material';
import { useSelector } from "react-redux";

import './jamendo.css';

const JamendoPlayer = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const xhrData = () => {
      const xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        'https://api.jamendo.com/v3.0/tracks/?client_id=e93b5922',
        true
      );

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const tracks = response.results;
          setTracks(tracks);
        } else if (xhr.readyState === 4) {
          console.error('Ошибка получения данных:', xhr.status);
        }
      };

      xhr.send();
    };

    xhrData();
  }, []);

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('ended', handleTrackEnd);
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.removeEventListener('ended', handleTrackEnd);
    };
  }, [currentTrackIndex]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleTrackEnd = () => {
    setIsPlaying(false);
    nextTrack();
  };

  const playTrack = (audioUrl) => {
    setIsPlaying(true);
    audioRef.current.src = audioUrl;
    audioRef.current.play();
  };

  const pauseTrack = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const nextTrack = () => {
    audioRef.current.pause(); // Остановка текущего трека
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    playTrack(tracks[(currentTrackIndex + 1) % tracks.length]?.audio); // Воспроизведение нового трека
  };
  
  const previousTrack = () => {
    audioRef.current.pause(); // Остановка текущего трека
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    playTrack(tracks[(currentTrackIndex - 1 + tracks.length) % tracks.length]?.audio); // Воспроизведение нового трека
  };

  const handleVolumeChange = (event, newValue) => {
    const normalizedValue = newValue / 100; // Приводим значение к диапазону [0, 1]
    setVolume(newValue);
    audioRef.current.volume = normalizedValue;
  };

  const handleProgressChange = (event, newValue) => {
    const newTime = (newValue / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };
  const nonThemeColor=useSelector(state=>state.nonThemeColor);

  return (
    <div className="player-container">
      <div className="player-controls">
        <IconButton style={{ color: nonThemeColor }} onClick={previousTrack}>
          <SkipPrevious />
        </IconButton>
        {isPlaying ? (
          <IconButton style={{ color: nonThemeColor }} onClick={pauseTrack}>
            <Pause />
          </IconButton>
        ) : (
          <IconButton style={{ color: nonThemeColor }} onClick={() => playTrack(tracks[currentTrackIndex]?.audio)}>
            <PlayArrow />
          </IconButton>
        )}
        <IconButton style={{ color: nonThemeColor }} onClick={nextTrack}>
          <SkipNext />
        </IconButton>
      </div>
      <div className="track-info">
        <h4>{tracks[currentTrackIndex]?.artist_name} - {tracks[currentTrackIndex]?.name}</h4>
      </div>
      <div className="progress-bar">
        <Slider
          value={(currentTime / duration) * 100}
          min={0}
          max={100}
          onChange={handleProgressChange}
        />
      </div>
      <div className="volume-control">
        <Slider value={volume} onChange={handleVolumeChange} />
      </div>
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
      />
    </div>
  );
};

export default JamendoPlayer;
