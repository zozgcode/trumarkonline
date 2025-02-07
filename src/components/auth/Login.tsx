'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <Header />
      <div className="h-screen">
        <div className="bg-[#ffffff] mx-auto w-full py-7">
          <div className="flex flex-col items-center justify-center">
            <Image src="https://i.imgur.com/wGWbfZo.png" width={180} height={28} className="w-[280px]" alt="logo" />
            <div className="mt-3">{error && <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-3 p-5 py-8">
              <div className="flex relative flex-col gap-3">
                <label htmlFor="Username" className="text-[#333333] text-[16px]">
                  Username
                </label>
                <input type="text" value={username} className="p-4 py-3 rounded-[6px] text-[#333333] bg-transparent border border-gray-300 outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="flex relative flex-col gap-3">
                <label htmlFor="Username" className="text-[#333333] text-[16px]">
                  Password
                </label>
                <input type="password" value={password} className="p-4 py-3 rounded-[6px] text-[#333333] bg-transparent border border-gray-300 outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-3">
                <button type="submit" className="p-4 py-3 bg-[#007680] w-full text-white font-semibold rounded-md">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}
