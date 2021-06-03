import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header/Header';
import GhostList from '../components/list/GhostList';
import Spinner from '../components/spinner/Spinner';
import { useTheme } from '../provider/GhostProvider';
import { useGhost } from '../hooks/useGhost';

const Ghost = () => {
    const { ghosts, loading } = useGhost();
    const theme = useTheme();
    
    if (loading) return <Spinner />

    return (
        <main>
            <GhostList theme={theme} ghosts={ghosts}/>
        </main>
    )
}

export default Ghost;
