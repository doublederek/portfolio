import './TarotCards.css';
import React, { useState } from 'react';
import { useSprings, animated, to as interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { TarotCard } from '../../../data/types';

interface TarotCardsProps {
  cards: TarotCard[],
}

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: any) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = (i: any) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: any, s: any) => `perspective(1500px) rotateX(30deg) rotateY(${ r / 10 }deg) rotateZ(${ r }deg) scale(${ s })`

export default function TarotCards({ cards }: TarotCardsProps) {
  const [active, setActive] = useState(false);
  const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    set.start((i) => {
      if (index !== i) 
        return // We're only interested in changing spring-data for the current spring
      
      if (active !== down)
        setActive(down);

      const x = 0;
      const y = down ? -100 : 0;
      const rot = mx / 100 + ( 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.5 : 1 // Active cards lift up a bit
      return { 
        x, 
        y,
        rot, 
        scale, 
        delay: undefined, 
        config: { 
          friction: 50, 
          tension: down ? 800 : 500 
        } 
      }
    })
    }
  );

  const dataMarkup = active ? (
    <section className='tarot-cards-data'>
      <section className='tarot-cards-data-text'>
        <h2>{ cards[cards.length - 1].data.name }</h2>
        <br/>
        <h3>Keywords:</h3>
        <p>{ cards[cards.length - 1].data.keywords.toString().replace(/,/g, ', ') }</p>
        {
          <section style={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
            <div style={{ marginRight: '64px' }} className='tarot-text-horizontal'>
              <p>Fortunes:</p>
              { cards[cards.length - 1].data.fortune_telling.map((fortunes, index) => {
                return <li key={ index }>{ fortunes } </li>
              }) }
            </div>
            <div style={{ marginLeft: '64px' }} className='tarot-text-horizontal'>
              <p>Questions to ask:</p>
              { cards[cards.length - 1].data['Questions to Ask'].map((questions, index) => {
                return <li key={ index }>{ questions }</li>
              }) }
            </div>
            </section>}
      </section>
    </section>
  ) : null;

  return(
    <>
      <section className='tarot-cards-group'>
        {
          props.map(({ x, y, rot, scale }, i) => (
            <animated.div key={ i } style={{ x, y }} className='tarot-cards-deck'>
              { /* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */ }
              <animated.div { ...bind(i) } style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${ cards[i].url })` }} className='tarot-cards-card'/>
            </animated.div>
        ))}
        { dataMarkup }
      </section>
      
    </>
  );
}
