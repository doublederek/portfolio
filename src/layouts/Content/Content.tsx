import './Content.css';
import React, { useEffect, useState } from 'react';
import { subrouteMap } from '../../data/routes';
import { useLocation } from 'react-router-dom';

interface ContentProps {
  content: string
}

export default function Content({ content }: ContentProps) {
  // const [subroute, setSubroute] = useState('home')
  // const location = useLocation();

  // useEffect(() => {
  //   let route = location.hash.substring(1);

  //   if (route)
  //     setSubroute(route);
  // }, [location]);

  const contentMarkup = (subrouteMap as any)[content];
  
  return(
    <main className='content-container'>
      { contentMarkup }
    </main>
  );
}
