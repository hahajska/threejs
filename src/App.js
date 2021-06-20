import "./App.scss";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

//
const Box = ({ position, args, color }) => {
  const mesh = useRef(null);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 1, 10], fov: 60 }}>
        <ambientLight intensity={0.09} />
        <pointLight position={[-10, 0, -20]} intensity={0.3} />
        <pointLight position={[0, -10, 0]} intensity={1} />
        <Box position={[0, 1, 0]} args={[1, 1, 1]} color="lightblue" />
        <Box position={[-2, 3, 1]} args={[3, 2, 1]} color="pink" />
        <Box position={[1, 3, 2]} args={[3, 3, 2]} color="red" />
      </Canvas>
    </>
  );
}

export default App;
