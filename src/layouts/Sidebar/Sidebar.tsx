import './Sidebar.css';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import DerekIcon from '../../components/DerekIcon';
import { subrouteMap } from '../../data/routes';

interface SidebarProps {
  setContent: (content: string) => void,
}

export default function Sidebar({ setContent }: SidebarProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const derekIconMarkup = (<DerekIcon setContent={ setContent }/>);

  const handleLinkClick = (subroute: string, index: number) => {
    setSelectedIndex(index)
    setContent(subroute);
  };

  const linkMarkup = Object.keys(subrouteMap).map((subroute, index) => {
    if (subroute !== 'derek')
      return(<Nav.Link active={ index === selectedIndex } key={ index } onClick={ () => handleLinkClick(subroute, index) }>{ capitalize(subroute) }</Nav.Link>);
  });

  return (
    <nav className='sidebar-container'>
      <Nav variant='pills' className='flex-column sidebar-nav'>
        { linkMarkup }
        { derekIconMarkup }
      </Nav>
    </nav>
  );
};

const capitalize = (chars: string) => {
  return chars.charAt(0).toUpperCase() + chars.slice(1);
}
