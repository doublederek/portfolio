import Slide from '@material-ui/core/Slide';
import './Derek.css';
import React from 'react';

export default function Derek() {
  return (
    <Slide direction='down' in>
      <section className='derek-container'>
        <img src='https://raw.githubusercontent.com/doublederek/portfolio/main/assets/derek.png' />
        <p>✌️ HELLO, HI.</p>
      </section>
    </Slide>
  );
}
