import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const animation = (media, ref) => {

    // ScrollTriggers
    const projectsTrigger = {
        start: "1% 90%",
        end: "100% 20%",
        toggleActions: 'play reverse play reverse'
    }
    const projectsItemsTrigger = {
        start: "0% 100%",
        end: "100% 100%",
        // markers: {startColor: "white", endColor: "white"},
        scrub: true,
    }
    const projectsItemsScrollTrigger = {
        start: "0% 100%",
        end: "100% 0%",
        scrub: true,
    }

    const projectsItemsScrollTriggerTwo = projectsItemsScrollTrigger

    media.add({
        // Breakpoints:
        isDesktop: "(min-width: 951px)",
        isTablet: "(min-width: 768px)",
        isMobile: "(min-width: 320px)",

    }, (context) => {
        let {isMobile, isTablet, isDesktop} = context.conditions

        console.log(isMobile, isDesktop, isTablet)

        // Timelines
        const tl = gsap.timeline({scrollTrigger: {trigger: '.anim-projects-header', ...projectsTrigger}})
        const t2 = gsap.timeline({scrollTrigger: {trigger: '.anim-projects-items', ...projectsItemsTrigger}})
        const t3 = gsap.timeline({scrollTrigger: {trigger: '.anim-projects-item', ...projectsItemsTrigger}})
        const t4 = gsap.timeline({scrollTrigger: {trigger: '.anim-projects-items', ...projectsItemsScrollTrigger}})
        const t5 = gsap.timeline({scrollTrigger: {trigger: '.anim-projects-items', ...projectsItemsScrollTriggerTwo}})

        // Label
        tl.fromTo('.anim-projects-label', {x: isDesktop ? -30 : 0, y: isDesktop ? 0 : 5, opacity: 0},
            {
                x: 0,
                y: isDesktop ? 0 : 0,
                opacity: 1,
                duration: isDesktop ? 0.8 : 0.5,
                delay: -0.7,
            })

        // Title
        tl.fromTo('.anim-projects-title',
            {x: isDesktop ? -30 : 0, y: isDesktop ? 0 : 20, opacity: 0},
            {
                x: 0,
                y: isDesktop ? 0 : 0,
                opacity: 1,
                duration: isDesktop ? 0.8 : 0.4,
                delay: isDesktop ? -0.7 : -1.3
            })

        t3.fromTo('.anim-projects-item', {opacity: 0},
            {opacity: 1, duration: 0.8})

        t4.fromTo('.anim-projects-item-one',
            {y: isDesktop ? "50%" : isTablet ? "30%" : '0%'},
            {y: isDesktop ? '-10%' : isTablet ? "-8%" : '0%'}
        )

        t5.fromTo('.anim-projects-item-two',
            {y: isDesktop ? '68%' : isTablet ? "30%" : '0%'},
            {y: isDesktop ? '-30%' : isTablet ? "-27%" : '0%'})


    }, ref)
}