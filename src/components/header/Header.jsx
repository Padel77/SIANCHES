import { NavBarInSm } from "@/components/header/NavBarInSm";
import ProfileDropDown from "@/components/header/ProfileDropDown";
import HeaderActiveBath from "@/components/header/HeaderActiveBath";

const Header = () => {
    const useDetails = {
        image: '/logo.png',
        name: 'John Doe',
        mail: 'maryam@gmail.com'
    }
    return (
        <header className="flex justify-between items-center px-12 py-4 mb-5 border-b border-b-secondary-foreground">
            <HeaderActiveBath />
            {/* User Profile Info */}
            <ProfileDropDown user_detail={useDetails} />
            {/* Nav Bar In Small Screen  */}
            <div className="block lg:hidden">
                <NavBarInSm />
            </div>
        </header>);
};

export default Header;