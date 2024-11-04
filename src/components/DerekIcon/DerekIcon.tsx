import './DerekIcon.css';
import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';

interface DerekIconProps {
  setContent: (content: string) => void,
}

export default function DerekIcon({ setContent }: DerekIconProps) {
  return(
    <section className='derek-icon-container'>
      <Nav.Link onClick={ () => setContent('derek') }>
        <img src='https://raw.githubusercontent.com/doublederek/demo/main/assets/derek.png' className='derek-icon-image'/>
      </Nav.Link>
    </section>
  );
}
