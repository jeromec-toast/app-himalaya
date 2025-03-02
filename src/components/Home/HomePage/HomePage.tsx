import Banner from "./Banner";
import { Carousel } from "./Carousel";
import Feature from "./Feature";
import FrequentlyAsk from "./FrequentlyAsk";
import LatestProduct from "./LatestProduct";
import Metricks from "./Metricks";

function HomePage() {

    let img1 = 'https://i.ibb.co/ncrXc2V/1.png'
    let img2 = 'https://i.ibb.co/B3s7v4h/2.png'
    let img3 = 'https://i.ibb.co/XXR8kzF/3.png'
    let img4 = 'https://i.ibb.co/yg7BSdM/4.png'

    const slides = [img1, img2, img3, img4];

    return (
        <div className="px-4 sm:px-10">
            <Banner />
            <LatestProduct />
            <Metricks />
            <Feature />
            <FrequentlyAsk />
        </div>
    )
}

export default HomePage;