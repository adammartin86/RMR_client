import React, { useState, useEffect } from 'react';
import Sidebar from './Home/Navbar';
import Auth from './Auth/Auth';
import BuildIndex from './Builds/BuildIndex';
import Background from '../src/video/background.mp4';


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
    <div className="container" >
          <video autoPlay loop muted id="background"
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}>
                <source src={Background} type="video/mp4" />
            </video>
      <Sidebar clickLogout={clearToken} />
      {protectedViews()}
    </div>
  );
}

export default App;
