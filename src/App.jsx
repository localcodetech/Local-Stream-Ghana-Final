import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/contact";
import PortfolioPage from "./pages/Portfolio";
import ServicesPage from "./pages/Services";
import SolutionsPage from "./pages/Solutions";
import TechnologyPage from "./pages/Technology";
import NotFoundPage from "./pages/Notfound";
import RootLayout from "./layout/RootLayout";
import TermsOfService from "./pages/Termsofservices";
import LearnMorePage from "./pages/LearnMore";
import PrivacyPolicy from "./pages/Privacypolicy";

function App() {

  
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/termsofservices" element={<TermsOfService />} />
          <Route path="/more" element={<LearnMorePage />} />
          <Route path="/privacy" element= {<PrivacyPolicy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
