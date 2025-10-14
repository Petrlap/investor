import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/HomePage/HomePage";
import { About } from "../pages/AboutPage/AboutPage";
import { Contacts } from "../pages/ContactsPage/ContactsPage";
import { MarketOverview } from "../pages/MarketOverviewPage/MarketOverviewPage";
import { FAQ } from "../pages/FAQPage/FAQPage";
import { NotFound } from "../pages/NotFoundPage/NotFoundPage";
import { PhotoProject } from "../pages/PhotoProjectPage/PhotoProjectPage";
import { SocialResponsibility } from "../pages/SocialResponsibilityPage/SocialResponsibilityPage";
import { Layout } from "../components/Layout";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="marketoverview" element={<MarketOverview />} />
          <Route path="responsibility" element={<SocialResponsibility />} />
          <Route path="photoproject" element={<PhotoProject />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };
