import React from 'react';
import PropTypes from 'prop-types';
import GhostItem from './GhostItem';
import '../../styles/Ghost.module.css'

const GhostList = ({ ghosts }) => (
        <ul aria-label='ghosts'>
            {ghosts.map((ghost) => {
                return (
                    <li
                        aria-label='ghost'
                        key={ghost.name}>
                        <GhostItem {...ghost}/>
                    </li>
                )
            })}
        </ul>
)


GhostList.propTypes = {
    ghosts: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired
}

export default GhostList;
