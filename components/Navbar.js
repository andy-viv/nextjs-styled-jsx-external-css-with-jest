import React from 'react';
import navstyles from '../styles/navbar.scss';

export default () => {
  return (
    <div>
      <style jsx>{navstyles}</style>
      <h1>navbar: using it's parent's style</h1>
      <p>navbar: with a paragraph using the local style</p>
      <p className="apples">navbar: another with a specific className style</p>
    </div>
  );
};
