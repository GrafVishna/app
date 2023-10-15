import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animation = (media, ref) => {
    // Common Animation Parameters
    const commonParameters = {
        scrub: true,
        // markers: {startColor: "white", endColor: "white"}
    }

    // ScrollTriggers
    const headerTrigger = {
        trigger: '.anim-cards-header',
        start: "0% 90%",
        end: "50% 60%",
        ...commonParameters
    }
    const cardsTrigger = {
        trigger: '.anim-cards',
        start: "0% 100%",
        end: "50% 70%",
        ...commonParameters
    }
    const cardsCenterTrigger = {
        trigger: '.anim-cards-center',
        start: "0% 100%",
        end: "50% 70%",
        ...commonParameters
    }
    
    media.add({
        // Breakpoints:
        isMobile: "(max-width: 800px)",
        isDesktop: "(min-width: 800px)",

    }, (context) => {
        let {isMobile, isDesktop} = context.conditions

        // Header cards
        gsap.from('.anim-cards-header', {
            scrollTrigger: {...headerTrigger},
            y: isDesktop ? 150 : 80,
            opacity: 0
        })
        // Cards items
        gsap.from('.anim-cards', {
            scrollTrigger: {...cardsTrigger},
            y: isDesktop ? 220 : 100,
            opacity: 0,
        })
        // Cards items center
        gsap.from('.anim-cards-center', {
            scrollTrigger: {...cardsCenterTrigger},
            y: isDesktop ? 150 : 100,
            opacity: 0,
        })

    }, ref)
}

