import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

function MainLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header> Hello Header </header>
      <div className="content">{children}</div>
      <footer>Hello Footer</footer>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
