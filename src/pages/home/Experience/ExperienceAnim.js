import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const animation = (media, ref) => {
	 
	 // ScrollTriggers
	 const experienceTrigger = {
			start: "1% 90%",
			end: "100% 10%",
			toggleActions: 'play reverse play reverse',
			// markers: {startColor: "white", endColor: "white"},
	 }
	 
	 media.add({
			// Breakpoints:
			isDesktop: "(min-width: 991px)",
			isTablet: "(max-width: 991px )"
			
	 }, (context) => {
			let {isMobile, isDesktop} = context.conditions
			
			const tlSet1 = () => gsap.timeline({scrollTrigger: {trigger: '.anim-experience', ...experienceTrigger}})
			
			// Title
			tlSet1().fromTo('.anim-experience-title',
				 {x: -30, opacity: 0},
				 {x: 0, opacity: 1, duration: 1.5})
			// Image
			tlSet1().fromTo('.anim-experience-image',
				 {x: 30, opacity: 0, clipPath: isDesktop ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' : null,},
				 {x: 0, opacity: 1, duration: 1.5, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
			// Percent
			tlSet1().fromTo('.anim-experience-percent',
				 {opacity: 0, clipPath: isDesktop ? 'polygon(0 0, 0 0, 0 100%, 0% 100%)' : null,},
				 {opacity: 1, duration: 1.3, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', delay: 0.5})
			// Text
			tlSet1().fromTo('.anim-experience-percent-text',
				 {opacity: 0, y: -10},
				 {opacity: 1, duration: 0.6, y: 0, delay: 1.7})
			// Button
			tlSet1().fromTo('.anim-experience-button',
				 {opacity: 0, clipPath: isDesktop ? 'polygon(0 0, 0 0, 0 100%, 0% 100%)' : null,},
				 {opacity: 1, duration: 1.3, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', delay: 0.9})
			
	 }, ref)
	 
}