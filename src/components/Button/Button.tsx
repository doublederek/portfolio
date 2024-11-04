import './Button.css';
import React from 'react';
import { BsFillGearFill, BsAwardFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  plain?: boolean,
  small?: boolean,
  label?: string,
  icon?: string,
  url?: string,
}

export default function Button({ plain, small, label, icon, url }: ButtonProps) {
  const navigate = useNavigate();

  const determineIcon = () => {
    return icon === 'BsFillGearFill' ? <BsFillGearFill size={ '1.75em' } /> : <BsAwardFill size={ '1.75em' } />;
  }

  const iconMarkup = icon ? (
    determineIcon()
  ) : null;

  const labelMarkup = label ? label : null;

  return(
    <section className={ `button-container ${ plain ? 'plain' : small ? 'small' : 'normal' }` } onClick={ () => navigate(url) }>
      { iconMarkup }
      { labelMarkup }
    </section>
  );
}
