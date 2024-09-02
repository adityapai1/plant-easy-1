import Footer from "../components/footer";
import Header from "../components/header";

function Qna() {
  return (
    <div className="font-montserrat bg-green-100 min-h-screen">
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
              How often should I water my indoor succulent plants?
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold mb-2">Reply from Suhana:</h4>
            <p className="text-gray-700">
              Succulents generally need to be watered once every 2-3 weeks, depending on the climate and indoor humidity. Make sure the soil is completely dry between waterings to prevent root rot.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Gauri asks:</h3>
            <p className="text-gray-700">
              How often should I water my indoor succulent plants?
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold mb-2">Reply from Arush:</h4>
            <p className="text-gray-700">
              Succulents generally need to be watered once every 2-3 weeks, depending on the climate and indoor humidity. Make sure the soil is completely dry between waterings to prevent root rot.
            </p>
          </div>
        </div>

        {/* Additional Content Section */}
        <h2 className="text-2xl font-semibold mb-6 text-emerald-600 text-center">
          More Tips for Indoor and Outdoor Plant Care
        </h2>
        <p className="text-gray-700 mb-8">
          Learn more about watering schedules, soil types, and the best practices to ensure your plants thrive. Discover the best tips for plant care, including understanding plant needs, providing adequate sunlight, and protecting them from pests.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Qna;
