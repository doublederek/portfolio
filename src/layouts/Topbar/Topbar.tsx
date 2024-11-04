import './Topbar.css';
import React from 'react';
import Button from '../../components/Button';

interface TopbarProps {
  withAuth?: boolean
}

export default function Topbar({ withAuth = false }: TopbarProps) {
  const authMarkup = withAuth ? (
    <section className='topbar-actions'>
      <Button small icon='BsAwardFill' />
      <Button small icon='BsFillGearFill' />
      <Button label='Log out' />
    </section>
  ) : <span className='topbar-titles'>FRONT END DEVELOPER // GAME DEVELOPER // EDUCATOR</span>;

  return(
    <header className='topbar-container'>
      <section className='topbar-derek-bio'>
        <span style={{ fontSize: '1.75em', fontFamily: 'Lot' }}>DEREK LEDOUX</span>
      </section>
      { authMarkup }
    </header>
  );
}
