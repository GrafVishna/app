import {useLayoutEffect, useRef} from "react";
import {SwiperSlide} from 'swiper/react'

import 'lightgallery/css/lightgallery.css';
import PropTypes from 'prop-types'
import Container from '@src/components/containers/Container.jsx'
import GalleryCard from '@src/components/media/GalleryCard/GalleryCard.jsx'
import Label from '@src/components/text/Label/Label.jsx'
import TitleSection from '@src/components/text/TitleSection/TitleSection.jsx'
import Gallery from "@src/components/Gallery/Gallery.jsx";
import GalleryFourSlider from "@src/pages/home/GalleryFour/GalleryFourSlider.jsx";
import {animation} from "./GalleryFourAnim.js";

import styles from './GalleryFour.module.scss'
import 'swiper/scss'

import {gsap} from 'gsap';

const GalleryFour = (props) => {
    const galleryRef = useRef()
    useLayoutEffect(() => {
        let mm = gsap.matchMedia();
        // Anim Function
        animation(mm, galleryRef)
        //   *****   //
        return () => mm.revert();
    });

    return (
        <div ref={galleryRef} className={`gallery-four ${styles.gallery}`}>
            <Container containerSize='s-container'>

                <div>
                    <div
                        className={`${styles.gallery_header} anim-cards-header`}>
                        <Label content="TOP SERVICES"/>
                        <TitleSection content="Our Specializations"/>
                    </div>

                    <div className={styles.gallery_slider}>
                        <Gallery params={{addClass: "gallery-margin"}}>
                            <GalleryFourSlider className={styles.gallery_wrapper}>
                                {props.data.map((element, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className={`
                                            ${styles.gallery_slide} 
                                            ${index === 0 || index === props.data.length - 1 ? "anim-cards" : 'anim-cards-center'}`}>
                                        <GalleryCard elementData={element}/>
                                    </SwiperSlide>
                                ))}
                            </GalleryFourSlider>
                        </Gallery>
                    </div>
                </div>
            </Container>
        </div>
    )
}

GalleryFour.propTypes = {
    data: PropTypes.array
}

export default GalleryFour;

