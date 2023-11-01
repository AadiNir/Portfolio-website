"use client"
import { Indie_Flower,Poppins,Righteous} from 'next/font/google'
import Image from 'next/image'
// Subsets are really important. CHECK BELOW FOR MORE INFO
import React, { useEffect, useRef, useState } from "react"; 
import About from './contents/About';
import Aboutme from './contents/Aboutme';
import Link from 'next/link';
import Footer from './contents/Footer';
  // @ts-ignore
  const RevealOnScroll = ({ children }) => { 
    const [isVisible, setIsVisible] = useState(false); 
    const ref = useRef(null); 
  
    useEffect(() => { 
        const scrollObserver = new IntersectionObserver(([entry]) => { 
            if (entry.isIntersecting) { 
                setIsVisible(true); 
                scrollObserver.unobserve(entry.target); 
            } 
        }); 
        // @ts-ignore
  
        scrollObserver.observe(ref.current); 
  
        return () => { 
            if (ref.current) { 
                scrollObserver.unobserve(ref.current); 
            } 
        }; 
    }, []); 
  
    const classes = `transition-opacity duration-1000  
        ${isVisible ? "opacity-100" : "opacity-0"
        }`; 
  
    return ( 
        <div ref={ref} className={classes}> 
            {children} 
        </div> 
    ); 
}; 
const inidie = Righteous({subsets:['latin'],weight:'400'})
const poppins = Poppins({subsets:['latin'],weight:'400'})



export default function Home() {
  const handleScrollAndShowDiv = () => {
    // Calculate the Y position of the target section (the div you want to show)
    const section = document.getElementById('hiddenDiv');
    if (section) {
      const sectionY = section.getBoundingClientRect().top + window.scrollY;

      // Scroll to the target section
      window.scrollTo({
        top: sectionY,
        behavior: 'smooth', // Add smooth scrolling animation
      });

      // Show the hidden div
      section.style.display = 'block';
    }
  };

  return (
    <main  >
      <div className="  mx-auto text-center"> 
            <h1 className= {`${inidie.className} text-9xl text-white mt-14 mb-11`}> 
              Aadithya Niranjan
            </h1> 
            <h3 className={`${poppins.className} text-3xl  text-white `}>
              Full Stack Developer | Blockchain Developer
            </h3>
            <div className="container1">
  
        
</div>
        
            <RevealOnScroll >
            <div className="grid grid-cols-2 my-20 mb-44 ">
    <div className="bg-red-500  hover:bg-red-300 h-100 text-white flex items-center justify-center rounded-3xl m-4">
      <h1 className={`${poppins.className} sm: text-4xl md:text-6xl lg:text-7xl xl:text-9xl text-right`}> Projects</h1>
    </div>
    <div >
    <div className=" bg-blue-700 hover:bg-lime-400 p-4 h-64 text-white rounded-3xl m-4"  onClick={handleScrollAndShowDiv}>
      <h1 className={` ${poppins.className} sm: text-4xl md:text-6xl lg:text-7xl xl:text-9xl    `}>About Me</h1>
    </div>
    <div className="bg-yellow-300 hover:bg-green-400 p-4 h-64 text-white rounded-3xl m-4">
      <h1 className={`${poppins.className} sm: text-4xl md:text-6xl lg:text-7xl xl:text-9xl     `}>Contact Me</h1>
    </div>

    </div>
    </div>
            </RevealOnScroll> 
            <RevealOnScroll>
                <About/>
            </RevealOnScroll>
            <div id="hiddenDiv" >

            <RevealOnScroll>
                <Aboutme/>
            </RevealOnScroll>
            </div>
            <Footer/>

            
        </div>  
    </main>
  )
}
