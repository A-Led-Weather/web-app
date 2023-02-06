import axios from "axios";
import "@fontsource/poppins";

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

    const baseUrlUserName = 'https://aled-weather.fr:8080/username'

    const getUserName = () => {
        axios.get(baseUrlUserName, {
            headers : {
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJFbnpvLmRlc2hheWVzMTBAaWNsb3VkLmNvbSIsImlhdCI6MTY3NTAwNTA0M30.xwcxJu9fuLQuliDvtINIQfVye5L-zwg7k0MK2ZqJwxM',
                'Content-Type' : 'application/json'
            }
        }).then(response => {
            console.log(response.data)
        })
    }

    const username = '';

    return(
        <>
            <section>
                <h1>
                    Bienvenue sur votre Board {username}
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