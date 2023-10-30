import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {breakpointsAnim} from "@src/constants/globalConstants.js";

gsap.registerPlugin(ScrollTrigger);

export const animation = (media, ref) => {
	 // Common Animation Parameters
	 const commonParameters = {
			scrub: true,
	 }
	 
	 // ScrollTriggers
	 const headerTrigger = {
			trigger: '.anim-cards-header',
			start: "0% 100%",
			end: "100% 50%",
			...commonParameters
	 }
	 const cardsTrigger = {
			trigger: '.anim-cards',
			start: "0% 100%",
			end: "50% 90%",
			...commonParameters
	 }
	 const cardsCenterTrigger = {
			trigger: '.anim-cards-center',
			start: "0% 100%",
			end: "50% 90%",
			...commonParameters
	 }
	 
	 media.add({
			// Breakpoints:
			...breakpointsAnim
			
	 }, (context) => {
			let {isDesktop} = context.conditions
			
			// Header cards
			gsap.from('.anim-cards-header', {
				 scrollTrigger: {...headerTrigger},
				 y: isDesktop ? 170 : 100,
				 opacity: 0,
				 filter: "blur(" + 10 + "px)"
			})
			// Cards items
			gsap.from('.anim-cards', {
				 scrollTrigger: {...cardsTrigger},
				 y: isDesktop ? 220 : 100
			})
			// Cards items center
			gsap.from('.anim-cards-center', {
				 scrollTrigger: {...cardsCenterTrigger},
				 y: isDesktop ? 150 : 100
			})
			
	 }, ref)
}

