import Navbar from "./Components/Navbar";
import ServicesGrid from "./Components/ServicesGrid";
import ContactSection from "./Components/ContactSection";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div id="top">
      <Navbar />
      <ServicesGrid />
      <ContactSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;