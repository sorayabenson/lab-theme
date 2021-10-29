import { useState, useEffect } from 'react';
import { summonGhosts } from  '../services/api-utils';

export const useGhost = () => {
    const [ghosts, setGhosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        summonGhosts()
            .then(setGhosts)
            .finally(() => setLoading(false))
    })

    return { ghosts, loading }
}