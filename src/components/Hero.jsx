// import React from "react";
// import { CameraCanvas } from "./canvas"; // Importing from index.js
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white bg-black overflow-hidden">
//         {/* 3D Model Background */}
//         <div className="absolute inset-0 z-0">
//           <CameraCanvas />
//         </div>

//         {/* Hero Content */}
//         <motion.div
//           className="relative z-10 max-w-3xl"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl font-bold">Welcome to Sterniz</h1>
//           <p className="mt-4 text-lg">
//             Experience True Camera Security Agility
//           </p>
//           <p className="mt-4 text-lg">
//             Create a digital twin of your existing security system and unlock the potential of advanced camera security.
//           </p>
//         </motion.div>
//       </section>

//       {/* Additional Content Section */}
//       <section className="w-full py-16 bg-gray-900 text-white text-center">
//         <motion.div
//           className="max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <p className="mt-4 text-lg">
//             Certify your security infrastructure and elevate your protection services to a new level.
//           </p>
//           <p className="mt-4 text-lg">
//             Experience peace of mind knowing that your assets are safeguarded by industry leaders committed to your security.
//           </p>
//         </motion.div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from "react";
import { CameraCanvas } from "./canvas"; // Importing from index.js
import { motion, useAnimation } from "framer-motion";

const HeroSection = () => {
  const controls = useAnimation();
  const [triggerEffect, setTriggerEffect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.6; // Adjust trigger point

      if (scrollY > triggerPoint) {
        setTriggerEffect(true);
        controls.start({
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 1.2, ease: "easeOut" },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white bg-transparent">
  {/* 3D Model Background */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <CameraCanvas />
  </div>

  {/* Hero Content */}
  <motion.div
    className="relative z-10 max-w-3xl"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-5xl font-bold">Welcome to Sterniz</h1>
    <p className="mt-4 text-lg">Experience True Camera Security Agility</p>
    <p className="mt-4 text-lg">
      Create a digital twin of your existing security system and unlock the potential of advanced camera security.
    </p>
  </motion.div>
</section>

      {/* 3D Zoom-in Effect before Text */}
      {/* <motion.div
        className="w-full h-screen flex items-center justify-center bg-black text-white"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={triggerEffect ? controls : {}}
      >
        <h2 className="text-4xl font-bold">Certify your security infrastructure and elevate your protection services to a new level.</h2>
      <p className="text-3xl">Experience peace of mind knowing that your assets are safeguarded by industry leaders committed to your security.</p>
      </motion.div>
       */}
<motion.div
  className="w-full h-screen flex items-center justify-center bg-black text-white text-center px-4"
  initial={{ opacity: 0, scale: 0.8, y: 50 }}
  animate={triggerEffect ? controls : {}}
>
  <div className="flex flex-col items-center space-y-4 max-w-4xl">
    <h2 className="text-4xl font-bold">
      Certify your security infrastructure and elevate your protection services to a new level.
    </h2> <br />
    <p className="text-2xl">
      Experience peace of mind knowing that your assets are safeguarded by industry leaders committed to your security.
    </p>
  </div>
</motion.div>


      {/* Additional Content Section */}
      <section className="w-full py-16 bg-gray-900 text-white text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={triggerEffect ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="mt-4 text-lg">
            Certify your security infrastructure and elevate your protection services to a new level.
          </p>
          <p className="mt-4 text-lg">
            Experience peace of mind knowing that your assets are safeguarded by industry leaders committed to your security.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
