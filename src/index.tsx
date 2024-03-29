import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard/Dashboard';
import VideoListing from './pages/VideoListing/VideoListing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: '/videos',
    element: <VideoListing />
  }
//   {
//     path: "*",
//     element: <NotFound />
//   }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
