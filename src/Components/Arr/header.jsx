import React from "react";
import { Arr } from "./arr";
import { Link } from "react-router-dom";
import '../Arr/header.css'
const Header = () => {
    return (
        <ul className="header">
            {
                Arr.map(({ id, path, name, menu }) => {
                    return (menu ?
                        <li key={id}>
                            <Link to={path}>{name}</Link>
                        </li> : null
                    )
                })
            }
        </ul>
    )
}
export default Header