import styles from './Experience.module.scss'
import Container from "@src/components/containers/Container.jsx";
import Plan from "@src/components/media/Plan/Plan.jsx";
import TitleSection from "@src/components/text/TitleSection/TitleSection.jsx";
import React, {useEffect, useRef, useState} from "react";
import ButtonBorder from "@src/components/buttons/ButtonBorder.jsx";
import Grades from "@src/components/Grades/Grades.jsx";
import {getDataApi} from "@data/getDataApi.js";
import {gsap} from "gsap";
import {animation} from './ExperienceAnim.js'

export const Experience = () => {
	 
	 const [data, setData] = useState([]);
	 const [dataContent, setDataContent] = useState([]);
	 useEffect(() => {
			const fetchData = async () => {
				 try {
						const data = await getDataApi.getAll('experience');
						const dataContent = await getDataApi.getAll('experience_content');
						setData(data);
						setDataContent(dataContent[0])
				 } catch (error) {
						console.error('Error fetching data:', error);
				 }
			};
			
			fetchData();
	 }, []);
	 
	 const experienceRef = useRef()
	 useEffect(() => {
			let mm = gsap.matchMedia();
			animation(mm, experienceRef)
			
			return () => mm.revert();
	 });
	 
	 return (
			<div ref={experienceRef} className={` ${styles.experience}`}>
				 
				 <div className='anim-experience'>
						<Container containerSize='s-container'>
							 <div className={styles.experience__body}>
									<div className={`anim-experience-image ${styles.experience__image}`}>
										 <Plan/>
									</div>
									<div className={`anim-experience-content ${styles.experience__content}`}>
										 <div>
												<TitleSection className='anim-experience-title' content={dataContent.title}/>
												<Grades
													 className='anim-experience-percent'
													 classNameText='anim-experience-percent-text'
													 data={data}/>
												<div className={styles.footer}>
													 <ButtonBorder className='anim-experience-button' text={dataContent.button}/>
												</div>
										 </div>
									</div>
							 </div>
						</Container>
						<div className={styles.leter}>
						
						</div>
				 </div>
			</div>
	 )
}

export default Experience


// import Leter from "@src/components/media/Leter/Leter.jsx";
{/*<Leter/>*/
}