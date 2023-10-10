import styles from './ProjectsSort.module.scss'
import React, {useContext, useEffect, useState} from "react";
import Image from '@src/components/media/Image/Image.jsx'
import Label from "@src/components/text/Label/Label.jsx";
import TitleSection from "@src/components/text/TitleSection/TitleSection.jsx";
import {getDataApi} from '@data/getDataApi.js';
import Container from "@src/components/containers/Container.jsx";
import {MenuContext} from "@src/providers/UpdateMenuProvider.jsx";
import {Swiper, SwiperSlide} from "swiper/react";

const ProjectsSort = () => {
    const {stateMenu, setStateMenu} = useContext(MenuContext);
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
                    <Swiper className={styles.projects__list}
                            spaceBetween={15}
                            slidesPerView={1.2}
                            autoHeight={false}
                            breakpoints={{
                                767.98: {
                                    slidesPerView: 9999,
                                },
                                479.98: {
                                    slidesPerView: 2.2,

                                }
                            }}
                    >

                        {data.map((item, index) => (
                            <SwiperSlide key={item.id} data-category={"project-" + item.category}
                                         className={styles.projects__item}>
                                <Image src={item.src} className={styles.projects__image}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default ProjectsSort