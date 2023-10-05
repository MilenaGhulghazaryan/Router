import { Link } from "react-router-dom"
import { MenuArr } from "../Arr/menuArr"
import Header from "../Arr/header"

const Menu = () => {
    return (
        <ul >
            <Header />
            {
                MenuArr.map(({ id, name, path, menu }) => {
                    return (
                        <li key={id}>
                            <Link to={path} style={{ textDecoration: 'none' }}>{name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Menu

