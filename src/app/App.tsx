import Footer from "../components/Home/Layout/Footer";
import Header from "../components/Home/Layout/Header";
import { AllRoutes } from "../routes/AllRoutes";

function App() {
  return (
    <div className="bg-white text-black text-[15px]">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
