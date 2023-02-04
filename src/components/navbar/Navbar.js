import styles from './Navbar.module.css'

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
                        Login
                    </a>
                    <a>
                        Register
                    </a>
                </div>
            </section>
        </>
    )
}

export default Navbar