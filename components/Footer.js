import React from 'react';
import footerStyles from '../styles/footer.scss';

export default () => {
  return (
    <div>
      <style jsx>{footerStyles}</style>
      <p>footer: using it's own style</p>
      <h2 className="bananas">footer: parent class selector</h2>
      <h3 className="apples">
        footer: fails to use navbar selector until it's made global
      </h3>
    </div>
  );
};
