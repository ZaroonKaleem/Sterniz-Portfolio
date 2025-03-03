import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    meme,
    confession,
    ecommerce,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      url: "/about", // Update this to the actual route
    },
    {
      id: "news",
      title: "News",
      url: "/News", // Update this to the actual route
    },
    {
      id: "services",
      title: "Services",
      url: "/Experience", // Update this to the actual route
    },
    {
      id: "contact",
      title: "Contact",
      url: "/contact", // Update this to the actual route
    },
  ];
  
  
  const services = [
    {
      title: "Object Protection",
      icon: web,
    },
    {
      title: "Parking Monitoring",
      icon: mobile,
    },
    {
      title: "Money Transport",
      icon: backend,
    },
    {
      title: "Value Transport",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2022 - present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2023 - Jan 2024",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   // {
  //   //   title: "MERN Stack Developer",
  //   //   company_name: "Meta",
  //   //   icon: meta,
  //   //   iconBg: "#E6DEDD",
  //   //   date: "Jan 2023 - Present",
  //   //   points: [
  //   //     "Developing and maintaining web applications using React.js and other related technologies.",
  //   //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //   //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //   //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   //   ],
  //   // },
  //   // {
  //   //   title: "MEAN Stack Developer",
  //   //   company_name: "Meta",
  //   //   icon: meta,
  //   //   iconBg: "#E6DEDD",
  //   //   date: "Jan 2023 - Present",
  //   //   points: [
  //   //     "Developing and maintaining web applications using React.js and other related technologies.",
  //   //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //   //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //   //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   //   ],
  //   // },
  // ];
  
  const experiences = [
    {
      title: "Property Protection",
      points:
        "Providing comprehensive security to safeguard residential and commercial properties from unauthorized access and threats.",
      // icon: propertyProtectionIcon,
      iconBg: "#383E56",
    },
    {
      title: "Event Protection",
      points:
        "Ensuring the safety of attendees at concerts, corporate events, and large gatherings with professional security measures.",
      // icon: eventProtectionIcon,
      iconBg: "#E6DEDD",
    },
    {
      title: "Emergency Call & Service Control Center",
      points:
        "Operating a 24/7 emergency response system to handle security alerts, alarms, and crisis situations efficiently.",
      // icon: emergencyCallIcon,
      iconBg: "#383E56",
    },
    {
      title: "Gatekeeper & Reception Service",
      points:
        "Managing access control and front-desk security for businesses, offices, and residential complexes to prevent unauthorized entry.",
      // icon: gatekeeperIcon,
      iconBg: "#E6DEDD",
    },
    {
      title: "Fire Safety & Security",
      points:
        "Implementing fire prevention strategies, conducting safety inspections, and ensuring compliance with fire regulations.",
      // icon: fireSafetyIcon,
      iconBg: "#E6DEDD",
    },
    {
      title: "Security Service",
      points:
        "Providing trained security personnel for diverse environments, including corporate offices, retail spaces, and public areas.",
      // icon: securityServiceIcon,
      iconBg: "#383E56",
    },
    {
      title: "Department Store Detective",
      points:
        "Detecting and preventing shoplifting and fraudulent activities within department stores through active surveillance.",
      // icon: storeDetectiveIcon,
      iconBg: "#E6DEDD",
    },
    {
      title: "Doorman Service",
      points:
        "Offering professional doorman services for residential buildings, hotels, and corporate offices to ensure a secure and welcoming entry.",
      // icon: doormanIcon,
      iconBg: "#383E56",
    },
    {
      title: "Mall Guard",
      points:
        "Patrolling shopping malls to prevent theft, vandalism, and disturbances, ensuring a safe shopping experience for customers.",
      // icon: mallGuardIcon,
      iconBg: "#E6DEDD",
    },
    {
      title: "Construction Site Security",
      points:
        "Providing surveillance and security for construction sites to prevent trespassing, equipment theft, and unauthorized activity.",
      // icon: constructionIcon,
      iconBg: "#383E56",
    },
  ];
  
  export default services;
  

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Burhan proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Burhan does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Burhan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Store",
      description:
        "Discover a seamless shopping experience with our ecommerce website, offering a wide range of products at unbeatable prices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/burhanahmad161/EcommerceStore",
    },
    {
      name: "Confession Corner",
      description:
        "Share your secrets anonymously and find solace in our supportive community.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: confession,
      source_code_link: "https://github.com/burhanahmad161/Confession-Corner",
    },
    {
      name: "Meme Generator",
      description:
        "Create and share hilarious memes effortlessly with our easy-to-use meme generator.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: meme,
      source_code_link: "https://github.com/burhanahmad161/Meme-Generator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };