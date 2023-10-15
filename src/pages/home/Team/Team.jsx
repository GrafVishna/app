import Container from "@src/components/containers/Container.jsx";
import styles from "./Team.module.scss"
import Label from "@src/components/text/Label/Label.jsx";
import TitleSection from "@src/components/text/TitleSection/TitleSection.jsx";
import Image from "@src/components/media/Image/Image.jsx";
import imgTeam from "/public/img/team/team.jpg"
import Peoples from "@src/components/Peoples/Peoples.jsx";

const Team = () => {
    return (
        <div className={styles.team}>
            <Container containerSize='s-container'>
                <div className={styles.header}>
                    <Label content="Our Project"/>
                    <TitleSection content="Meet With Our Team"/>
                </div>
                <div className={styles.body}>
                    <Image src={imgTeam} className={styles.image}/>
                    <div className={styles.peaples}>
                        <Peoples/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Team