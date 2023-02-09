import styles from './Navbar.module.css'
import logo from '../../assets/logo/logo2.png'
import "@fontsource/poppins";

const Navbar = () => {
    return (
        <>
            <section className="container-fluid">
                <div>
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-sm d-flex justify-content-start align-items-center">
                                <img src={logo} width={100} height={100}/>
                            </div>
                            <div className="col-sm d-flex justify-content-end align-items-center"
                                 style={{
                                     fontFamily: 'Futura',
                                 }}
                            >
                                <div className="col-sm d-flex justify-content-end align-items-center gap-5">
                                    <a>
                                        Language
                                    </a>
                                    <a>
                                        Connexion
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar