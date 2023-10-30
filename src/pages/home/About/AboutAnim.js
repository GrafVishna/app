import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const animation = (media, ref) => {
	 
	 // ScrollTriggers
	 const aboutTrigger = {
			start: "1% 90%",
			end: "100% 20%",
			toggleActions: 'play reverse play reverse'
	 }
	 const aboutTriggerImages = {
			start: "0% 100%",
			end: "100% 0%",
			scrub: true,
			// markers: {startColor: "white", endColor: "white"},
	 }
	 
	 media.add({
			// Breakpoints:
			isDesktop: "(min-width: 991px)",
			isTablet: "(max-width: 991px )"
			
	 }, (context) => {
			let {isMobile, isDesktop} = context.conditions
			
			// Timelines
			const tl = gsap.timeline({scrollTrigger: {trigger: '.anim-about-title', ...aboutTrigger}})
			const tl2 = gsap.timeline({scrollTrigger: {trigger: '.anim-about-subtitle', ...aboutTrigger}})
			const tl3_1 = gsap.timeline({scrollTrigger: {trigger: '.anim-about', ...aboutTrigger}})
			const tl3_2 = gsap.timeline({scrollTrigger: {trigger: '.anim-about-image01', ...aboutTriggerImages}})
			const tl4_1 = gsap.timeline({scrollTrigger: {trigger: '.anim-about', ...aboutTrigger}})
			const tl4_2 = gsap.timeline({scrollTrigger: {trigger: '.anim-about-image02', ...aboutTriggerImages}})
			
			// Title
			tl.fromTo('.anim-about-title', {x: -30, opacity: 0, filter: "blur(" + 10 + "px)"},
				 {x: 0, opacity: 1, duration: 1.5, filter: "blur(" + 0 + "px)"})
			
			// Subtitle
			tl2.fromTo('.anim-about-subtitle', {opacity: 0, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'},
				 {opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.5})
			
			// Image left
			tl3_1.fromTo('.anim-about-image01 img', {scale: 1.2, duration: 0},
				 {scale: 1, duration: 3})
			tl3_2.fromTo('.anim-about-image01', {y: isDesktop ? 150 : 30},
				 {y: isDesktop ? -60 : -30})
			
			// Image right
			tl4_1.fromTo('.anim-about-image02 img', {scale: 1.1, duration: 0},
				 {scale: 1, duration: 3})
			tl4_2.fromTo('.anim-about-image02', {y: isDesktop ? 120 : 20},
				 {y: isDesktop ? -150 : -100})
			
			
	 }, ref)
	 
}