import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {breakpointsAnim} from "@src/constants/globalConstants.js";

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
			...breakpointsAnim
			
	 }, (context) => {
			let {isMobile, isTablet, isDesktop} = context.conditions
			
			const tlSet1 = () => gsap.timeline({scrollTrigger: {trigger: '.anim-experience-content', ...experienceTrigger}})
			const tlSet2 = () => gsap.timeline({scrollTrigger: {trigger: '.anim-experience-image', ...experienceTrigger}})
			
			// Title
			tlSet1().fromTo('.anim-experience-title',
				 {x: isMobile ? -15 : isTablet ? -20 : isDesktop ? -30 : 0, opacity: '0', filter: "blur(" + 10 + "px)"},
				 {x: 0, opacity: 1, duration: isMobile ? 1 : 1.5, filter: "blur(" + 0 + "px)"})
			// Image
			tlSet2().fromTo('.anim-experience-image',
				 {
						x: 30,
						opacity: 0,
						clipPath: isMobile ? null : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
				 },
				 {x: 0, opacity: 1, duration: 1.5, clipPath: isMobile ? null : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
			// Percent
			tlSet1().fromTo('.anim-experience-percent',
				 {opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'},
				 {opacity: 1, duration: 1.3, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', delay: 0.5})
			// Text
			tlSet1().fromTo('.anim-experience-percent-text',
				 {opacity: 0, y: -10},
				 {opacity: 1, duration: 0.6, y: 0, delay: 1.7})
			// Button
			tlSet1().fromTo('.anim-experience-button',
				 {opacity: 0},
				 {opacity: 1, delay: 0.9})
			
	 }, ref)
	 
}