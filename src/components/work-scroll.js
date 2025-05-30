// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollingWork = () => {
//     const racesRef = useRef(null);
//     const containerRef = useRef(null);

//     useEffect(() => {
//         const races = racesRef.current;

//         function getScrollAmount() {
//             let racesWidth = races.scrollWidth;
//             return -(racesWidth - window.innerWidth);
//         }

//         const tween = gsap.to(races, {
//             x: getScrollAmount,
//             y: -50,
//             duration: 4,
//             ease: "none",
//         });

//         const scrollTrigger = ScrollTrigger.create({
//             trigger: containerRef.current,
//             start: "top 20%",
//             end: () => `+=${getScrollAmount() * -2}`,
//             pin: true,
//             animation: tween,
//             scrub: 1,
//             invalidateOnRefresh: true,
//         });
//     }, []);

//     return (
//         <>
//             <div className="scrolling-work-pin-wrapper">
//                 <div className="scrolling-work-container" ref={containerRef}>
//                     <div className="work-item"></div>
//                     <div className="work-item"></div>
//                     <div className="work-item"></div>
//                     <div className="work-item"></div>
//                     <div className="work-item"></div>
//                     <div className="work-item"></div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ScrollingWork;
