// Define an interface for a nav item
interface NavItem {
    id: number;
    name: string;
    href: string;
    activeLink: string;
}

// Define the NavItems array with the NavItem type
const NavItems: NavItem[] = [
    {
        id: 1,
        name: "Home",
        href: "/",
        activeLink: ""
    }, 
    {
        id: 2,
        name: "Menu",
        href: "/Products",
        activeLink: "Products"
    }
]

export {
    NavItems,
}
