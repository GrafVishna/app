import styles from "./Grades.module.scss";
import React from "react";


export const Grades = ({data}) => {
    return (
        <>
            {data ?
                <ul className={styles.grades}>
                    {data.map((element, index) => (
                        <li key={"grade-" + index}>
                            <div className={styles.percents}>{element.percents}<span>%</span></div>
                            <div className={styles.text}>{element.text}</div>
                        </li>
                    ))}
                </ul> : null
            }
        </>

    )
}

export default Grades