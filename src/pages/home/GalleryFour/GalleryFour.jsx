import {Swiper, SwiperSlide} from 'swiper/react'
import 'lightgallery/css/lightgallery.css';
import PropTypes from 'prop-types'
import Container from '@src/components/containers/Container.jsx'
import GalleryCard from '@src/components/media/GalleryCard/GalleryCard.jsx'
import Label from '@src/components/text/Label/Label.jsx'
import TitleSection from '@src/components/text/TitleSection/TitleSection.jsx'
import styles from './GalleryFour.module.scss'
import 'swiper/scss'
import {ScreenLockToggle} from "@src/functions/ScreenLock.jsx";
import Gallery from "@src/components/Gallery/Gallery.jsx";
import GalleryFourSlider from "@src/pages/home/GalleryFour/GalleryFourSlider.jsx";

const GalleryFour = (props) => {

    return (
        <div className={styles.gallery}>
            <Container containerSize='s-container'>

                <div>
                    <div className={styles.gallery_header}>
                        <Label content="TOP SERVICES"/>
                        <TitleSection content="Our Specializations"/>
                    </div>

                    <div className={styles.gallery_slider}>
                        <Gallery params={{addClass: "gallery-margin"}}>
                            <GalleryFourSlider className={styles.gallery_wrapper}>
                                {props.data.map((element, index) => (
                                    <SwiperSlide key={index} className={styles.gallery_slide}>
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

