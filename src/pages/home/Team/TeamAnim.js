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
			let {isMobile, isDesktop} = context.conditions
			
			const tlSet1 = () => gsap.timeline({scrollTrigger: {trigger: '.team-animation-header', ...experienceTrigger}})
			const tlSet2 = () => gsap.timeline({scrollTrigger: {trigger: '.team-animation', ...experienceTrigger}})
			
			// Title
			tlSet1().fromTo('.team-animation-title',
				 {x: isMobile ? -15 : -30, opacity: 0, filter: "blur(" + 10 + "px)"},
				 {x: 0, opacity: 1, duration: isMobile ? 1 : 1.5, filter: "blur(" + 0 + "px)"})
			// Label
			tlSet1().fromTo('.team-animation-label',
				 {x: isMobile ? -15 : -30, opacity: 0},
				 {x: 0, opacity: 1, duration: isMobile ? 1 : 1.5})
			// Image
			tlSet2().fromTo('.team-animation-img img',
				 {scale: 1.05},
				 {scale: 1, duration: isDesktop ? 2.8 : 2.5})
			
			
	 }, ref)
}