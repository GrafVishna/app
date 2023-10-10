import Container from "@src/components/containers/Container.jsx";
import styles from "./Availability.module.scss"
import Label from "@src/components/text/Label/Label.jsx";
import TitleSection from "@src/components/text/TitleSection/TitleSection.jsx";
import React from "react";
import SubtitleLine from "@src/components/text/SubtitleLine/SubtitleLine.jsx";
import Table from "@src/components/Table/Table.jsx";
import Image from "@src/components/media/Image/Image.jsx";

const Availability = () => {
    const image = "/img/avialability/avialability.jpg"
    const label = "OUR PROJECT"
    const title = "Check Availability"
    const subtitle = "The unique architect with ideas from outside the world. Where design and science meet. With people’s comfort in mind"

    return (
        <div className={styles.availability}>
            <Container containerSize='s-container'>
                <div className={styles.header}>
                    <div className={styles.header__main}>
                        <Label content={label}/>
                        <TitleSection content={title}/>
                    </div>
                    <div className={styles.info}>
                        <SubtitleLine className={styles.subtitle} content={subtitle}/>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.table}>
                        <Table/>
                    </div>
                    <div className={styles.image}>
                        <Image src={image}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Availability