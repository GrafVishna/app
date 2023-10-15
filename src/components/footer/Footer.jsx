import styles from './Footer.module.scss'
import Container from "@src/components/containers/Container.jsx";
import Logo from "@src/components/header/Logo/Logo.jsx";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container containerSize="s-container">
                <div className={styles.body}>
                    <div className={styles.col_logo}>
                        <div className={styles.logo}>
                            <Logo/>
                        </div>
                        <p className={styles.info}>
                            Take a look at how we designed this housesimply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old.
                        </p>
                    </div>
                    <div className={styles.col_links}>
                        <ul>
                            <li><a className="hover-link" href="#">The Studio</a></li>
                            <li><a className="hover-link" href="#">Project</a></li>
                            <li><a className="hover-link" href="#">Architecture</a></li>
                            <li><a className="hover-link" href="#">Blog</a></li>
                            <li><a className="hover-link" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={styles.col_contacts}>
                        <div className={styles.contacts}>
                            <div className={styles.address}>
                                <h3>Visit</h3>
                                <p>Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184</p>
                            </div>
                            <div className={styles.tel}>
                                <h3>Call</h3>
                                <a className="hover-link" href="tel:017-6153-1774">017-6153-1774</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer