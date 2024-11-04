import './Learn.css';
import React from 'react';
import Module from './components/Module';
import { Slide } from '@material-ui/core';
import { course } from './course';
import { ModuleData } from '../../../../data/types';

export default function Learn() {
  return (
    <Slide direction='left' in>
      <section>
        <p className='learn-description'>Currently in development</p>
        <p className='learn-description'>In this section, you will find sample curriculum for the first three weeks of a TypeScript course I am designing. This curriculum serves as a demonstration of my expertise in instructional design and my ability to create engaging and comprehensive learning materials. As someone who's truly passionate about both web development and teaching, I'm your go-to person for delivering top-notch instruction and creating killer curricula. Whether you're in search of an experienced instructor or a curriculum whiz, I'm all about providing amazing educational experiences that cater to your needs.</p>
        {
          course.modules.map((module: ModuleData) => 
            <Module 
              title={ module.title } 
              subtitle={ module.subtitle } 
              description={ module.description } 
              items={ module.items } /> 
          )
        }
      </section>
    </Slide>
  );
}
