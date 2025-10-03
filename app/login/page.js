'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setErrorMsg(error.message);
    else alert('Check your email for login link!');
    setLoading(false);
  }

  async function signInWithFacebook() {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'facebook' });
    if (error) setErrorMsg(error.message);
  }

  return (
    <div style={{ maxWidth: 320, margin: 'auto', padding: '2rem', backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <h1>Login or Sign Up</h1>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '1rem', marginBottom: '1rem', borderRadius: 6, border: 'none' }}
      />
      <button onClick={signInWithEmail} disabled={loading} style={{ width: '100%', padding: '1rem', borderRadius: 6 }}>
        {loading ? 'Sending...' : 'Send Magic Link'}
      </button>
      <hr style={{ margin: '1rem 0', borderTop: '1px solid gray' }} />
      <button onClick={signInWithFacebook} style={{ width: '100%', padding: '1rem', borderRadius: 6, backgroundColor: '#3b5998', color: 'white', border: 'none' }}>
        Continue with Facebook
      </button>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
    </div>
  );
  }
