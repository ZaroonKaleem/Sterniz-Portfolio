import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CameraCanvas } from "./canvas"; // Importing the 3D Camera Model

const HeroSection = () => {
  // Controls for animated sections
  const sectionControls = useAnimation();
  const zoomControls = useAnimation();
  const finalSectionControls = useAnimation();

  // Intersection Observers for triggering animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.3,
  });
  const { ref: zoomRef, inView: zoomInView } = useInView({ threshold: 0.3 });
  const { ref: finalSectionRef, inView: finalSectionInView } = useInView({
    threshold: 0.3,
  });

  // Define new controls
const zoomControls2 = useAnimation();
const { ref: zoomRef2, inView: zoomInView2 } = useInView({ threshold: 0.3 });

useEffect(() => {
  if (zoomInView2) {
    zoomControls2.start({ opacity: 1, scale: 1, y: 0 });
  } else {
    zoomControls2.start({ opacity: 0, scale: 0.8, y: 50 });
  }
}, [zoomInView2, zoomControls2]);

{/* 🔥 New Security Section */}
{/* <motion.div
  ref={zoomRef2}
  className="w-full h-screen flex items-center justify-center bg-black text-white text-center px-4"
  initial={{ opacity: 0, scale: 0.8, y: 50 }}
  animate={zoomControls2}  // Use the new animation control
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  <div className="flex flex-col items-center space-y-4 max-w-4xl">
    <h2 className="text-4xl font-bold">
      INCREASE YOUR SECURITY
    </h2>
    <br />
    <p className="text-2xl">
      In today’s ever-evolving landscape of threats, ensuring the safety of your assets is paramount. 
      Our dedicated security solutions are designed to enhance your protection at every level.
    </p>
  </div>
</motion.div> */}


  useEffect(() => {
    if (sectionInView) {
      sectionControls.start({ opacity: 1, scale: 1, y: 0 });
    } else {
      sectionControls.start({ opacity: 0, scale: 0.8, y: 50 });
    }
  }, [sectionInView, sectionControls]);

  useEffect(() => {
    if (zoomInView) {
      zoomControls.start({ opacity: 1, scale: 1, y: 0 });
    } else {
      zoomControls.start({ opacity: 0, scale: 0.8, y: 50 });
    }
  }, [zoomInView, zoomControls]);

  

  useEffect(() => {
    if (finalSectionInView) {
      finalSectionControls.start({ opacity: 1, scale: 1, y: 0 });
    } else {
      finalSectionControls.start({ opacity: 0, scale: 0.8, y: 50 });
    }
  }, [finalSectionInView, finalSectionControls]);

  return (
    <>
      {/* 🚀 Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white bg-transparent overflow-hidden">
        {/* 🌟 3D Camera Model */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <CameraCanvas />
        </div>

        {/* 🚀 Hero Content */}
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold">Welcome to Sterniz</h1>
          <p className="mt-4 text-lg">
            Experience True Camera Security Agility
          </p>
          <p className="mt-4 text-lg">
            Create a digital twin of your existing security system and unlock
            the potential of advanced camera security.
          </p>
        </motion.div>
      </section>

      {/* 🚀 Futuristic Animated Text Section */}
      <motion.section
        ref={sectionRef}
        className="w-full py-16 bg-gray-900 text-white text-center"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={sectionControls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-3xl mx-auto">
          {/* 🔹 Heading - Sliding in from Left */}
          <motion.h3
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -100 }}
            animate={
              sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            CONNECT WITH US TO HOLD SECRECY
          </motion.h3>

          {/* 🔹 First Paragraph - Sliding in from Right */}
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={
              sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            As valued partners in our security ecosystem, you have the authority
            to provide and verify vital information that enhances the
            effectiveness of our services.
          </motion.p>

          {/* 🔹 Second Paragraph - Fading in from Below */}
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={
              sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            This direct connection ensures that data related to security
            monitoring, camera feeds, and incident reports is accurate and
            current, empowering you to contribute actively to a safer
            environment.
          </motion.p>
        </div>
      </motion.section>

      {/* 🔥 Zoom In & Out Section (Middle Section) */}
      <motion.div
        ref={zoomRef}
        className="w-full h-screen flex items-center justify-center bg-black text-white text-center px-4"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={zoomControls}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center space-y-4 max-w-4xl">
          <h2 className="text-4xl font-bold">
            Certify your security infrastructure and elevate your protection
            services to a new level.
          </h2>
          <br />
          <p className="text-2xl">
            Experience peace of mind knowing that your assets are safeguarded by
            industry leaders committed to your security.
          </p>
        </div>
      </motion.div>

      {/* 🚀 Final Section (Now at the End) */}
      <motion.section
        ref={finalSectionRef}
        className="w-full py-16 bg-gray-900 text-white text-center"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={finalSectionControls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h3
            className="text-3xl font-bold"
            initial={{ opacity: 0, x: -100 }}
            animate={
              finalSectionInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Your Safety, Our Priority
          </motion.h3>

          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={
              finalSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            We are dedicated to providing you with cutting-edge security
            solutions. Let’s work together to build a safer tomorrow.
          </motion.p>
        </div>
      </motion.section>

      {/* 🔥 New Security Section */}
      <motion.div
        ref={zoomRef2}
        className="w-full h-screen flex items-center justify-center bg-black text-white text-center px-4"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={zoomControls2}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center space-y-4 max-w-4xl">
          <h2 className="text-4xl font-bold">INCREASE YOUR SECURITY</h2>
          <br />
          <p className="text-2xl">
            In today’s ever-evolving landscape of threats, ensuring the safety
            of your assets is paramount. Our dedicated security solutions are
            designed to enhance your protection at every level.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default HeroSection;
