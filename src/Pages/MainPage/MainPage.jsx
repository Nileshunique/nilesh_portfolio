import About from "../../Components/About/About";
import DevToBlogFeed from "../../Components/Blogs/Blogs";
import ContactForm from "../../Components/ContactUs/ContactForm";
// import ContactMe from "../../Components/ContactUs/ContactUs";
import Experience from "../../Components/Experience/Experience";
import DevInfo from "../../Components/Info/DevInfo";
import PortfolioGrid from "../../Components/Portfolio/Portfolio";

function MainPage() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <DevInfo />
      <About />
      <Experience />
      <PortfolioGrid />
      <DevToBlogFeed />
      <ContactForm />
      {/* <ContactMe /> */}
    </div>
  );
}

export default MainPage;
