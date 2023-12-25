import Header from "./Components/1.HeaderSection/Header";
import Room from "./Components/2.Room/Room";
import Dive from "./Components/3.DiveSection/Dive";
import TabsParent from "./Components/5.TabsSection/TabsParent";
import Search from "./Components/4.SearchByRoom/Search";
import Flow from "./Components/6.FlowImage/Flow";
import Navbar from "./Components/Navbar/Navbar";
import BgWrapper from "./Components/Wrappers/BgWrapper";
import ThemeWrapper from "./Components/Wrappers/ThemeWrapper";
import Demo from "./Components/7.Demo/Demo";
import News from "./Components/8.Newsletter/News";
import Footer from "./Components/9.Footer/Footer";

function App() {
  return (
    <ThemeWrapper>
      <Navbar />
      <Header />
      <BgWrapper>
        <Room />
        <Dive />
        <Search />
        <TabsParent />
        <Flow />
        <Demo />
      </BgWrapper>
      <News />
      <Footer />
    </ThemeWrapper>
  );
}

export default App;
