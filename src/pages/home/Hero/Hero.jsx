import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {getDataApi} from '@data/getDataApi.js';
import styles from './Hero.module.scss';
import Container from '@src/components/containers/Container.jsx';
import Label from '@src/components/text/Label/Label.jsx';
import DecorText from '@src/components/text/DecorText/DecorText.jsx';
import HeroTitle from '@src/components/text/HeroTitle/HeroTitle.jsx';
import Subtitle from '@src/components/text/Subtitle/Subtitle.jsx';
import Image from '@src/components/media/Image/Image.jsx';
import Star from '@src/components/media/Star/Star.jsx';
import ButtonBorder from "@src/components/buttons/ButtonBorder.jsx";
import {gsap} from "gsap";

const decorLine = './img/decor/decor-line-01.svg';

const Hero = (props) => {
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
    useLayoutEffect(() => {
        let heroContext = gsap.context(() => {
            const params = {
                scrub: true,
            }

            let tlHero = gsap.timeline({
                scrollTrigger: {
                    ...params,
                    trigger: '[data-anim="hero"]',
                    start: "20% 0%",
                    end: "100% 30%",
                    markers: {startColor: "#d9f1a8", endColor: "#d9f1a8"}
                }
            });

            tlHero.to('[data-anim="hero"]', {y: -100, opacity: 0,});

        }, heroRef);

        return () => heroContext.revert();
    });

    return (
        <div ref={heroRef} className={styles.hero}>
            <Container containerSize="s-container-big relative">
                <div data-anim="hero" className={styles.hero_grid}>
                    <div className={styles.hero_content}>
                        <div className={styles.stars}>
                            <Star/>
                            <Star/>
                        </div>
                        <Label content={data.label}/>
                        <HeroTitle content={data.title}/>
                        <Subtitle content={data.subtitle}/>
                        <ButtonBorder text={data.button_text} type={data.button_type}/>
                    </div>
                    <div className={styles.hero_img}>
                        <Image src={data.image} className={styles.image_size}/>
                    </div>
                    <DecorText className='decor-text-hero' content="Interior"/>
                    <span className={styles.decor_line}>
                        <img src={decorLine} alt="" className='w-full'/>
                    </span>
                </div>
            </Container>
        </div>
    );
};

export default Hero;

