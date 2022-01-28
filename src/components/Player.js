import logo from '../logo.svg';
import React, { useEffect, useState } from 'react';
import { usePhysics } from '../hooks/usePhysics';
import { GRAVITY, JUMP_VELOCITY, makeVector } from '../util/util';

const playerStates = {
    RUNNING: Symbol("running"),
    JUMPING: Symbol("jumping")
};

function Player() {
    const [state, setState] = useState(playerStates.RUNNING);
    const position = makeVector(useState(100), useState(100));
    const velocity = makeVector(useState(0), useState(0));
    const acceleration = makeVector(useState(0), useState(GRAVITY));
    
    useEffect(() => {
        const jump = (event) => {
            velocity.setY(JUMP_VELOCITY);
            setState(playerStates.JUMPING);
        };
        window.addEventListener('keydown', jump);
        return () => {
            window.removeEventListener('keydown', jump);
        };
    }, []);

    usePhysics(position, velocity, acceleration);

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" 
                style={{
                    position: 'absolute',
                    top: position.y + 'px',
                    left: position.x + 'px'
                }}/>
        </>
    );
}

export default Player;

