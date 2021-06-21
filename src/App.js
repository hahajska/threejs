import "./App.scss";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { DirectionalLight } from "three";
import { MeshWobbleMaterial } from "../node_modules/drei/MeshWobbleMaterial";
import { OrbitControls } from "../node_modules/drei/OrbitControls";
//
const Box = ({ position, args, color, speed }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={0.5}
      />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 1, 10], fov: 60 }}
      >
        <ambientLight intensity={0.09} />

        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-bottom={10}
          shadow-camera-top={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" />
          </mesh>
        </group>

        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <Box
          position={[5, -3, -2]}
          args={[1, 5, 1]}
          color="lightblue"
          speed={0.5}
        />
        <Box position={[-7, 5, 2]} args={[3, 3, 3]} color="pink" speed={0.25} />
        <Box position={[3, 1, 2]} args={[1, 5, 1]} color="purple" speed={1} />
        <OrbitControls />
      </Canvas>
    </>
  );
}
export default App;
