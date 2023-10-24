import styles from './ProjectsSort.module.scss'
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Image from '@src/components/media/Image/Image.jsx'
import Label from "@src/components/text/Label/Label.jsx";
import TitleSection from "@src/components/text/TitleSection/TitleSection.jsx";
import {getDataApi} from '@data/getDataApi.js';
import Container from "@src/components/containers/Container.jsx";
import {SwiperSlide} from "swiper/react";
import ProjectsSortSlider from "@src/pages/home/ProjectsSort/ProjectsSortSlider.jsx";
import Gallery from "@src/components/Gallery/Gallery.jsx";
import {animation} from './ProjectsSortAnim.js'
import {gsap} from "gsap";

const ProjectsSort = () => {
    const [data, setData] = useState([]);
    const projectsRef = useRef()

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

    useLayoutEffect(() => {
        let mm = gsap.matchMedia();
        animation(mm, projectsRef)

        return () => mm.revert();
    })

    const dataButtons = [
        {
            "category": "all",
            "text": "All",
            "state": true
        },
        {
            "category": "architecture",
            "text": "Architecture",
            "state": false
        },
        {
            "category": "construction",
            "text": "Construction",
            "state": false
        },
        {
            "category": "interior_design",
            "text": "Interior Design",
            "state": false
        }
    ]

    return (
        <div ref={projectsRef} className={styles.projects}>
            <Container containerSize='s-container'>
                <div className={styles.projects__header}>
                    <div className={`${styles.projects__info} anim-projects-header`}>
                        <Label className="anim-projects-label" content="OUR PROJECT"/>
                        <TitleSection className="anim-projects-title" content="Our Latest Projects"/>
                    </div>
                    {dataButtons && (
                        <nav className={styles.projects__sort_nav}>
                            <ul>
                                {dataButtons.map((el, index) => (
                                    <li key={'project' + index}>
                                        <button
                                            data-category={el.category}
                                            className={`${el.state ? styles.active : null}`}>{el.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
                <div className={`${styles.projects__items} anim-projects-items`}>
                    <Gallery params={{getCaptionFromTitleOrAlt: false}}>
                        <ProjectsSortSlider className={styles.projects__list}>
                            {data?.map((item, index) => (
                                <SwiperSlide
                                    key={item.id}
                                    data-category={"project-" + item.category}
                                    className={`
                                        gallery-item
                                        anim-projects-item
                                        ${index % 2 === 0 ? 'anim-projects-item-one' : 'anim-projects-item-two'} 
                                        ${styles.projects__item}
                                    `}
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