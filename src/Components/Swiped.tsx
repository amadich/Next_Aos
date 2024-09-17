"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Swiped() {
  // Initialize AOS when the component is mounted on the client
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* This div adds height to ensure the page is scrollable */}
      <div className="h-[150vh] flex justify-center items-center">
        <center>Scroll down to see the animation</center>
      </div>

      {/* The animated text */}
      <div
        data-aos="zoom-in-up"  // Trigger AOS animation on scroll
        data-aos-offset="200"  // Trigger earlier
        className=" border p-2 border-gray-500 rounded-md text-3xl w-96 h-96 m-auto "
      >
        {/* Text with TailwindCSS border styling */}
        <span className="border-b-4 border-transparent hover:border-blue-500 transition duration-500 ease-in-out">
          Hello World
          <span className='text-sm text-gray-500 font-mono block mt-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illum tempora ipsa dolorum, quo cumque similique aut autem voluptates. Rerum consectetur perferendis tempore reprehenderit officia amet omnis aliquam modi vel.
          </span>
        </span>

        
      </div>

      {/* Additional space for scrolling */}
      <div className="h-[200vh]"></div>
    </>
  );
}
