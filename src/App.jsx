import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components/index';
import { Outlet } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="flex w-full h-screen justify-center items-center">
          <PacmanLoader />
        </div>
      ) : (
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
          <div className='w-full block'>
            <Header />
            <main>
              <h2 className='mt-1 uppercase font-bold'> Blogs : </h2>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
