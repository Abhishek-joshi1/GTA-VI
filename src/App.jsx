import React from 'react'
import { useState } from 'react';
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'

function App() {

    let [showContent, setShowContent] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(".vi-mask-group", {
            rotate: 10,
            duration: 2,
            ease: "power4.easeInOut",
            transformOrigin: "50% 50%"
        })
            .to(".vi-mask-group", {
                scale: 10,
                duration: 2,
                delay: -1.8,
                ease: "expo.inOut",
                transformOrigin: "50% 50%"
            })
            .to(".svg", {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    document.querySelector(".svg").remove();
                    setShowContent(true);
                    tl.kill();
                }
            });
    });

    useGSAP(() => {

        if (!showContent) return;

        gsap.to(".main", {
            scale : 1,
            rotate : 0,
            duration : 2,
            delay : "-1",
            ease : "Expo.easeInOut"
        })
        gsap.to(".sky", {
            scale : 1.5,
            rotate : 0,
            duration : 2,
            delay : "-0.8",
            ease : "Expo.easeInOut"
        })
        gsap.to(".bg", {
            scale : 1.3,
            rotate : 0,
            duration : 2,
            delay : "-0.8",
            ease : "Expo.easeInOut"
        })
        gsap.to(".character", {
            scale : 0.75,
            x : "-50%",
            bottom : "-32%",
            rotate : 0,
            duration : 2,
            delay : "-0.8",
            ease : "Expo.easeInOut"
        })

        const main = document.querySelector(".main");

        main?.addEventListener("mousemove", function(e){
            const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
            gsap.to(".imagesdiv .text", {
                x : `${xMove * 0.5}%`,
            });
            gsap.to(".sky", {
                x : xMove,
            });
            gsap.to(".bg", {
                x : xMove,
            });
        })
    }, [showContent])



  return (
    <>
      <div>
          <div className="svg fixed top-0 left-0 z-40 w-full h-screen overflow-hidden bg-black">
              <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                  <defs>
                      <mask id="viMask">
                          <rect width="100%" height="100%" fill="black" />
                          <g className="vi-mask-group">
                              <text
                                  x="50%"
                                  y="50%"
                                  fontSize="250"
                                  textAnchor="middle"
                                  fill="white"
                                  dominantBaseline="middle"
                                  fontFamily="Arial Black"
                              >
                                  VI
                              </text>
                          </g>
                      </mask>
                  </defs>
                  <image
                      href="./bg.png"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      mask="url(#viMask)"
                  />
              </svg>
          </div>
      </div>
      {showContent && 
      <div className='main w-full rotate-[-10deg] scale-[1.7]'>
        <div className='landing overflow-hidden relative w-full h-screen '>
            <div className='Navbar absolute top-0 left-0 z-[50] w-full px-10 py-10'>
                <div className="logo flex gap-5">
                    <div className="lines flex flex-col gap-1">
                        <div className="line w-12 h-2 bg-white"></div>
                        <div className="line w-8 h-2 bg-white"></div>
                        <div className="line w-4 h-2 bg-white"></div>
                    </div>
                    <h3 className='text-3xl -mt-[11px] text-white'>ROCKSTAR</h3>
                </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
                <img className='sky absolute scale-[2] rotate-[20deg] top-0 left-0 w-full h-full object-cover' src='./sky.png' alt=''></img>
                <img className='absolute bg scale-[2] rotate-[-15deg] top-0 left-0 w-full h-full object-cover' src='./bg.png'></img>
                <div className='text text-white absolute flex flex-col gap-4 top-0 left-1/2 -translate-x-1/2'>
                    <h1 className='text-[12rem] leading-none -ml-20'>Grand</h1>
                    <h1 className='text-[12rem] leading-none ml-20'>Theft</h1>
                    <h1 className='text-[12rem] leading-none -ml-20'>auto</h1>
                </div>
                <img
                    className="absolute character -bottom-[200%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-10deg]"
                    src="./girlbg.png"
                    alt=""
                />            
            </div>
            <div className='btmbar text-white absolute bottom-0 left-0 z-[50] w-full px-10 py-15 bg-gradient-to-t from-black to-transparent'>
                <div className='flex gap-4 items-center'>
                    <i className="text-2xl ri-arrow-down-line"></i>
                    <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
                </div>
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]' src='./ps5.png' alt=''></img>
            </div>
        </div>
        <div className='w-full h-screen px-10 flex items-center justify-center bg-black'>
            <div className="cntnr flex text-white w-full h-[80%]">
                <div className='limg relative w-1/2 h-full'>
                    <img 
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                    src='./imag.png' alt=''></img>
                </div>
                <div className="rg w-[30%]">
                    <h1 className='text-6xl'>Still Running</h1>
                    <h1 className='text-6xl mb-4'>Not Hunting</h1>
                    <p className='mt-10 font-[Helvetica_Now_Display]'>
                        GTA 6 is the highly anticipated next installment in Rockstar Games' Grand Theft Auto series. Set in a modern-day reimagining of Vice City, the game promises a vast open world, dynamic storylines, and enhanced realism. Players will experience an immersive narrative with dual protagonists and evolving missions. With improved graphics and AI, GTA 6 is expected to redefine the open-world genre.
                    </p>
                    <p className='font-[Helvetica_Now_Display]'>
                        GTA 6 brings a return to Vice City with richer detail and deeper storytelling. Fans eagerly await its release, marking a new era in gaming.
                    </p>
                    <button className='bg-yellow-500 text-2xl text-white px-10 py-5 mt-5'>DOWNLOAD NOW</button>
                </div>
            </div>
        </div>
        </div>}
       
    </>
  )
}

export default App