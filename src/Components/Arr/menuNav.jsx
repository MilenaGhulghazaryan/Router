import { MenuArr } from "./menuArr";
const Nav = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    MenuArr.map(({ id, element, path }) => {
                        return (
                            <Route key={id} path={path} element={element} />
                        )
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}
export default Nav;