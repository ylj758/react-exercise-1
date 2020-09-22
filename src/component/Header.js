import React from 'react';
import Avatar from '../assets/avatar.jpg';

export default function Header() {
  const hello = 'HELLO,';
  const myName = 'MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV';
  return (
    <header>
      <div className="dimg">
        <img src={Avatar} alt="avatar" className="avatar" />
      </div>
      <h1 className="hello">{hello}</h1>
      <h1>{myName}</h1>
      <div className="line"></div>
    </header>
  );
}
