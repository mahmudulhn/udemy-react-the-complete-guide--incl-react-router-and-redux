import { Outlet } from "react-router-dom";

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
    // const navigation = useNavigate();

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'Loading' && <p>Loading</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;