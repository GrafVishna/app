import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const animation = (media, ref) => {
	 
	 // ScrollTriggers
	 const experienceTrigger = {
			start: "1% 90%",
			end: "100% 10%",
			toggleActions: 'play reverse play reverse',
			markers: {startColor: "white", endColor: "white"},
	 }
	 
	 media.add({
			// Breakpoints:
			isDesktop: "(min-width: 991px)",
			isTablet: "(max-width: 991px )"
			
	 }, (context) => {
			let {isMobile, isDesktop} = context.conditions
			
			const tlSet1 = () => gsap.timeline({scrollTrigger: {trigger: '.animation-availability', ...experienceTrigger}})
			const tlSet2 = () => gsap.timeline({scrollTrigger: {trigger: '.animation-availability-image', ...experienceTrigger}})
			
			// Title
			tlSet1().fromTo('.animation-availability-title',
				 {x: isDesktop ? -30 : 0, y: isDesktop ? 0 : 20, opacity: 0},
				 {x: 0, y: isDesktop ? 0 : 0, opacity: 1, duration: isDesktop ? 0.8 : 0.4, delay: isDesktop ? -0.7 : -1.3})
			// Label
			tlSet1().fromTo('.animation-availability-label',
				 {x: isDesktop ? -30 : 0, y: isDesktop ? 0 : 5, opacity: 0},
				 {x: 0, y: isDesktop ? 0 : 0, opacity: 1, duration: isDesktop ? 0.8 : 0.5, delay: -0.7,})
			// Subtitle
			tlSet1().fromTo('.animation-availability-subtitle',
				 {opacity: 0, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'},
				 {opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.5, delay: 0})
			tlSet2().fromTo('.animation-availability-image',
				 {opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'},
				 {opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 2, delay: 0})
			tlSet2().fromTo('.animation-availability-image img',
				 {scale: 1.3},
				 {scale: 1, duration: 3, delay: 0})
			
	 }, ref)
	 
}