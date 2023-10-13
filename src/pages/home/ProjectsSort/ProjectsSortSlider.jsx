import styles from "@src/pages/home/ProjectsSort/ProjectsSort.module.scss";
import {Swiper} from "swiper/react";

const ProjectsSortSlider = ({children, className, params}) => {
    return (
        <Swiper className={className}
                spaceBetween={15}
                slidesPerView={1.2}
                autoHeight={false}
                slides
                breakpoints={{
                    767.98: {
                        slidesPerView: 9999,
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

export default ProjectsSortSlider