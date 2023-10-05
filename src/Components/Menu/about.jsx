import React from "react";
import { Link } from "react-router-dom";
import Header from "../Arr/header";

const About = () => {
    const arr = [
        {
            id: 1,
            name: 'old about'

        },
        {
            id: 2,
            name: 'new about'

        }
    ]
    return (
        <div>
            <Header />
            {
                arr.map(({ id, name }) => {
                    return (
                        <p key={id}>
                            <Link to={`/about/${id}`}>
                                {name}
                            </Link>
                        </p>
                    )
                })
            }
        </div>
    )
}
export default About