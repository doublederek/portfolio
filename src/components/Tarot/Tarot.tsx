import './Tarot.css';
import React, { useState } from 'react';
import background from './assets/bg.gif';
import TarotCards from './components/TarotCards';
import { TarotCard } from '../../data/types';
import { tarotData } from './assets/tarotData';

const items: TarotCard[] = [...Array(6)].map(() => {
  return({
    url: 'https://raw.githubusercontent.com/doublederek/demo/main/assets/tarot/deck.jpg',
    data: null,
  });
});

export default function Tarot() {
  const [drawCard, setDrawCard] = useState(false);

  const itemIndex = Math.floor(Math.random() * tarotData.length);
  const itemUrl = `${ tarotData[itemIndex].url }/${ tarotData[itemIndex].name.replace(/ /g, '-').toLowerCase() }.jpg`;

  const item:TarotCard = {
    url: itemUrl,
    data: {
      name: tarotData[itemIndex].name,
      fortune_telling: tarotData[itemIndex].fortune_telling,
      keywords: tarotData[itemIndex].keywords,
      meanings: tarotData[itemIndex].meanings,
      "Questions to Ask": tarotData[itemIndex]["Questions to Ask"],
    },
  }

  const overlayMarkup = <section style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', position: 'fixed' }} />;
  const drawCardMarkup = <p className='tarot-draw-card' onClick={ () => setDrawCard(true) }>THINK OF A QUESTION<br/><br/>CLICK TO DRAW A CARD</p>;

  const tarotMarkup = drawCard ? 
    <>
      { overlayMarkup }
      <TarotCards cards={ [...items, item] }/> 
    </> : 
    <>
      
      { drawCardMarkup }
      { overlayMarkup }
    </>
  ;

  return(
    <section className='tarot-container' style={{ backgroundImage: `url(${ background })` }}>
      { tarotMarkup }
    </section>
  );
}
