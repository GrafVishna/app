import Container from "@src/components/containers/Container.jsx";
import styles from "./Availability.module.scss"
import Label from "@src/components/text/Label/Label.jsx";
import TitleSection from "@src/components/text/TitleSection/TitleSection.jsx";
import React, {useLayoutEffect, useRef} from "react";
import SubtitleLine from "@src/components/text/SubtitleLine/SubtitleLine.jsx";
import Table from "@src/components/Table/Table.jsx";
import Image from "@src/components/media/Image/Image.jsx";
import {gsap} from "gsap";
import {animation} from "./availabilityAnim.js";

const Availability = () => {
	 const image = "/img/avialability/avialability.jpg"
	 const label = "OUR PROJECT"
	 const title = "Check Availability"
	 const subtitle = "The unique architect with ideas from outside the world. Where design and science meet. With people’s comfort in mind"
	 
	 const availability = useRef()
	 useLayoutEffect(() => {
			let mm = gsap.matchMedia();
			animation(mm, availability)
			
			return () => mm.revert();
	 });
	 
	 return (
			<div ref={availability} className={styles.availability}>
				 <Container containerSize='animation-availability s-container'>
						<div className={styles.header}>
							 <div className={styles.header__main}>
									<Label className='animation-availability-label' content={label}/>
									<TitleSection className='animation-availability-title' content={title}/>
							 </div>
							 <div className={styles.info}>
									<SubtitleLine className={`animation-availability-subtitle ${styles.subtitle}`} content={subtitle}/>
							 </div>
						</div>
						<div className={styles.body}>
							 <div className={styles.table}>
									<Table/>
							 </div>
							 <div className={styles.image}>
									<Image className='animation-availability-image' src={image}/>
							 </div>
						</div>
				 </Container>
			</div>
	 )
}

export default Availability