import "@fontsource/montserrat";

const Navlink = () => {
    return(
        <>
            <section className="container d-flex justify-content-start align-items-center gap-5 mt-5 p-0">
                <a
                style={{
                    fontFamily : 'Montserrat',
                    fontWeight : '700',
                    marginLeft : '13px'
                }}>
                    Accueil
                </a>

                <a
                    style={{
                        fontFamily : 'Montserrat',
                        fontWeight : '700'
                    }}>
                    Relevé
                </a>

                <a
                    style={{
                        fontFamily : 'Montserrat',
                        fontWeight : '700'
                    }}>
                    Graphiques
                </a>
            </section>
        </>
    )
}

export default Navlink