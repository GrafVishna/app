import React, {useEffect, useRef, useState} from 'react'
import {getDataApi} from '@data/getDataApi.js'
import styles from './About.module.scss'
import Container from '@src/components/containers/Container.jsx'
import TitleSection from '@src/components/text/TitleSection/TitleSection.jsx'
import SubtitleLine from '@src/components/text/SubtitleLine/SubtitleLine.jsx'
import ButtonRound from '@src/components/buttons/ButtonRound/ButtonRound.jsx'
import Image from '@src/components/media/Image/Image.jsx'
import Statistics from '@src/components/text/Statistics/Statistics.jsx'
import {gsap} from "gsap";
import {animation} from "./AboutAnim.js";

const About = () => {
	 
	 const [data, setData] = useState([])
	 
	 useEffect(() => {
			const fetchData = async () => {
				 try {
						const data = await getDataApi.getAll('about')
						setData(data[0])
				 } catch (error) {
						console.error('Error fetching data:', error)
				 }
			}
			
			fetchData()
	 }, [])
	 
	 const aboutRef = useRef()
	 useEffect(() => {
			let mm = gsap.matchMedia();
			animation(mm, aboutRef)
			
			return () => mm.revert();
	 });
	 
	 return (
			<div ref={aboutRef} className={styles.about}>
				 <Container containerSize="s-container relative anim-about">
						<div className={styles.about_grid}>
							 <div className={styles.text}>
									<TitleSection className="anim-about-title" content={data.title}/>
									<SubtitleLine className={`${styles.subtitle} anim-about-subtitle`} content={data.subtitle}/>
							 </div>
							 <div className={styles.bottom}>
									<Statistics
										 className={`${styles.statistics} anim-about-statistics text`}
										 label={data.label}
										 percent={data.percent}/>
									<div className={styles.bottom_footer}>
										 <div className={styles.bottom_image}>
												<Image src={data.img01} className={`${styles.image1_size} anim-about-image03`}/>
										 </div>
										 <div className={styles.bottom_button}>
												<ButtonRound type='button' text='Read More'/>
										 </div>
									</div>
							 </div>
							 <div className={styles.about_images}>
									<div>
										 <Image src={data.img02} className={`${styles.image2_size} anim-about-image01`}/>
										 <Image src={data.img03} className={`${styles.image3_size} anim-about-image02`}/>
									</div>
							 </div>
						</div>
				 </Container>
			</div>
	 )
}

export default About