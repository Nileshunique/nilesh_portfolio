import About from "../../Components/About/About";
import ContactMe from "../../Components/ContactUs/ContactUs";
import Experience from "../../Components/Experience/Experience";
import Header from "../../Components/Header/Header";
import DevInfo from "../../Components/Info/DevInfo";
import PortfolioGrid from "../../Components/Portfolio/Portfolio";

function MainPage() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <Header />
      <DevInfo />
      <About />
      <Experience />
      <PortfolioGrid />
      <ContactMe />
    </div>
  );
}

export default MainPage;
