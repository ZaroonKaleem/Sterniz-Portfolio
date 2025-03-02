
// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles";
// import { experiences as services } from "../constants"; // Renamed experiences to services
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// const ServiceCard = ({ service }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       iconStyle={{ background: service.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           {service.icon && (
//             <img
//               src={service.icon}
//               alt={service.title}
//               className='w-[60%] h-[60%] object-contain'
//             />
//           )}
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{service.title}</h3>
//       </div>

//       <p className='mt-5 text-white-100 text-[14px] pl-1 tracking-wider'>
//         {service.points}
//       </p>
//     </VerticalTimelineElement>
//   );
// };

// const Services = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>
//           What We Offer
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-white text-center`}>
//           Our Security Services
//         </h2>
//       </motion.div>

//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {services.map((service, index) => (
//             <ServiceCard key={`service-${index}`} service={service} />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Services, "services");


import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences as services } from "../constants"; // Renamed experiences to services
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { textVariant2 } from "../utils/motion";

const ServiceCard = ({ service }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: service.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {service.icon && (
            <img
              src={service.icon}
              alt={service.title}
              className='w-[60%] h-[60%] object-contain'
            />
          )}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{service.title}</h3>
      </div>

      <p className='mt-5 text-white-100 text-[14px] pl-1 tracking-wider'>
        {service.points}
      </p>
    </VerticalTimelineElement>
  );
};

const Services = () => {
  return (
    <>
      <motion.div
  variants={textVariant2()} 
  initial="hidden" 
  whileInView="show" 
  viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when in view
  className="text-center"
>
  <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
    What We Offer
  </p>
  <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
    Our Security Services
  </h2>
</motion.div>


      {/* New Heading for Services List */}
      {/* <h3 className="text-white text-[20px] font-semibold text-center mt-10">
        Services We Offer
      </h3> */}

      <div className='mt-10 flex text-justify flex-col'>
        <VerticalTimeline>
          {services.map((service, index) => (
            <ServiceCard key={`service-${index}`} service={service} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
