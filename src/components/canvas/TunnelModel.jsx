// import React, { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { easing } from "maath"; // For smooth camera movements

// // ✅ Tunnel Camera Controller: Moves forward when scrolling
// const TunnelCamera = () => {
//   const cameraRef = useRef();
//   const [startedScrolling, setStartedScrolling] = useState(false);

//   useFrame(({ camera }) => {
//     if (!cameraRef.current) {
//       cameraRef.current = camera;
//       cameraRef.current.position.set(0, 1.5, 5); // Start at entrance
//     }

//     if (!startedScrolling) {
//       easing.damp3(camera.position, [0, 1.5, 10], 0.2, 0.8); // Initial smooth movement
//     }
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!startedScrolling) {
//         setStartedScrolling(true);
//       }

//       if (cameraRef.current) {
//         cameraRef.current.position.z -= window.scrollY * 0.005; // Moves forward on scroll
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [startedScrolling]);

//   return null;
// };

// // ✅ Tunnel Model: Load and position the tunnel
// const TunnelModel = () => {
//   const { scene } = useGLTF("./freeabstract_tunnel/tunnel.gltf"); // Load Tunnel Model
//   return <primitive object={scene} scale={2.5} position={[0, -2, 0]} />;
// };

// // ✅ Render the Canvas Scene for Tunnel
// const TunnelCanvas = () => {
//   return (
//     <Canvas
//       camera={{ fov: 50, near: 0.1, far: 200, position: [0, 2, 10] }}
//       style={{ height: "100vh", width: "100%" }}
//     >
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[0, 5, 5]} intensity={1} />
//       <OrbitControls enableZoom={false} />
//       <TunnelCamera /> {/* ✅ Moves the camera forward on scroll */}
//       <TunnelModel /> {/* ✅ Displays the tunnel model */}
//     </Canvas>
//   );
// };

// export default TunnelCanvas;


import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { easing } from "maath"; // Smooth camera transitions

// ✅ Tunnel Camera Controller: Moves forward when scrolling
const TunnelCamera = ({ onZoomComplete }) => {
  const cameraRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);

  useFrame(({ camera }) => {
    if (!cameraRef.current) {
      cameraRef.current = camera;
      cameraRef.current.position.set(0, 1.5, 10); // Start at entrance
    }

    // Move camera forward based on scroll
    const targetZ = Math.max(10 - scrollProgress * 0.05, -10);
    easing.damp3(camera.position, [0, 1.5, targetZ], 0.2, 0.8);

    // Trigger content appearance when fully zoomed
    if (targetZ <= -10) {
      onZoomComplete();
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

// ✅ Tunnel Model: Load and position the tunnel
const TunnelModel = () => {
  const { scene } = useGLTF("./freeabstract_tunnel/tunnel.gltf"); // Ensure correct path
  return <primitive object={scene} scale={2.5} position={[0, -2, 0]} />;
};

// ✅ Render the Tunnel Scene
const TunnelCanvas = ({ onZoomComplete }) => {
  return (
    <Canvas
      camera={{ fov: 50, near: 0.1, far: 200, position: [0, 2, 10] }}
      style={{ height: "100vh", width: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <TunnelCamera onZoomComplete={onZoomComplete} /> {/* ✅ Syncs zoom with content */}
      <TunnelModel />
    </Canvas>
  );
};

export default TunnelCanvas;
