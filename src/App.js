import { Header } from "./components/Header/Header";
import { Section1 } from "./components/Section1/Section1";
import { Price } from "./components/Section2/Price";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Services } from "./components/Section3/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const principalElement = () => {
    return (
      <div>
        <Header />
        <Section1 />
        <Services />
        <Price />
        <Footer />
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={principalElement()} />
        <Route path="/contain" element={<Form />} />
        <Route path="/contain/:section--1" element={principalElement()} />
        <Route path="/contain/:section--2" element={principalElement()} />
      </Routes>
    </Router>
  );
}

export default App;
