import Container from "@src/components/containers/Container.jsx";
import Image from "@src/components/media/Image/Image.jsx";
import styles from './PhotosScroll.module.scss'
import React, {useEffect, useRef, useState} from "react";
import {getDataApi} from "@data/getDataApi.js";
import SimpleBar from "simplebar-react";
import Gallery from "@src/components/Gallery/Gallery.jsx";
import {gsap} from "gsap";
import {animation} from "./PhotosScrollAnim.js";
import {AiOutlineSearch} from 'react-icons/ai'

// import {BsSearch} from "react-icons/bs";

function LiaSearchPlusSolid() {
	 return null;
}

const PhotosScroll = () => {
	 
	 const [data, setData] = useState([]);
	 useEffect(() => {
			const fetchData = async () => {
				 try {
						const data = await getDataApi.getAll('photos_scroll');
						setData(data);
				 } catch (error) {
						console.error('Error fetching data:', error);
				 }
			};
			
			fetchData();
	 }, []);
	 
	 const photos = useRef()
	 useEffect(() => {
			let mm = gsap.matchMedia();
			animation(mm, photos)
			
			return () => mm.revert();
	 });
	 
	 return (
			<div ref={photos} className={`${styles.photos_scroll} photos_scroll`}>
				 <Container containerSize="anim-photos-scroll s_container_npd">
						<Gallery params={{getCaptionFromTitleOrAlt: false, addClass: "no-margin"}}>
							 <SimpleBar classNames={{track: 'simplebar-track simplebar-horizontal photos_simple'}}
													className={styles.photo_simple}>
									<ul className={styles.items}>
										 {data?.map((photo, index) => (
												<li key={index}>
													 <a
															href={photo.src}
															className={`anim-photos-scroll-item gallery-item ${styles.item}`}>
															<Image src={photo.src} className={styles.image}/>
															<AiOutlineSearch size="40px" className='pointer-events-none'/>
													 </a>
												</li>
										 ))}
									</ul>
							 </SimpleBar>
						</Gallery>
				 </Container>
			</div>
	 )
}

export default PhotosScroll