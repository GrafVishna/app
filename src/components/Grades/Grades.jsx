import styles from "./Grades.module.scss";
import React from "react";


export const Grades = ({data, className, classNameText}) => {
	 return (
			<>
				 {data ?
						<ul className={styles.grades}>
							 {data.map((element, index) => (
									<li key={"grade-" + index}>
										 <div className={`${className} ${styles.percents}`}>{element.percents}<span>%</span></div>
										 <div className={`${classNameText} ${styles.text}`}>{element.text}</div>
									</li>
							 ))}
						</ul> : null
				 }
			</>
	 
	 )
}

export default Grades