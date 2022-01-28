import { useEffect } from "react";
import { clip } from "../util/util";
import { useFrameTime } from "./useFrameTime";

const border = {
    LEFT: 0, RIGHT: window.innerWidth,
    TOP: 0, BOTTOM: window.innerHeight / 1.5 // for some reason innerheight is going below page? 
};

export const usePhysics = (position, velocity, acceleration) => {
    const frameTime = useFrameTime();

    useEffect(() => {
        position.setX(clip(position.x + velocity.x, border.LEFT, border.RIGHT));
        position.setY(clip(position.y + velocity.y, border.TOP, border.BOTTOM));
        velocity.setX(velocity.x + acceleration.x);
        velocity.setY(velocity.y + acceleration.y);
    }, [frameTime])
}