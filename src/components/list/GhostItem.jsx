import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Ghost.module.css';

const GhostItem = ({ img, name, description, theme }) => (
    <figure  
        aria-label='ghost item'
        className={`${theme === true ? styles.up : styles.down}`}
        data-testid={`${theme === true ? 'up' : 'down'}`}>
            <img src={img} alt={name}/>
            <figcaption className={styles.name}>{name}</figcaption>
            <figcaption className={styles.hoverCaption}>{description}</figcaption>
    </figure>
)


GhostItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    theme: PropTypes.bool.isRequired
}

export default GhostItem;
