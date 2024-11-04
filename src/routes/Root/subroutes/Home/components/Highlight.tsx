import React from 'react';

interface HighlightProps {
  where: string,
  what: string,
  when: string,
  why: string[],
}

export default function Highlight({ where, what, when, why }: HighlightProps) {
  return(
    <section style={{ fontFamily: 'LoveOfThunder', color: 'ghostwhite' }}>
      <span style={ styles.where }>{ where }</span> // <span style={ styles.what }>{ what }</span> // <span style={ styles.when }>{ when }</span>
      <ul style={ styles.why }>
        { why.map((item, index) => {
          return(
            <li key={ index }>{ item }</li>
          );
        }) }
      </ul>
    </section>
  );
}

const styles = {
  where: {
    fontSize: 'x-large',
    color: '#0C0C0C'
  },
  what: {
    color: '#0C0C0C'
  },
  when: {
    fontSize: 'small',
    color: '#0C0C0C'
  },
  why: {
    fontSize: 'small',
    color: '#0C0C0C'
  },
};