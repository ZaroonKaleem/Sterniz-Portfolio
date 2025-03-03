// import { BrowserRouter } from "react-router-dom"
// import { About, Contact, Experience, Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas } from './components';
// function App() {

//   return (
//       <BrowserRouter>
//         <div className="relative z-0 bg-primary">
//           <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//             <Navbar />
//             <Hero />
//           </div>
//           <About />
//           <Experience />
//           <Tech />
//           <Works />
//           <Feedbacks />
//           <div className="relative z-0">
//             <Contact />
//             <StarsCanvas />
//           </div>
//         </div>
      
//       </BrowserRouter>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Footer,Feedbacks, Hero, Tech, Navbar, Works, StarsCanvas } from "./components";

// const Layout = ({ children }) => (
//   <div className="relative z-0 bg-primary">
//     <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//       <Navbar />
//     </div>
//     {children}
//     <div className="relative z-0">
//       <StarsCanvas />
//     </div>
//   </div>
// );

const Layout = ({ children }) => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
    </div>
    {children}
    <div className="relative z-0">
      <StarsCanvas />
    </div>
    <Footer /> {/* Added Footer component */}
  </div>
);


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/work" element={<Works />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
