import styles from './ProjectsSort.module.scss'
import React, {useEffect, useState} from "react";
import Image from '@src/components/media/Image/Image.jsx'
import Label from "@src/components/text/Label/Label.jsx";
import TitleSection from "@src/components/text/TitleSection/TitleSection.jsx";
import {getDataApi} from '@data/getDataApi.js';
import Container from "@src/components/containers/Container.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import ProjectsSortSlider from "@src/pages/home/ProjectsSort/ProjectsSortSlider.jsx";
import Gallery from "@src/components/Gallery/Gallery.jsx";

const ProjectsSort = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDataApi.getAll('projects');
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.projects}>
            <Container containerSize='s-container'>
                <div className={styles.projects__header}>
                    <div className={styles.projects__info}>
                        <Label content="OUR PROJECT"/>
                        <TitleSection content="Our Latest Projects"/>
                    </div>
                    <nav className={styles.projects__sort_nav}>
                        <ul>
                            <li>
                                <button data-category="all" className={styles.active}>All</button>
                            </li>
                            <li>
                                <button className="architecture">Architecture</button>
                            </li>
                            <li>
                                <button className="construction">Construction</button>
                            </li>
                            <li>
                                <button className="interior_design">Interior Design</button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.projects__items}>
                    <Gallery params={{getCaptionFromTitleOrAlt: false}}>
                        <ProjectsSortSlider className={styles.projects__list}>
                            {data?.map((item, index) => (

                                <SwiperSlide
                                    key={item.id}
                                    data-category={"project-" + item.category}
                                    className={`gallery-item ${styles.projects__item}`}
                                    href={item.src}>
                                    <Image src={item.src} className={styles.projects__image}/>
                                </SwiperSlide>
                            ))}
                        </ProjectsSortSlider>
                    </Gallery>
                </div>
            </Container>
        </div>
    )
}

export default ProjectsSort