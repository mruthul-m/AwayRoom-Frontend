import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";

const Home = () => {
  return (
    <div>
      <Header>
        <Navbar />
        <Search />
      </Header>
    </div>
  );
};

export default Home;
