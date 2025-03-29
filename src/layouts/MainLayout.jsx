import { Outlet } from 'react-router-dom';
import './MainLayout.css';
import Navbar from '../component/common/Navbar';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div className="layout-container">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;