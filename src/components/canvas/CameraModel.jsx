import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { easing } from "maath"; // Smooth transitions

// ✅ Camera Controller: Ensures proper position first, then moves on scroll
const CameraController = () => {
  const cameraRef = useRef();
  const [adjusted, setAdjusted] = useState(false); // Track if camera has adjusted

  useFrame(({ camera }) => {
    if (!cameraRef.current) {
      cameraRef.current = camera;
      cameraRef.current.position.set(0, 1.5, 3); // Start closer (Zoomed in)
    }

    // ✅ Step 1: First, adjust camera to proper position
    if (!adjusted) {
      easing.damp3(camera.position, [0, 1.5, 6], 0.2, 0.8); // Zoom-out smoothly
      easing.dampQ(camera.quaternion, [0, 0, 0, 1], 0.2, 0.8); // Align rotation
    }
  });

  useEffect(() => {
    let scrolledOnce = false;
    const handleScroll = () => {
      if (!adjusted && !scrolledOnce) {
        setAdjusted(true); // Mark that it's adjusted
        scrolledOnce = true;
      } else if (adjusted) {
        cameraRef.current.position.y = 1.5 - window.scrollY * 0.005; // Move on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [adjusted]);

  return null;
};

// ✅ Camera Model: Ensure the front side is displayed
const CameraModel = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("./camera/scene.gltf");

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.PI / 2; // Rotate 180 degrees to face front
    }
  }, []);

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={1.2} // Adjust scale if needed
      position={[0, -1.5, 0]} // Adjust position if needed
    />
  );
};

// ✅ Render the Canvas Scene
const CameraCanvas = () => {
  return (
    <Canvas
      camera={{ fov: 50, near: 0.1, far: 200, position: [0, 2, 6], rotation: [-0.05, 0, 0] }} // Adjusted FOV & camera distance
      style={{ height: "100vh", width: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <CameraController /> {/* ✅ Ensures proper positioning, then moves */}
      <CameraModel /> {/* ✅ Rotated model to show the front side */}
    </Canvas>
  );
};

export default CameraCanvas;
