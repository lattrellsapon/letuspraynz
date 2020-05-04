import React from 'react';
import { Countdown } from '../layout/Countdown';

import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='text-center'>
      <ul>
        <li className='nav-link'>
          <Link to='/' className='nav-link-item'>
            HOME
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/about' className='nav-link-item'>
            ABOUT
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/prayer-intentions' className='nav-link-item'>
            PRAYER INTENTIONS
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/contact' className='nav-link-item'>
            CONTACT
          </Link>
        </li>
      </ul>
      <div>
        <Countdown />
      </div>
    </nav>
  );
};
