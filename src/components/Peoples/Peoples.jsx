import styles from "./Peoples.module.scss"
import SimpleBar from "simplebar-react";

const Peoples = () => {
    return (
        <SimpleBar className={styles.peoples_scroll}>
            <div>
                <ul className={styles.peoples_list}>
                    <li>Cody Fisher - CEO</li>
                    <li>Savannah Nguyen - Interior architect</li>
                    <li>Jerome Bell - Interior</li>
                    <li>Cameron Williamson - architect</li>
                    <li>Marvin McKinney - Construction head</li>
                </ul>
            </div>
        </SimpleBar>
    )
}

export default Peoples