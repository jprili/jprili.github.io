import portrait from "../../res/portrait.jpg";
import * as THREE from "three";
import { Canvas, type ThreeElements} from "@react-three/fiber";
import { useRef, useState } from "react";
import { TrackballControls, Edges, OrbitControls, Html } from "@react-three/drei";
import { normVec, GOL_RAT} from "../data/util"

const Dodecahedron = (props: ThreeElements["mesh"]) => {
    return (
        <mesh {...props}>
        {/* BUG: BLENDING DOES NOT WORK PROPERLY */}
        <Html 
            center
            occlude={"blending"}
            position={
                normVec([1, 1, 1])
                .multiplyScalar(1.4)
            } 
        >
            <p style={{}} >home</p>
        </Html>
        <dodecahedronGeometry args={[1, 0]}/>
        <meshBasicMaterial 
            color={"orange"} 
            transparent={true}
            opacity={1}
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
            <Canvas style={{ height: "100vh" }}>
                <Dodecahedron
                    position={[0, 0, 0]} 
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