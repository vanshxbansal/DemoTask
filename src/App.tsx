import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HeroExport from "./exports/HeroExport";
import SocialPost1 from "./exports/SocialPost1";
import SocialPost2 from "./exports/SocialPost2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/export/hero" element={<HeroExport />} />
        <Route path="/export/post1" element={<SocialPost1 />} />
        <Route path="/export/post2" element={<SocialPost2 />} />
      </Routes>
    </BrowserRouter>
  );
}
