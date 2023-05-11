import ProductSection from "../../ProductSection/ProductSection";
import About from "../About/About";
import Banner from "../Banner/Banner";
import InfoSection from "../InfoSection/InfoSection";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <InfoSection/>
            <ProductSection/>
        </div>
    );
};

export default Home;