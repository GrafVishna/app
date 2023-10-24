import styles from './Statistics.module.scss'
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {animStatistics} from "./StatisticsAnim.js";
import {gsap} from "gsap";
import {animation} from "@src/pages/home/About/AboutAnim.js";

const Statistics = ({className, label, percent}) => {

    const [percents, setPercents] = useState(0)
    const statisticsRef = useRef()
    
    useEffect(() => {
        animStatistics(percents, setPercents, percent, statisticsRef)

    })
    // useLayoutEffect(() => {
    //     let mm = gsap.matchMedia();
    //     animation(percents, setPercents, percent, mm, statisticsRef)
    //     return () => mm.revert();
    // });

    return (
        <>
            {label && percents ? (
                <div ref={statisticsRef} className={`${className ? className : ''} ${styles.statistics}`}>
                    <div className={styles.statistics_number}>
                        <div id="stat">{percents ? percents : 0}</div>
                        <span>%</span>
                    </div>
                    <div className={styles.statistics_label}>{label}</div>
                </div>
            ) : null}
        </>
    )
}

export default Statistics