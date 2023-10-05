import MenuBurger from "../Menu/menuBurger";

export const MenuArr = [
    {
        id: Math.random(),
        name: 'Burger',
        path: '/burger',
        element: <MenuBurger />
    },
    {
        id: Math.random(),
        name: 'Pizza',
        path: '/pizza'
    }
]