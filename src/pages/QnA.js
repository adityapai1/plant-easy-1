import Header from "../components/header";

function Qna() {
  return (
    <div className="font-montserrat bg-green-100 min-h-screen">
      <Header />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-8 text-center text-emerald-700">Q&A</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Manan asks:</h2>
            <p className="text-gray-700">
              How often should I water my indoor succulent plants?
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2">Reply from Krish:</h3>
            <p className="text-gray-700">
              Succulents generally need to be watered once every 2-3 weeks, depending on the climate and indoor humidity. Make sure the soil is completely dry between waterings to prevent root rot.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Harsh asks:</h2>
            <p className="text-gray-700">
              How often should I water my indoor succulent plants?
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2">Reply from Suhana:</h3>
            <p className="text-gray-700">
              Succulents generally need to be watered once every 2-3 weeks, depending on the climate and indoor humidity. Make sure the soil is completely dry between waterings to prevent root rot.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="mb-4">
            <h2 className="font-semibold mb-2">Gauri asks:</h2>
            <p className="text-gray-700">
              How often should I water my indoor succulent plants?
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold mb-2">Reply from Arush:</h3>
            <p className="text-gray-700">
              Succulents generally need to be watered once every 2-3 weeks, depending on the climate and indoor humidity. Make sure the soil is completely dry between waterings to prevent root rot.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Qna;
