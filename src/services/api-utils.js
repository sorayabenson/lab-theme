export const summonGhosts = async () => {
    const res = await fetch('https://personal-ghosts.herokuapp.com/ghosts');
    const data = await res.json();

    return data;
}