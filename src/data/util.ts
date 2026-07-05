import { Vector3 } from "three";

export const GOL_RAT = (1 + Math.sqrt(5)) / 2;

export const normVec = (vec: number[]): Vector3 => { 
    return new Vector3(...vec).normalize();
}