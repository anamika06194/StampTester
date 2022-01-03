import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import Home from './Home';
import firebase from './Firebase/firebase';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

  return (
    <div className="app">
      {user ? <Home user = {user} /> : <SignIn />}
    </div>
  );
}

export default App;
