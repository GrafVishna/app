import Container from "@src/components/containers/Container.jsx";
import styles from "./Team.module.scss"
import Label from "@src/components/text/Label/Label.jsx";
import TitleSection from "@src/components/text/TitleSection/TitleSection.jsx";
import Image from "@src/components/media/Image/Image.jsx";
import imgTeam from "/public/img/team/team.jpg"
import Peoples from "@src/components/Peoples/Peoples.jsx";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {animation} from "./TeamAnim.js";

const Team = () => {
	 
	 const teamRef = useRef()
	 useEffect(() => {
			let mm = gsap.matchMedia();
			animation(mm, teamRef)
			
			return () => mm.revert();
	 });
	 
	 
	 return (
			<div ref={teamRef} className={styles.team}>
				 <Container containerSize='team-animation s-container'>
						<div className={`team-animation-header ${styles.header}`}>
							 <Label className='team-animation-label' content="Our Project"/>
							 <TitleSection className='team-animation-title' content="Meet With Our Team"/>
						</div>
						<div className={styles.body}>
							 <Image src={imgTeam} className={`team-animation-img ${styles.image}`}/>
							 <div className={styles.peaples}>
									<Peoples className='team-animation-peoples'/>
							 </div>
						</div>
				 </Container>
			</div>
	 )
}

export default Team