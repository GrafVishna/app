import {Swiper, SwiperSlide} from 'swiper/react'

import PropTypes from 'prop-types'
import Container from '@src/components/containers/Container.jsx'
import GalleryCard from '@src/components/media/GalleryCard/GalleryCard.jsx'
import Label from '@src/components/text/Label/Label.jsx'
import TitleSection from '@src/components/text/TitleSection/TitleSection.jsx'
import styles from './GalleryFour.module.scss'
import 'swiper/scss'

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
                        <Swiper
                            spaceBetween={15}
                            slidesPerView={1.2}
                            autoHeight={false}
                            className={styles.gallery_wrapper}
                            breakpoints={{
                                767.98: {
                                    slidesPerView: 4,
                                },
                                479.98: {
                                    slidesPerView: 2.2,
                                }
                            }}
                        >
                            {props.data.map((element, index) => (
                                <SwiperSlide key={index} className={styles.gallery_slide}>
                                    <GalleryCard elementData={element}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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

