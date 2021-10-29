import React, { useState, useEffect, useContext } from 'react';
import GhostList from '../components/list/GhostList';
import Spinner from '../components/spinner/Spinner';
import { useGhost } from '../hooks/useGhost';

const Ghost = () => {
    const { ghosts, loading } = useGhost();
    
    if (loading) return <Spinner />

    return (
        <main>
            <GhostList ghosts={ghosts}/>
        </main>
    )
}

export default Ghost;
