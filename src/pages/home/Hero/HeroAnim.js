import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {breakpointsAnim} from "@src/constants/globalConstants.js";

gsap.registerPlugin(ScrollTrigger);

export const animation = (media, ref, percent) => {
	 
	 // ScrollTriggers
	 const heroTrigger = {
			trigger: '.anim-hero',
			start: "0% 10%",
			end: "50% 20%",
			// markers: {startColor: "white", endColor: "white"},
	 }
	 
	 media.add({
			// Breakpoints:
			...breakpointsAnim
			
	 }, (context) => {
			let {isMobile, isDesktop} = context.conditions
			
			// Title hero
			const tl = gsap.timeline({scrollTrigger: heroTrigger})
			
			let blurElement = {a: 0}
			// Default values
			gsap.set('.anim-hero-title', {
				 clipPath: 'polygon(0% 0%, 0 0%, 0 100%, 0% 100%)',
				 opacity: 0,
				 filter: "blur(" + 10 + "px)"
			})
			gsap.set('.anim-hero-label', {
				 clipPath: 'polygon(0% 0%, 0 0%, 0 100%, 0% 100%)',
				 opacity: 0
			})
			gsap.set('.anim-hero-image', {
				 clipPath: isDesktop ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' : null,
			})
			gsap.set('.anim-hero-image img', {
				 scale: isDesktop ? 1.1 : 1
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
				 clipPath: isDesktop ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : null,
				 duration: isDesktop ? 1.5 : null,
				 delay: isDesktop ? 0.2 : null,
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
				 filter: "blur(" + 0 + "px)"
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