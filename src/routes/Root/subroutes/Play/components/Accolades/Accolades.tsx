import './Accolades.css';
import React from 'react';
import background from './accolades.gif';
import rupee from './rupee.gif';
import Highlight from '../../../Home/components/Highlight';

export default function Accolades() {
  return(
    <section className='accolades-container' style={{ backgroundImage: `url(${ background })` }}>
      <h1 className='accolades-title'>GAME DEV ACCOLADES</h1>
        <section style={{ display: 'flex' }}>
          <section className='accolades-card' style={{ maxWidth: '60%' }}>
            <h2>Notable Releases</h2>
            <Highlight where='Happy Parade' what='WEB BROWSERS, FUEL YOUTH' when='2011' why={ ['A Lemmings meets Incredible Machines-like built for McDonalds Europe Happy Studio','Scored the highest posible score from the UK Board of Education for digital educational content for youth'] }/>
            <Highlight where='Doki Doki Universe' what='PS3, PS4, Mobiles, Browsers, HumaNature & Fuel Youth' when='2012' why={ ['Released on multiple consoles and designed by the creator of, Sega Genesis classic, Toe Jam and Earl.','Developed integrated, playful, user chat system across platforms'] }/>
            <Highlight where='IWHKBHTIAAM' what='PC, DIRTY RECTANGLES' when='2012' why={ ['"In Which Heather Kelley Begins Her Transformation Into An Aquatic Mammal"', 'Designed for a fellow game developer as a "get well" card after knee surgery', 'Referenced by game designer Doug Wilson in his PHD thesis, "Designing for the Pleasure of Disputation", as a new form of game: a personal note', 'http://doougle.net/phd/Designing_for_the_Pleasures_of_Disputation.pdf'] }/>
          </section>
          <section className='accolades-card' style={{ maxWidth: '60%' }}>
            <h2>Public Speaking</h2>
            <Highlight where='OIGC Panel Host' what='Ottawa International Game Conference' when='2011-2016' why={ ["Hosted multiple panels as representive for Ottawa's / Ontario's indie game community",'Indie Breakfast Panel, Festival of Failure', 'Arcade Dev Wizards Panel... and others.'] }/>
            <Highlight where='How to Build an Elevator' what='Canadian Gaming Expo' when='2018' why={ ['A talk about level design, inspired from teach Game Development', 'Lessons for dealing with imposter syndrome, and mastering growth'] }/>
            <Highlight where='Artist Spotlight: Guidance Counsellor' what='Ottawa Citizen' when='2018' why={ ['A chat with journalist Bruce Deauchman about my process and philosophies in game design',"A candid conversation about art and chasing life's passions"] }/>
          </section>
        </section>
        <section className='accolades-card' style={{ maxWidth: '60%' }}>
          <h2>Dirty Rectangles</h2>
          <Highlight where='Co-founder' what='13 years of game development community building' when='2010' why={ ['A collective of game developer from across Ontario, getting together and building games for the sake of it', 'Now with chapters in Ottawa & Toronto with more to come!'] }/>
          <Highlight where='Ottawa Musician Dev Group' what='Game Development Educator' when='2016' why={ ['Led a group of Ottawa musicians, over a number of weeks, in how to incorporate the Unity game engine into their live performances.', "Sponsored by Toronto's Hand Eye Society and the Ontario Arts Council."] }/>
          <Highlight where='Box Factory' what='Director of Boxes' when='2018' why={ ['Led a program to donote 1 year of free office space inside an active game studio for solo game developers', 'Ran the selection process and oversaw two years of the Box Factory, enabling impactful developers to get a leg up.'] }/>
        </section>
      <img className='accolades-rupee' src={ rupee }/>
    </section>
  );
}
