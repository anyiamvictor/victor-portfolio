import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import PortfolioLayout from "../components/layout/PortfolioLayout";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductWorkPage from "../pages/ProductWorkPage";
import ExpertisePage from "../pages/ExpertisePage";
import ContactPage from "../pages/ContactPage";
import CaseStudyPage from "../pages/case-studies/CaseStudyPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="work" element={<ProductWorkPage />} />
          <Route path="work/:slug" element={<CaseStudyPage />} />
          <Route path="expertise" element={<ExpertisePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
