import React, {useEffect, useRef, useState} from 'react';
import {getDataApi} from '@data/getDataApi.js';
import {gsap} from "gsap";
import styles from './Hero.module.scss';
import Container from '@src/components/containers/Container.jsx';
import Label from '@src/components/text/Label/Label.jsx';
import DecorText from '@src/components/text/DecorText/DecorText.jsx';
import HeroTitle from '@src/components/text/HeroTitle/HeroTitle.jsx';
import Subtitle from '@src/components/text/Subtitle/Subtitle.jsx';
import Image from '@src/components/media/Image/Image.jsx';
import Star from '@src/components/media/Star/Star.jsx';
import ButtonBorder from "@src/components/buttons/ButtonBorder.jsx";
import {animation} from './HeroAnim.js'
import Line from "@src/components/media/Line/Line.jsx";


const Hero = () => {
	 const [data, setData] = useState([]);
	 useEffect(() => {
			const fetchData = async () => {
				 try {
						const data = await getDataApi.getAll('hero');
						setData(data[0]);
				 } catch (error) {
						console.error('Error fetching data:', error);
				 }
			};
			fetchData();
	 }, []);
	 
	 const heroRef = useRef()
	 useEffect(() => {
			let mm = gsap.matchMedia();
			animation(mm, heroRef)
			
			return () => mm.revert();
	 });
	 
	 return (
			<div ref={heroRef} className={styles.hero}>
				 <Container containerSize="s-container-big relative anim-hero">
						<div data-anim="hero" className={styles.hero_grid}>
							 <div className={styles.hero_content}>
									<div className={styles.stars}>
										 <Star/>
										 <Star/>
									</div>
									<Label className="anim-hero-label" content={data.label}/>
									<HeroTitle className="anim-hero-title" content={data.title}/>
									<Subtitle className="anim-hero-subtitle" content={data.subtitle}/>
									<ButtonBorder className="anim-hero-button" text={data.button_text} type={data.button_type}/>
							 </div>
							 <div className={styles.hero_img}>
									<Image src={data.image} className={`${styles.image_size} anim-hero-image`}/>
							 </div>
							 <DecorText className='decor-text-hero' content="Interior"/>
							 <span className={styles.decor_line}>
                        <Line/>
                    </span>
						</div>
				 </Container>
			</div>
	 );
};

export default Hero;

