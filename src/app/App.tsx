import Lazymake from "../imports/Lazymake";
import QuickStartSection from "./components/QuickStartSection";
import DocumentationSection from "./components/DocumentationSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1A1F29]">
      <div className="max-w-[1440px] mx-auto relative">
        <Lazymake />
        <QuickStartSection />
        <DocumentationSection />
        <Footer />
      </div>
    </div>
  );
}