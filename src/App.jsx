import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer"
import { amenazas, debilidades, fortalezas, oportunidades } from "./utils/data";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header title="Toyota Corolla 2024" />
    <Main name="María" debilidades={debilidades} fortalezas={fortalezas} amenazas={amenazas} oportunidades={oportunidades}/>
    <Footer />
    </div>
  );
}

export default App