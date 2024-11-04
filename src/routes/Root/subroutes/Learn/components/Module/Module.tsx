import './Module.css';
import React, { useState } from 'react';
import { ModuleData } from '../../../../../../data/types';

export default function Module({ title, subtitle, description, items }: ModuleData) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return(
    <section className='module-container' onClick={ toggleExpanded }>
      <p className='module-header'>
        <section style={{ display: 'flex' }}>
          <section style={{ flex: '1 1 auto' }}>
            <span className='module-title'>{ title }: </span>
            <span className='module-subtitle'>{ subtitle }</span>
          </section>
          <span className='module-description'><em>{ description }</em></span>
        </section>
        { expanded ? <hr /> : null }
      </p>
      { expanded ? (
        <section className='module-items-container'>
          <ul>
            { items.map((item: any, index: number) => <li className='module-item' key={ index }>{ item }</li>) }
          </ul>
        </section>
        ) : <p className='module-expand-click'>Click to expand...</p>
      }
    </section>
  );
}
