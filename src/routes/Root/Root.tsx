import './Root.css';
import React, { useState } from 'react';
import Sidebar from '../../layouts/Sidebar';
import Topbar from '../../layouts/Topbar';
import Content from '../../layouts/Content';

export default function Root() {
  const [content, setContent] = useState('home');

  return(
    <section className='root-container'>
      <Topbar />
      <section className='root-content-container'>
        <Sidebar setContent={ setContent }/>
        <Content content={ content }/>
      </section>
    </section>
  );
}
