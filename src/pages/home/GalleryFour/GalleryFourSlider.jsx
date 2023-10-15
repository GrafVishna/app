import styles from "@src/pages/home/GalleryFour/GalleryFour.module.scss";
import {Swiper} from "swiper/react";

const GalleryFourSlider = ({children, className}) => {
    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={1.2}
            autoHeight={false}
            className={className}
            breakpoints={{
                767.98: {
                    slidesPerView: 4,
                },
                479.98: {
                    slidesPerView: 2.2,
                }
            }}
        >
            {children}
        </Swiper>
    )
}

export default GalleryFourSlider