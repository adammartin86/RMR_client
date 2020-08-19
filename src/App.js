import React, { useState, useEffect } from 'react';
import Sidebar from './Home/Navbar';
import Auth from './Auth/Auth';
import BuildIndex from './Builds/BuildIndex';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <BuildIndex token={sessionToken} />
      : <Auth updateToken={updateToken} />)
  }

  return (
    <div >
      <Sidebar clickLogout={clearToken} />
      {protectedViews()}
    </div>
  );
}

export default App;
