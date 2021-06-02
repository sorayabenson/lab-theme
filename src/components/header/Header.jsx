import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Header.module.css';

const Header = ({ theme, onChange }) => (
    <header className={styles.header}>
        <h1>ghost flip</h1>
        <label className={styles.toggle}>
            <input 
                value={theme}
                onChange={onChange}
                type='checkbox' 
                aria-label='theme switch'/>
            <span className={styles.slider}></span>
        </label>
        <label className={styles.text}>flip the switch, flip the ghosts</label>
    </header>
)

Header.propTypes = {
    // theme: PropTypes.bool.isRequired,
    // onChange: PropTypes.func.isRequired,
}

export default Header;
