import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div className="mt-8" variants={textVariant()}>
        <p className={styles.sectionSubText}>About Us</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 2)}
        className="mt-4 text-justify teext-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        We are seasoned security professionals, driven by enthusiasm and
        expertise, delivering top-tier protection services for many years. Our
        team consists of highly trained experts specializing in risk assessment,
        surveillance, and advanced security protocols, ensuring that every layer
        of protection is meticulously planned and executed. Our mission is not
        just to secure, but to empower. We believe in proactive security
        measures that prevent incidents before they occur, providing peace of
        mind and reliability in an increasingly complex security landscape.
      </motion.p>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 2)}
        className="mt-4 text-justify teext-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        we specialize in providing professional security services and expert
        training for individuals and businesses. Our team of highly trained
        personnel, combined with advanced technology, ensures top-tier
        protection for assets, property, and people. We are committed to
        delivering reliable and innovative security solutions, from basic
        surveillance to complex safeguarding needs, tailored to meet the
        specific requirements of our clients.
      </motion.p> */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div className="mt-16" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Our Future Goal</h2>
        <p className={styles.sectionSubText}>
          We want to lead in Privacy & Secrecy
        </p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 2)}
        className="mt-4 text-justify teext-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        Our primary objective is to enhance safety and security through a
        comprehensive range of services. These include Object Protection,
        Parking Monitoring, District Service, Event Protection, and Guard
        Protection. We also offer secure Money and Value Transport, Construction
        Site Security, and specialized training through our academy, including
        Sachkundeprüfung and Waffensachkunde certifications. Our goal is to
        provide peace of mind with unmatched professionalism and expertise in
        every aspect of security
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
