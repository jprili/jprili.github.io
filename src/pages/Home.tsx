import * as THREE from "three";
import { 
    Canvas, type ThreeElements
} from "@react-three/fiber";
import { useRef, useState} from "react";
import {
    Edges, 
    OrbitControls, 
    Html,
} from "@react-three/drei";

// @ts-ignore
import cv from "../../res/cv_jprili_2026.pdf";

const SurfaceLink = (
    props: any
) => {
    const meshRef = useRef<THREE.Mesh>(null!);
    return (
        <mesh 
            ref={meshRef}
            position={props.position} 
        >
            <Html 
                center
                occlude="blending"
                distanceFactor={15}
                material={
                    <meshBasicMaterial
                        transparent
                        opacity={0}
                    />
                }
                onClick = { props.onClick || null }
            >
                <span className="i-link">
                    <a 
                        href={props.to} 
                        download={props.download || null}
                        target="_blank"
                    >
                        {props.display}
                    </a>
                </span >
            </Html>
        </mesh>
    );
}

const Model = (props: ThreeElements["mesh"]) => {
    return (
        <group>
            <mesh {...props}
            occlusionTest={true}
            >
                <meshToonMaterial
                    transparent
                    opacity={0}
                />
                <Edges 
                    lineWidth={2}
                    color={"black"}
                    occlusionTest={true}
                />
                <dodecahedronGeometry
                    args={[1, 0]}
                />
            </mesh>
            <SurfaceLink 
                position={
                    new THREE.Vector3(1, 1, 1)
                    .normalize()
                    .multiplyScalar(1.2)
                }
                to={"#"}
                display={"home"}
            />
            <SurfaceLink
                position={
                    new THREE.Vector3(-1, -1, -1)
                    .normalize()
                    .multiplyScalar(1.2)
                }
                to={"#/projects"}
                display={"projects"}
            />
            <SurfaceLink
                position={
                    new THREE.Vector3(1, -1, -1)
                    .normalize()
                    .multiplyScalar(1.2)
                }
                to={"#/experience"}
                display={"experience"}
            />
            <SurfaceLink
                position={
                    new THREE.Vector3(-1, 1, 1)
                    .normalize()
                    .multiplyScalar(1.2)
                }
                to={cv}
                display={"download CV"}
                download={"cv_jprili_2026.pdf"}
            />
        </group>
    )
}


const Home = () => {
    const modelRef = useRef<THREE.Mesh>(null!);
    const [isAutoRotate, setAutoRotate] = useState(true);
    return (
        <div className="content home">
            <Canvas 
                camera={{
                    position: [0, 0, 5],
                    zoom: 3,
                    fov: 90
                }}
                style={{ 
                    height: "65vh", 
                    backgroundColor: "transparent"
                }}
                
            >
                <Model
                    ref={modelRef}
                    onClick={() => setAutoRotate(false)}
                />
                <ambientLight
                    intensity={Math.PI / 2}
                /> 
                <OrbitControls  
                    autoRotate = {isAutoRotate}
                    enableZoom = {false}
                />
            </Canvas>
        </div>
    );
}

export default Home;