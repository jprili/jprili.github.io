import portrait from "../../res/portrait.jpg";
import * as THREE from "three";
import { Canvas, useFrame, type ThreeElements} from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { TrackballControls } from "three/examples/jsm/Addons.js";

const Box = (props: ThreeElements["mesh"]) => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((_, delta) => (meshRef.current.rotation.x += delta))    
    return (
        <mesh
            {...props}
            ref = {meshRef}
            scale = {active ? 1.5 : 1}
            onClick = { () => setActive(!active) }
            onPointerOver = { () => setHover(true) }
            onPointerOut  = { () => setHover(false) }
            >
        <dodecahedronGeometry args={[1, 0]} />
        <meshPhongMaterial color = {hovered ? 0xffff00 : "white"}/>
        </mesh>
    )
}

const Home = () => {

    return (
        <div className="content home">
            <Canvas>
                <ambientLight intensity = {Math.PI / 2} />
                <spotLight 
                    position = {[10, 10, 10]} 
                    angle    = { 0.15 }
                    penumbra = {1}
                    decay    = {0}
                    intensity = { Math.PI } 
                />
                <Box position={[0, 0, 0]}/>
            </Canvas>
        </div>
    );
}

export default Home;