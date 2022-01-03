import React from 'react';
import { signInWithGoogle } from './Firebase/firebase';

const SignIn = () => {
  return (
    <div>
      <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
  )
}

export default SignIn
