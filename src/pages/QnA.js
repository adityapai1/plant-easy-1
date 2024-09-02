import Header from "../components/header";
import { Helmet } from "react-helmet";

function Qna() {
  return (
    <div className="font-montserrat bg-green-100 min-h-screen">
      <Helmet>
        <title>Plant Care Q&A - Expert Answers to Your Gardening Questions</title>
        <meta
          name="description"
          content="Get expert answers to your gardening questions with our Plant Care Q&A. Learn about watering, sunlight, soil, and pest control to help your plants thrive."
        />
        <meta
          name="keywords"
          content="plant care Q&A, gardening questions, plant watering tips, indoor plants, outdoor plants, plant care tips, gardening advice"
        />

        <link rel="canonical" href="https://planteasy1.netlify.app/qna" />
      </Helmet>
      <Header />
      <div className="max-w-3xl mx-auto p-6">
        {/* Enhanced H1 Tag with Keywords */}
        <h1 className="text-3xl font-semibold mb-8 text-center text-emerald-700">
          Plant Care Q&A - Expert Answers to Your Gardening Questions
        </h1>

        {/* H2 Tag for the Section Introduction */}
        <h2 className="text-2xl font-semibold mb-6 text-emerald-600 text-center">
          Frequently Asked Questions About Plant Care
        </h2>

        {/* Q&A Section 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-4">
            {/* H3 for Each Question */}
            <h3 className="font-semibold mb-2">Manan asks:</h3>
            <p className="text-gray-700">
              How often should I water my indoor succulent plants?
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            {/* H4 for Each Reply */}
            <h4 className="font-semibold mb-2">Reply from Krish:</h4>
            <p className="text-gray-700">
              Succulents generally need to be watered once every 2-3 weeks, depending on the climate and indoor humidity. Make sure the soil is completely dry between waterings to prevent root rot.
            </p>
          </div>
        </div>

        {/* Repeat Q&A Section for Each Question and Answer */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Harsh asks:</h3>
            <p className="text-gray-700">
              How do I take care of my ferns in a dry environment?
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold mb-2">Reply from Suhana:</h4>
            <p className="text-gray-700">
              Ferns need a humid environment to thrive. Mist your ferns regularly or use a humidifier. Also, ensure they are placed in indirect light and water them when the topsoil feels dry.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Gauri asks:</h3>
            <p className="text-gray-700">
              What type of soil is best for cactus plants?
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold mb-2">Reply from Arush:</h4>
            <p className="text-gray-700">
              Cacti prefer well-draining soil, such as a cactus mix or a combination of sand, perlite, and potting soil. This helps prevent root rot by allowing excess water to drain away quickly.
            </p>
          </div>
        </div>

        {/* Additional Content Section */}
        <h2 className="text-2xl font-semibold mb-6 text-emerald-600 text-center">
          More Tips for Indoor and Outdoor Plant Care
        </h2>
        <p className="text-gray-700 mb-8">
          Learn more about <a href="https://www.rhs.org.uk/advice/profile?pid=313" target="_blank" rel="noopener noreferrer">watering schedules</a>, <a href="https://www.almanac.com/content/preparing-soil-planting" target="_blank" rel="noopener noreferrer">soil types</a>, and the best practices to ensure your plants thrive. Discover the best tips for plant care, including <a href="https://www.gardeningknowhow.com/garden-how-to/info/how-to-understand-plants.htm" target="_blank" rel="noopener noreferrer">understanding plant needs</a>, providing adequate sunlight, and <a href="https://www.thespruce.com/how-to-get-rid-of-bugs-on-plants-5080619" target="_blank" rel="noopener noreferrer">protecting them from pests</a>.
        </p>
      </div>
    </div>
  );
}

export default Qna;
