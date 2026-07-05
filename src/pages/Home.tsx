import * as THREE from "three";
import { 
    Canvas, useFrame, useThree, type ThreeElements
} from "@react-three/fiber";
import { useRef, useState } from "react";
import {
    Edges, OrbitControls, Html, TrackballControls
} from "@react-three/drei";

const Dodecahedron = (props: ThreeElements["mesh"]) => {
    return (
        <mesh {...props}>
        <meshBasicMaterial 
            color={"white"}
            transparent={true}
            opacity={0.2}
        />
        <Edges
            transparent
            opacity={0.8}
            lineWidth={2}
            scale={1}
            threshold={10}
            color={0x000000}
        />
        <dodecahedronGeometry args={[1, 0]}/>
        </mesh>
    )
}

const SurfaceLinks = (
    props: any
) => {
    const [isBlending, setBlending] = useState(false);

    const { camera } = useThree();

    const linkRef  = useRef<THREE.Mesh>(null!);
    const worldPos = useRef(new THREE.Vector3());
    const offset   = useRef(props.offset);
    
    useFrame(() => {
        linkRef.current.getWorldPosition(worldPos.current); 
        worldPos.current.add(offset.current);
        const distance = camera
            .position.distanceTo(worldPos.current);
        if ((distance > 5) !== isBlending)
        setBlending(distance > 5);
    });
    return (
        <mesh ref={linkRef}>
        <Html 
            center
            occlude={isBlending ? "blending" : "raycast"}
            position={
                props.offset
            } 
            distanceFactor={5}
        >
            <div className="i-link">
                <a href={props.to}>{props.display}</a>
            </div>
        </Html>
        </mesh>
    );
}

const Home = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [isTrackball, setTrackball] = useState(false);
    return (
        <div className="content home">
            <Canvas 
                camera={{
                    position: [0, 0, 5],
                    fov: 50
                }}
                style={{ 
                    height: "65vh", 
                    backgroundColor: "transparent"
                }}
            >
                <Dodecahedron
                    position={[0, 0, 0]} 
                    ref={meshRef}
                    onClick={() => setTrackball(true)}
                />
                <SurfaceLinks 
                    offset={
                        new THREE.Vector3(1, 1, 1)
                        .normalize()
                        .multiplyScalar(1.2)
                    }
                    to={"#"}
                    display={"home"}
                />
                <SurfaceLinks 
                    offset={
                        new THREE.Vector3(-1, 0, 1)
                        .normalize()
                        .multiplyScalar(1.2)
                    }
                    to={"#/projects"}
                    display={"projects"}
                />
                <OrbitControls 
                    enabled={!isTrackball} 
                    autoRotate = {!isTrackball}
                    enableZoom = {false}
                />
                <TrackballControls 
                    enabled={isTrackball}
                    noZoom={true}
                />
            </Canvas>
        </div>
    );
}

export default Home;