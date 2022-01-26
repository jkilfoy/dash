import logo from '../logo.svg';
import React, { useEffect, useState } from 'react';

function Player() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [dx, setDx] = useState(0);
    const [dy, setDy] = useState(0);
    const [ax, setAx] = useState(0);
    const [ay, setAy] = useState(0);
    

    useEffect(() => {
        const jump = (event) => {
            setAy(20);
        };
        window.addEventListener('keydown', jump);
        return () => {
            window.removeEventListener('keydown', jump);
        };
    }, []);

    const update = () => {

    }

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" 
                style={{
                    position: 'absolute',
                    top: 100 - y + 'px',
                    left: 100 - x + 'px'
                }}/>
        </>
    );
}

export default Player;

