import React, {useContext} from "react";
import Header from '@src/components/header/Header'
import Hero from '@src/pages/home/Hero/Hero'
import GalleryFour from '@src/pages/home/GalleryFour/GalleryFour'
import About from '@src/pages/home/About/About.jsx'
import galleryData from '@data/GalleryFourData.json'
import styles from './Home.module.scss'
import ProjectsSort from "@src/pages/home/ProjectsSort/ProjectsSort.jsx";
import Experience from "@src/pages/home/Experience/Experience.jsx";
import Availability from "@src/pages/home/Availability/Availability.jsx";
import Team from "@src/pages/home/Team/Team.jsx";


const Home = () => {

    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.page}>
                <Hero/>
                <GalleryFour data={galleryData}/>
                <About/>
                <ProjectsSort/>
                <Experience/>
                <Availability/>
                <Team/>
            </div>
        </div>
    )
}

export default Home
