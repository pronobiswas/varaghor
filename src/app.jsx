import { useState } from 'preact/hooks'
import './app.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider, Outlet
} from "react-router-dom";
import RootLayout from './layout/RootLayout';
import Homepage from './pases/homePage/Homepage';
import ErrorPage from './pases/error/ErrorPage';



export function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        <Route element= {<RootLayout/>}>
          <Route path='/' element={<Homepage/>} />
          <Route path='/err' element={<ErrorPage/>} />
        </Route>
      </>
    )
  );
  

  return (
    <>
      
      <RouterProvider
      router={router}
      />
    </>
  )
}
