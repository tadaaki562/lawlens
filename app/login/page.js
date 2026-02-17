'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ backgroundColor: '#e3d3bc' }}>
      {/* Back Button */}
      <Link href="/" className="absolute top-6 left-6 px-4 py-2 rounded font-medium hover:opacity-80 transition" style={{ backgroundColor: '#313236', color: '#e3d3bc' }}>
        ← Back
      </Link>

      <div className="w-full max-w-md rounded-lg p-8 shadow-2xl" style={{ backgroundColor: '#f5f5f5' }}>
        <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#313236' }}>
          Login
        </h1>

        {/* Email Input */}
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-sm focus:outline-none"
            style={{
              borderBottom: `2px solid #735148`,
              backgroundColor: '#f5f5f5',
              color: '#313236'
            }}
          />
        </div>

        {/* Password Input */}
        <div className="mb-8">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 text-sm focus:outline-none"
            style={{
              borderBottom: `2px solid #735148`,
              backgroundColor: '#f5f5f5',
              color: '#313236'
            }}
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full py-3 rounded font-bold text-white mb-6 hover:opacity-90 transition"
          style={{ backgroundColor: '#313236' }}
        >
          Login
        </button>

        {/* Forgot Password */}
        <div className="text-center mb-4">
          <a href="#" className="text-sm hover:underline" style={{ color: '#735148' }}>
            Forgot Password?
          </a>
        </div>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          <span style={{ color: '#735148' }}>Don't have an account? </span>
          <Link href="/signup" className="font-semibold hover:underline" style={{ color: '#313236' }}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
