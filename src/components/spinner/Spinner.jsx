import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Spinner.module.css';

const Spinner = props => {
    return (
        <div className={styles.spinner}>
            <h2>your ghosts will be with you shortly</h2>
        </div>
    )
}

Spinner.propTypes = {

}

export default Spinner
