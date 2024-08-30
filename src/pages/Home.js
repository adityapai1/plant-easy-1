import Header from "../components/header";
import PlantIllustration from "../images/potted-plant-doodle-vector-background.png";

function Home() {
    return (
        <div className="font-montserrat">
            <Header />
            <div className="flex flex-col items-center min-h-screen bg-green-100">
                <div className="h-1/3 p-12">
                    <img 
                        src={PlantIllustration} 
                        alt="Potted Plant Illustration" 
                        className="w-80 h-auto"
                    />
                </div>
                <div className="text-center px-4 h-2/3 w-2/3">
                    <h2 className="text-4xl mb-4 font-cedarville">Plant Easy</h2>
                    <p className="text-lg text-justify">
                        Discover the joy of nurturing plants with our comprehensive guide to plant care. 
                        Whether you're a seasoned gardener or just starting out, Plant Easy offers detailed 
                        information on a wide variety of plants, expert tips, and a supportive community to 
                        help you grow your green thumb. Explore PlantEasy and nourish your plants!
                    </p>
                </div>
                <div className="flex flex-row w-4/5 pt-12">
                    <div className="w-1/3 bg-white h-40 mx-4 flex items-center justify-center text-2xl">
                        <h1>
                            Grow
                        </h1>
                    </div>
                    <div className="w-1/3 bg-white h-40 mx-4 flex items-center justify-center text-2xl">
                        <h1>
                            Cultivate
                        </h1>
                    </div>
                    <div className="w-1/3 bg-white h-40 mx-4 flex items-center justify-center text-2xl">
                        <h1>
                            Flourish
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
