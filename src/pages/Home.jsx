import Banner from '../components/Banner';
import Banner_img from '../assets/Banner__img.svg';
import Gallery from '../components/Gallery/Gallery';

function Home() {
    return (
        <div>
            <Banner image={Banner_img} text="Chez vous, partout et ailleurs" />
            <Gallery />
        </div>
    );
}

export default Home;

