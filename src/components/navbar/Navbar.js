import styles from './Navbar.module.css'
import "@fontsource/poppins";

const Navbar = () => {
    return(
        <>
            <section className={styles.container}>
                <div className={styles.logo}>

                </div>

                <div className={styles.link}>

                </div>

                <div className={styles.user}>
                    <a>
                        CONNEXION
                    </a>
                    <a>
                        INSCRIPTION
                    </a>
                </div>
            </section>
        </>
    )
}

export default Navbar