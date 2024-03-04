import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PatientsDetail from '../src/pages/PatientsDetail'
import DoctorDetails from './pages/DoctorDetails';
import Add from './pages/Add';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));



 const router =  createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
 {
   path:"/patients",
   element:<PatientsDetail />
 },
 {
  path:'/Add',
  element:<Add />

 },
 {
  path:'/DoctorDetails',
  element: <DoctorDetails />
  

 }

 ])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
