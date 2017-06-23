import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className='jumbotron'>
      <div className='container text-center'>
        <h1>{props.title}</h1>
        <p className='text-center'>{props.description}</p>
      </div>
    </div>
  );
};

export default Header;
