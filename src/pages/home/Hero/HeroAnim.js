import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = (media, ref) => {

    // ScrollTriggers
    const heroTrigger = {
        trigger: '.anim-hero',
        start: "0% 10%",
        end: "50% 20%",
        // markers: {startColor: "white", endColor: "white"},
    }

    media.add({
        // Breakpoints:
        isTablet: "(min-width: 991px)",

    }, (context) => {
        let {isTablet} = context.conditions

        // Title hero
        const tl = gsap.timeline({scrollTrigger: heroTrigger})

        // Default values
        gsap.set('.anim-hero-title', {
            clipPath: 'polygon(0% 0%, 0 0%, 0 100%, 0% 100%)',
            opacity: 0
        })
        gsap.set('.anim-hero-label', {
            clipPath: 'polygon(0% 0%, 0 0%, 0 100%, 0% 100%)',
            opacity: 0
        })
        gsap.set('.anim-hero-image', {
            clipPath: isTablet ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' : null,
        })
        gsap.set('.anim-hero-image img', {
            scale: isTablet ? 1.1 : 1
        })

        // Timelines & Animations
        gsap.to('.anim-hero-label', {
            scrollTrigger: heroTrigger,
            duration: 1.5,
            delay: 0.2,
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        })

        gsap.to('.anim-hero-image', {
            scrollTrigger: heroTrigger,
            clipPath: isTablet ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : null,
            duration: isTablet ? 1.5 : null,
            delay: isTablet ? 0.2 : null,
        })

        gsap.to('.anim-hero-image img', {
            scrollTrigger: heroTrigger,
            duration: 1.5,
            delay: 0.2,
            scale: 1
        })

        tl.to('.anim-hero-title', { // Title hero
            duration: 1.2,
            delay: 0.3,
            opacity: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }).from('.anim-hero-subtitle', { // Subtitle hero
            opacity: 0,
            y: -10,
            delay: 0
        }).from('.anim-hero-button', { // Subtitle button
            opacity: 0,
            y: -10,
            delay: 0
        })


    }, ref)
}