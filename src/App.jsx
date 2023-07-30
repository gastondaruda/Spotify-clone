import { useState, useEffect } from 'react'
import Login from './components/Login/Login'
import { reducerCases } from './utils/Constans';
import { useStateProvider } from './utils/StateProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Spotify from './components/Spotify/Spotify';

function App() {
  const [{token}, dispatch] = useStateProvider()
  useEffect(( ) => {
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1]
      dispatch({type: reducerCases.SET_TOKEN, token})
    }
  }, [token, dispatch])

  return (
    <>
      {token ? <Spotify /> : <Login />}
    </>
  )
}

export default App
