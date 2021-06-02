import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import GhostList from '../components/list/GhostList';
import Spinner from '../components/spinner/Spinner';
import { summonGhosts } from  '../services/api-utils';

const Ghost = () => {
    const [ghosts, setGhosts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        summonGhosts()
            .then(setGhosts)
            .finally(() => setLoading(false))
    })

    if (loading) return <Spinner />

    return (
        <>
            <Header />
            <main>
                <GhostList ghosts={ghosts}/>
            </main>
        </>
    )
}

export default Ghost;
