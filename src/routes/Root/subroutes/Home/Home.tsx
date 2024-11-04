import './Home.css';
import React from 'react';
import Highlight from './components/Highlight';
import Slide from '@material-ui/core/Slide';

const shopify = [
  'Led end-to-end project management for various initiatives at Shopify, including yearly curriculum refreshes in Dev Degree, new LMS technology implementations, and leading teams of interns through mobile and internal app development.',
  'Designed and delivered comprehensive curricula in both physical and e-learning settings, equipping Shopify developers with upgraded skills in core Computer Science, Frontend Development, and Backend Development (TypeScript, React, React Native, Ruby on Rails, MySQL, GraphQL, Kotlin, Swift).',
  'Championed a core group of 20-45 interns annually, providing guidance, mentorship, and leadership support through stand-ups, career guidance, performance reviews, and removing blockers.',
  'Defined success metrics and tripwires within the Dev Degree program using KPIs, collaborating with executive stakeholders to iterate quarterly and optimize program outcomes.',
];

const algonquin = [
  'Created and delivered engaging curricula for students, covering a range of game development subjects such as Rapid Prototyping, Level Design II, UI/UX Design, Sound Design and Gamification.',
  'Fostered a safe and encouraging learning environment, enabling students to explore and experiment, embracing failures as opportunities for growth.',
  'Identified struggling students and developed tailored learning plans to support their development and ensure future success in their careers.',
];

const fuel = [
  "Developed high-quality code and designed games for external partners, including Mattel, McDonald's, Disney, and HBO, as well as original studio IP.",
  "Received the highest rating for educational game content from the UK Board of Educators for 'Happy Parade,' a game designed by myself for McDonald's Happy Studio.",
  'Played a vital role in pitch work, research and development (R&D), and the exploration of HTML5 and Unity technologies.',
];

const uqo = [
  'Sole sound designer in an emergent virtual reality lab, responsible for creating realistic soundscapes used in psychoanalytic research conducted by the university.',
  'Conducted self-directed field recordings and coordinated recording sessions with external talent and stakeholders.',
];

const gamedev = [
  'Honed my skills in game design, learning essential principles and methodologies to create compelling gameplay mechanics, captivating narratives, and immersive player experiences.',
  'Emphasized the importance of rapid prototyping, equipping me with the ability to quickly iterate and test ideas. Developed a strong foundation in prototyping techniques, bringing concepts to life and evaluated their feasibility early.',
  'Gained comprehensive knowledge in sound design, exploring the art of creating audio assets, implementing sound effects, and composing music to enhance the overall atmosphere and immersion of game environments.',
];

const theatre = [
  'Delved into the art of playwriting, crafting compelling narratives and dialogue. Had the opportunity to direct and bring stories to life on stage, as well as explore my own talents as an actor, honing my skills in character development and performance.',
  'Gained proficiency in stage management, learning the intricacies of coordinating productions, organizing schedules, and ensuring smooth performances. Additionally, I developed technical audiovisual (AV) skills, mastering the use of sound and lighting.',
  'Built a deep understanding of narrative structure, character arcs, and the use of theatrical elements to engage and evoke meaningful responses from viewers.',
];

export default function Home() {
  return (
    <Slide direction='up' in>
      <section className='home-container'>
      <section className='home-info-row'>
        <section style={{ flex: '1 1 auto' }}>
          <div style={{ display: 'flex' }}><span style={{ flex: '1 1 auto' }}><h1>Derek Ledoux</h1>Front End Developer // Game Developer // Educator</span><span style={{ alignSelf: 'flex-end', fontSize: 'large' }}>derekledoux@gmail.com</span></div><br />
          <p>I'm a versatile developer with a passion for crafting playful experiences. Whether it's designing captivating websites and interfaces, bringing worlds to life in videogames, or creating engaging educational content, I thrive on the intersection of technology, creativity, and growth. With exceptional front-end development skills, a knack for game design, and a love for sharing knowledge, I'm excited to contribute my skills and collaborate with a team that values playful innovation and impact.</p>
        </section>
        <img src='https://raw.githubusercontent.com/doublederek/portfolio/main/assets/derek.png' />
      </section>
      <section className='home-timeline-row'>
        <section className='home-card' style={{ maxWidth: '60%' }}>
          <h2>Experience</h2>
          <Highlight where='Shopify' what='Senior Technical Educator (Dev Degree)' when='Sept 2017 - May 2023' why={ shopify }/>
          <Highlight where='Algonquin College' what='Game Development Professor' when='August 2013 - October 2017' why={ algonquin }/>
          <Highlight where='Fuel Youth' what='Game Developer & Designer' when='May 2011 - November 2013' why={ fuel }/>
          <Highlight where='UQO Cyberpsychology Research Lab' what='VR Sound Designer' when='Sept 2008 - May 2011' why={ uqo }/>
        </section>
        <section className='home-card' style={{ flex: 1 }}>
          <h2>Education</h2>
          <Highlight where='Algonquin College' what='Game Development' when='Sept 2007 - April 2010' why={ gamedev }/>
          <Highlight where='Algonquin College' what='Theatre Arts' when='Sept 2002 - April 2004' why={ theatre }/>
        </section>
      </section>
    </section>
    </Slide>
  );
}
