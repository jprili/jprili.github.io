import portrait from "../../res/portrait.jpg";
import * as THREE from "three";
import { Canvas, type ThreeElements} from "@react-three/fiber";
import { useRef, useState } from "react";
import { TrackballControls, Edges, OrbitControls } from "@react-three/drei";

const Dodecahedron = (props: ThreeElements["mesh"]) => {
    return (
        <mesh {...props}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshBasicMaterial 
            color={"white"} 
            transparent={true}
            opacity={0.1}
        />
        <Edges
            lineWidth={2}
            scale={1}
            threshold={10}
            color={0x000000}
        />
        </mesh>
    )
}

const Home = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [trackballEnabled, setTrackballEnabled] = useState(false);
    return (
        <div className="content home">
            <Canvas>
                <Dodecahedron 
                    position={[0, 0, 0]} 
                    rotation={[1, 1, 0]}
                    ref={meshRef}
                    onClick={() => setTrackballEnabled(true)}
                />
                <OrbitControls 
                    enabled={!trackballEnabled} 
                    autoRotate = {true}
                />
                <TrackballControls enabled={trackballEnabled}/>
            </Canvas>
        </div>
    );
}

export default Home;