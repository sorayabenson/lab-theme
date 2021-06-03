import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const GhostContext = createContext();

const GhostProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);

    const flipGhosts = () => {
        if (theme === true) {
            setTheme(false)
        } else {
            setTheme(true)
        }
    }

    const state = { theme, flipGhosts };
    
    return ( 
        <GhostContext.Provider value={state}>{children}</GhostContext.Provider>
    )
}

export const useGhosts = () => {
    return useContext(GhostContext);
}

export const useFlip = () => {
    const { flipGhosts } = useContext(GhostContext);
    return flipGhosts;
}

export const useTheme = () => {
    const { theme } = useContext(GhostContext);
    return theme;
}

GhostProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GhostProvider;
