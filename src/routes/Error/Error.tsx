import React from 'react';
import { useRouteError } from "react-router-dom";
import './Error.css';

interface ErrorData {
  statusText:string,
  message:string,
}

export default function Error() {
  const { statusText, message } = useRouteError() as ErrorData;

  return(
    <div className='error-container'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
}
