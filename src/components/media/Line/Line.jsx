import styles from './Line.module.scss'

const Line = () => {
    return (
        <>
            <svg className={styles.line_hero} width="889" height="759" viewBox="0 0 889 759" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.170709 2.07716C91.4438 -5.392 140.815 36.5099 148.284 127.783C155.753 219.056 205.124 260.958 296.397 253.489C387.67 246.02 437.042 287.922 444.511 379.195C451.98 470.468 501.351 512.37 592.624 504.901C683.897 497.431 733.268 539.333 740.737 630.606C748.207 721.879 797.578 763.781 888.851 756.312"
                    stroke="#33363F"/>
            </svg>
        </>
    )
}

export default Line