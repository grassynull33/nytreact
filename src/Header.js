import React from 'react';

const Header = (props) => {
  return (
    <div className='jumbotron'>
      <div className='container'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Header;
