import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { getDatabase, ref, set } from 'firebase/database';

import React, { useState } from 'react';

import './Signin.scss';

export default function Signin() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  function handleError(err) {
    console.error(err);
    alert(err);
  }

  async function signIn() {
    try {
      await signInWithEmailAndPassword(getAuth(), email, pw);
    } catch (err) {
      handleError(err);
    }
  }

  async function createUser() {
    try {
      const { user } = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        pw
      );

      set(ref(getDatabase(), `users/${user.uid}`), {
        email: user.email
      });
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <div className="Signin">
      <header>
        <h1>Everyone's a Critic</h1>
        <h3>Sign In or Sign Up</h3>
      </header>

      <div>
        <label>
          <span>Email</span>
          <input type="email" onInput={(ev) => setEmail(ev.target.value)} />
        </label>
      </div>

      <div>
        <label>
          <span>Password</span>
          <input type="password" onInput={(ev) => setPw(ev.target.value)} />
        </label>
      </div>

      <div>
        <button
          className="Signin__sign-up-in-btn"
          onClick={isSignup ? createUser : signIn}
        >
          {isSignup ? 'Sign Up' : 'Sign In'}
        </button>
      </div>

      <p className="Signin__instruction">
        {!isSignup ? `Don't` : 'Already'} have an account? Click{' '}
        <button onClick={() => setIsSignup(!isSignup)}>here</button> to sign{' '}
        {!isSignup ? 'up' : 'in'}.
      </p>
    </div>
  );
}
