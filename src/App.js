import "./App.scss";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { DirectionalLight } from "three";

//
const Box = ({ position, args, color }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
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

        <Box position={[0, 1, 0]} args={[1, 1, 1]} color="lightblue" />
        <Box position={[-2, 3, 1]} args={[3, 2, 1]} color="pink" />
        <Box position={[1, 3, 2]} args={[3, 3, 2]} color="purple" />
      </Canvas>
    </>
  );
}

export default App;
