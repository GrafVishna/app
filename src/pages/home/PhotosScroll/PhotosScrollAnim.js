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
			
			const tlSet1 = () => gsap.timeline({scrollTrigger: {trigger: '.anim-photos-scroll', ...experienceTrigger}})
			
			// Title
			tlSet1().fromTo('.anim-photos-scroll-item',
				 {opacity: 0},
				 {opacity: 1, duration: 2})
			tlSet1().fromTo('.anim-photos-scroll-item img',
				 {scale: isMobile ? 1 : isTablet ? -1 : isDesktop ? 1.05 : 0},
				 {scale: 1.01, duration: 1.5})
			
	 }, ref)
	 
}