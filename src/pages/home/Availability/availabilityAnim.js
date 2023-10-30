import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {breakpointsAnim} from '@src/constants/globalConstants.js'

gsap.registerPlugin(ScrollTrigger);


export const animation = (media, ref) => {
	 
	 // ScrollTriggers
	 const experienceTrigger = {
			start: "1% 90%",
			end: "100% 10%",
			toggleActions: 'play reverse play reverse',
	 }
	 
	 media.add({
			// Breakpoints:
			...breakpointsAnim
			
	 }, (context) => {
			let {isMobile, isDesktop} = context.conditions
			
			const tlSet2 = () => gsap.timeline({scrollTrigger: {trigger: '.animation-availability-image', ...experienceTrigger}})
			const tlSet1 = () => gsap.timeline({
				 scrollTrigger: {
						trigger: '.animation-availability-header', ...experienceTrigger,
				 }
			})
			
			// Title
			tlSet1().fromTo('.animation-availability-title',
				 {x: isMobile ? -15 : -30, opacity: 0, filter: "blur(" + 10 + "px)"},
				 {x: 0, opacity: 1, duration: isMobile ? 1 : 1.5, filter: "blur(" + 0 + "px)"})
			// Label
			tlSet1().fromTo('.animation-availability-label',
				 {x: isMobile ? -15 : -30, opacity: 0},
				 {x: 0, opacity: 1, duration: isMobile ? 1 : 1.5})
			// Subtitle
			tlSet1().fromTo('.animation-availability-subtitle',
				 {opacity: 0, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'},
				 {opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.5, delay: 0.8})
			// Image
			tlSet2().fromTo('.animation-availability-image img',
				 {scale: 1.1},
				 {scale: 1, duration: 3, delay: 0})
			
	 }, ref)
}