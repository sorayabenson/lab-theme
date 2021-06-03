import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Header.module.css';
import { useTheme, useFlip } from '../../provider/GhostProvider';

const Header = () => {
    const theme = useTheme();
    const flipGhosts = useFlip();
    
    return (
    <header className={`${theme === true ? styles.up : styles.down}`}>
        <h1>ghost flip</h1>
        <label className={styles.toggle}>
            <input 
                onClick={flipGhosts}
                type='checkbox' 
                aria-label='theme switch'/>
            <span className={styles.slider}></span>
        </label>
        <label className={styles.text}>flip the switch, flip the ghosts</label>
    </header>
    )
}

export default Header;
