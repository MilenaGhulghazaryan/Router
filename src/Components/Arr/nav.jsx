import React from "react";
import { Route, Routes } from "react-router-dom";
import { Arr } from "./arr";

const Nav = () => {
    return (
        <Routes>
            {
                Arr.map(({ id, element, path }) => {
                    return (
                        <Route key={id} path={path} element={element} />
                    )
                })
            }
        </Routes>
    )
}
export default Nav;