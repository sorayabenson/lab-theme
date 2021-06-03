import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header/Header';
import GhostList from '../components/list/GhostList';
import Spinner from '../components/spinner/Spinner';
import { useTheme, useFlip } from '../provider/GhostProvider';
import { useGhost } from '../hooks/useGhost';

const Ghost = () => {
    const { ghosts, loading } = useGhost();
    const [theme, setTheme] = useState(true);

    const flipGhosts = () => {
        if (theme === true) {
            setTheme(false)
        } else {
            setTheme(true)
        }
    }
    
    // const { theme, flipGhosts } = useContext(GhostContext);
    // const theme = useTheme();
    // const flipGhosts = useFlip();

    if (loading) return <Spinner />

    return (
        <>
            <Header theme={theme} onChange={flipGhosts}/>
            <main>
                <GhostList theme={theme} ghosts={ghosts}/>
            </main>
        </>
    )
}

export default Ghost;
