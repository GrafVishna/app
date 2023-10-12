import Container from "@src/components/containers/Container.jsx";
import Image from "@src/components/media/Image/Image.jsx";
import styles from './PhotosScroll.module.scss'
import {useEffect, useState} from "react";
import {getDataApi} from "@data/getDataApi.js";
import SimpleBar from "simplebar-react";
import Gallery from "@src/components/Gallery/Gallery.jsx";

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

    return (
        <div className={styles.photos_scroll}>
            <Container containerSize="s_container_npd">
                <Gallery>
                    <SimpleBar className={styles.photo_simple}>
                        <ul className={styles.items}>
                            {data?.map((photo, index) => (
                                <a href={photo.src} key={index} className={`gallery-item ${styles.item}`}>
                                    <Image src={photo.src} className={styles.image}/>
                                </a>
                            ))}
                        </ul>
                    </SimpleBar>
                </Gallery>
            </Container>
        </div>
    )
}

export default PhotosScroll