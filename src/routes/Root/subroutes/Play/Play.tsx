import './Play.css';
import React, { useState } from 'react';
import SplitSelector from '../../../../components/SplitSelector/SplitSelector';
import Tarot from '../../../../components/Tarot';
import { Slide } from '@material-ui/core';
import DereksGame from './components/DereksGame';
import Accolades from './components/Accolades';

const games = ['accolades', 'tarot', 'dereks'];

export default function Play() { 
  const [game, setGame] = useState('');

  const gameMarkup = () => {
    if(game === 'accolades')
      return <Accolades />
    else if (game === 'tarot')
      return <Tarot />;
    else if (game === 'dereks')
      return <DereksGame />;
    
    return null;
  }

  return (
    <Slide direction='right' in>
      <section style={{ width: '100%', height: '100%'}}>
        { game ? gameMarkup() : <SplitSelector selections={ games } setSelection={ setGame }/> }
      </section>
    </Slide>
  );
}
