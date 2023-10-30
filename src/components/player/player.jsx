import React, { useState, useRef, useEffect, useHasChanged } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

// svg btn
import nextBtn from '../../assets/images/player/next.svg';
import previousBtn from '../../assets/images/player/previous.svg';
import playBtn from '../../assets/images/player/play.svg';
import pauseBtn from '../../assets/images/player/pause.svg';

// // jpeg tracks covers
import labiCover from '../../assets/images/player/labi.png';
import irmaCover from '../../assets/images/player/irma.png';
import tezetaCover from '../../assets/images/player/tezeta.png';

// mp3
import labi from '../../assets/mp3/I Got The... (2006 Remaster) (128 kbps).mp3';
import irma from '../../assets/mp3/Irma Thomas Anyone Who Knows What Love Is (128 kbps).mp3';
import tezeta from '../../assets/mp3/Tezeta (Nostalgia) (128 kbps).mp3';

import PlayerSVG from '../../assets/animations/player/playerSvg';

const tracks = [
  {
    title : 'I Got The... (2006 Remaster)',
    source: labi,
    cover: labiCover,
    author: 'Labi SIFFRE'
  },
  {
    title : 'Anyone Who Knows What Love Is',
    source: irma,
    cover: irmaCover,
    author: 'Irma THOMAS'
  },
  {
    title : 'Tezeta (Nostalgia)',
    source: tezeta,
    cover: tezetaCover,
    author: 'Mulatu ASTATKE'
  },
];

const Player = () => {

  
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(tracks[currentTrackIndex].source));
  
  const play = () => {
    setIsPlaying(true);
    audioRef.current.play();
    let playerSvg = document.getElementById('player-svg');
    playerSvg.classList.add('playing');
    let playerContainer = document.getElementsByClassName('player-container')[0];
    playerContainer.classList.add('playing');
    // playerSvg.classList.toggle('start');
  };
  
  const pause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
    let playerSvg = document.getElementById('player-svg');
    playerSvg.classList.remove('playing');

  };

  const previous = () => {
    const newIndex = currentTrackIndex - 1;
    if (newIndex < 0) {
      setCurrentTrackIndex(tracks.length - 1);
      audioRef.current.pause();
      audioRef.current = new Audio(tracks[tracks.length - 1].source);
    } else {
      setCurrentTrackIndex(newIndex);
      audioRef.current.pause();
      audioRef.current = new Audio(tracks[newIndex].source);
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const next = () => {
    const newIndex = currentTrackIndex + 1;
    if (newIndex >= tracks.length) {
      setCurrentTrackIndex(0);
      audioRef.current.pause();
      audioRef.current = new Audio(tracks[0].source);
    } else {
      setCurrentTrackIndex(newIndex);
      audioRef.current.pause();
      audioRef.current = new Audio(tracks[newIndex].source);
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  function openPlayer() {
    let player = document.getElementById('player');
    player.classList.toggle('hide');

    let playerSvg = document.getElementById('player-svg');
    playerSvg.classList.toggle('start');
  }

  return (
        <div className="player-container" id="player">
            <div className="player-svg-container">
                <PlayerSVG cover={tracks[currentTrackIndex].cover} playing={isPlaying}/>
            </div>
            <div className="title-container">
                <p className='title'>{tracks[currentTrackIndex].title}</p>
                <p className='title'>{tracks[currentTrackIndex].author}</p>
            </div>
            {/* <div className='cover-container'>
                <img
                src={tracks[currentTrackIndex].cover}
                alt={`${tracks[currentTrackIndex].title} cover`}
                className="cover"
                />
            </div> */}
            <div className="player-controls">

                <img 
                    src={previousBtn} 
                    alt="previous song"
                    onClick={previous}
                />
                {isPlaying ? (
                <img 
                    src={pauseBtn} 
                    alt="pause song"
                    onClick={pause}
                    className="main-controls"
                />
                ) : (
                <img 
                    src={playBtn} 
                    alt="play song"
                    onClick={play}
                    className="main-controls"
                />
                )}
                <img 
                src={nextBtn} 
                alt="next song"
                onClick={next}
                />
            </div>
        </div>



  );
};

Player.propTypes = {
  /**
   * Show items Player of firt level
   */
  displayPlayer: PropTypes.bool.isRequired,
  /**
   * Show items Player of second level
   */
  displayPlayerItem: PropTypes.bool,

};

Player.defaultProps = {
  displayPlayer: false,
  displayPlayerItem: false,
};

export default Player;
