import './DereksGame.css';
import React from 'react';

export default function DereksGame() {
  return(
    <section className='dereks-game-container'>
      <section className='dereks-game-info'>
        <p className='dereks-game-title'>"Derek's Game"</p>
        <p className='dereks-game-description'>A game by Derek made in Bitsy during a 48-hour game jam.</p>
      </section>
      <span className='dereks-game-loader'></span>
      <iframe src="https://itch.io/embed-upload/751413?color=333333" allowFullScreen width="491" height="510"></iframe>
    </section>
  );
}
