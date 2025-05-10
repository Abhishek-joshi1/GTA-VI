import React from 'react'
import { useState } from 'react';
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";

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
                    this.kill();
                }
            });
    });


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
      {showContent && <div className='main w-full h-full bg-black'>
        <div className='landing w-full h-screen bg-black'>
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
                <img className='absolute top-0 left-0 w-full h-full object-cover' src='./sky.png' alt=''></img>
                <img className='absolute top-0 left-0 w-full h-full object-cover' src='./bg.png'></img>
                <img
                    className="absolute -bottom-[32%] left-1/2 -translate-x-1/2 scale-[0.75]"
                    src="./girlbg.png"
                    alt=""
                />
            </div>
        </div>
        </div>}
    </>
  )
}

export default App