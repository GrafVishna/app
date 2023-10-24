import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
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
import PhotosScroll from "@src/pages/home/PhotosScroll/PhotosScroll.jsx";
import Footer from "@src/components/footer/Footer.jsx";
import {gsap} from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const Home = () => {

    const homeRef = useRef();
    const smoother = useRef();

    // const scrollTo = () => {
    //     smoother.current.scrollTo('.box-c', true, 'center center');
    // };

    // useLayoutEffect(() => {
    //     const ctx = gsap.context(() => {
    //         smoother.current = ScrollSmoother.create({
    //             smooth: 2,
    //             effects: true,
    //         });
    //     }, homeRef);
    //     return () => ctx.revert();
    // }, []);

    return (
        <div ref={homeRef} className={styles.wrapper}>
            <Header/>
            <div className={styles.page}>
                <Hero/>
                <GalleryFour data={galleryData}/>
                <About/>
                <ProjectsSort/>
                <Experience/>
                <Availability/>
                <Team/>
                <PhotosScroll/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
