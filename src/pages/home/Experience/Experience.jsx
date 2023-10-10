import styles from './Experience.module.scss'
import Container from "@src/components/containers/Container.jsx";
import Plan from "@src/components/media/Plan/Plan.jsx";
import TitleSection from "@src/components/text/TitleSection/TitleSection.jsx";
import React from "react";
import ButtonBorder from "@src/components/buttons/ButtonBorder.jsx";
import Grades from "@src/components/Grades/Grades.jsx";

const leter = '/public/img/r.svg'

export const Experience = () => {

    const data = [
        {
            "percents": "75",
            "text": "Architecture"
        },
        {
            "percents": "85",
            "text": "Construction"
        },
        {
            "percents": "65",
            "text": "Interior Design"
        }

    ]

    return (
        <div className={styles.experience}>
            
            <div>
                <Container containerSize='s-container'>
                    <div className={styles.experience__body}>
                        <div className={styles.experience__image}>
                            <Plan/>
                        </div>
                        <div className={styles.experience__content}>
                            <div>
                                <TitleSection content="We Create Digital Experience"/>
                                <Grades data={data}/>
                                <div className={styles.footer}>
                                    <ButtonBorder text="Lets work together"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className={styles.leter}>
                    <img src={leter} alt="Leter"/>
                </div>
            </div>
        </div>
    )
}

export default Experience