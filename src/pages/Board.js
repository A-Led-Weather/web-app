import axios from "axios";

const Board = () => {

    const baseUrl = 'https://aled-weather.fr:8080/reports'

    const request = () => {
        axios.get(baseUrl, {
            headers : {
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJFbnpvLmRlc2hheWVzMTBAaWNsb3VkLmNvbSIsImlhdCI6MTY3NTAwNTA0M30.xwcxJu9fuLQuliDvtINIQfVye5L-zwg7k0MK2ZqJwxM',
                'Content-Type' : 'application/json'
            }
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <>
            <section>
                <h1>
                    Bienvenue sur votre Board.
                </h1>

                <form>
                    <input placeholder={""}/>
                    <input placeholder={""}/>
                    <input placeholder={""}/>

                    <input type={"submit"}/>
                </form>
            </section>
        </>
    )
}

export default Board