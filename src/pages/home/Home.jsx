import React from "react";
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

const Home = () => {
	 
	 return (
			<div className={styles.wrapper}>
				 <Header/>
				 <div className={styles.page}>
						<Hero id='top'/>
						<GalleryFour data={galleryData}/>
						<About id="section0"/>
						<ProjectsSort id="section1"/>
						<Experience id="section2"/>
						<Availability/>
						<Team/>
						<PhotosScroll id="section3"/>
						<Footer/>
				 </div>
			</div>
	 )
}

export default Home
