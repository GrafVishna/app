import {useLayoutEffect, useRef} from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import 'lightgallery/css/lightgallery.css';
import PropTypes from 'prop-types'
import Container from '@src/components/containers/Container.jsx'
import GalleryCard from '@src/components/media/GalleryCard/GalleryCard.jsx'
import Label from '@src/components/text/Label/Label.jsx'
import TitleSection from '@src/components/text/TitleSection/TitleSection.jsx'
import styles from './GalleryFour.module.scss'
import 'swiper/scss'
import Gallery from "@src/components/Gallery/Gallery.jsx";
import GalleryFourSlider from "@src/pages/home/GalleryFour/GalleryFourSlider.jsx";

const GalleryFour = (props) => {
    const galleryRef = useRef()
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline()
            const params = {
                scrub: true,
            }

            let tlHeader = gsap.timeline({
                scrollTrigger: {
                    ...params,
                    trigger: '[data-anim="header"]',
                    start: "0% 90%",
                    end: "50% 60%",
                    markers: {startColor: "white", endColor: "white"}
                }
            });
            let tlCards = gsap.timeline({
                scrollTrigger: {
                    ...params,
                    trigger: '[data-anim="cards"]',
                    start: "0% 100%",
                    end: "50% 70%",
                    markers: {startColor: "#f4c2c2", endColor: "#f4c2c2"}
                }
            });
            let tlCardsC = gsap.timeline({
                scrollTrigger: {
                    ...params,
                    trigger: '[data-anim="cards-c"]',
                    start: "0% 100%",
                    end: "50% 70%",
                    markers: {startColor: "#ef3b3b", endColor: "#ef3b3b"}
                }
            });

            tlHeader.from('[data-anim="header"]', {y: 150, opacity: 0,});
            tlCardsC.from('[data-anim="cards-c"]', {y: 150, opacity: 0,});
            tlCards.from('[data-anim="cards"]', {y: 220, opacity: 0,});

        }, galleryRef);

        return () => ctx.revert();
    });

    return (
        <div ref={galleryRef} className={`gallery-four ${styles.gallery}`}>
            <Container containerSize='s-container'>

                <div>
                    <div
                        data-anim="header"
                        className={`${styles.gallery_header}`}>
                        <Label content="TOP SERVICES"/>
                        <TitleSection content="Our Specializations"/>
                    </div>

                    <div className={styles.gallery_slider}>
                        <Gallery params={{addClass: "gallery-margin"}}>
                            <GalleryFourSlider className={styles.gallery_wrapper}>
                                {props.data.map((element, index) => (
                                    <SwiperSlide
                                        data-anim={index === 0 || index === props.data.length - 1 ? "cards" : 'cards-c'}
                                        key={index}
                                        className={styles.gallery_slide}>
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

