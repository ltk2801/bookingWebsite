import ContentHp from "../../component/ContentHomePage/ContentHp";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Navbar from "../../component/Navbar/Navbar";

// Phần HomePage gồm 1 Navbar, Header, ContentHp và Footer component

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ContentHp />
      <Footer />
    </div>
  );
};

export default Home;
