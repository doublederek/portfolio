import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom';
import Root from './routes/Root';
import Error from './routes/Error';

const routerOptions = {
  path: '/',
  element: <Root />,
  errorElement: <Error />,
  basename: '/demo',
};

const router = (process.env.NODE_ENV === 'production') ? createHashRouter([routerOptions]) : createBrowserRouter([routerOptions]);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router={ router } />);
