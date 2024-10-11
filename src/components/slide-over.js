"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger)

export default function SlideOverLayout() {
    const topSectionRef = useRef < HTMLDivElement > (null)
    const bottomSectionRef = useRef < HTMLDivElement > (null)

    useEffect(() => {
        if (topSectionRef.current && bottomSectionRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bottomSectionRef.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
            })

            tl.to(bottomSectionRef.current, {
                y: `-${topSectionRef.current.offsetHeight}px`,
                ease: "none",
            })
        }

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className="min-h-screen overflow-hidden">
            <div
                ref={topSectionRef}
                className="h-screen bg-primary flex items-center justify-center text-primary-foreground"
            >
                <h1 className="text-4xl font-bold">Top Section</h1>
            </div>
            <div
                ref={bottomSectionRef}
                className="min-h-screen bg-secondary flex items-center justify-center text-secondary-foreground"
            >
                <h2 className="text-4xl font-bold">Bottom Section</h2>
            </div>
        </div>
    )
}