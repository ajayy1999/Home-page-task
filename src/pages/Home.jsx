import AboutSection from "../component/about/AboutSection";
import Hero from "../component/home/Hero";
// import Navbar from "../component/common/Navbar";
import ServiceSection from "../component/home/ServiceSection";
import Blog from "./Blog";
import Contact from "./Contact";
import Process from "./Process";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <>
            <Hero />
            <ServiceSection />
            <AboutSection />
            <Process />
            <Testimonials />
            <Blog />
            <Contact />
        </>
    );
};

export default Home;