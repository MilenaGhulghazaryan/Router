import About from "../Menu/about";
import Home from "../Menu/home";
import Menu from "../Menu/menu";
import MoreAbout from "../Menu/moreAbout";

export const Arr = [
    {
        id: Math.random(),
        name: 'Home',
        path: '/',
        element: <Home />,
        menu: true
    },
    {
        id: Math.random(),
        name: 'About',
        path: '/about',
        element: <About />,
        menu: true
    },
    {
        id: Math.random(),
        name: 'Menu',
        path: '/menu',
        element: <Menu />,
        menu: true
    },
    {
        id: Math.random(),
        path: "/about/:id",
        name: "Moreabout",
        element: <MoreAbout />,
        menu: false
    }
]