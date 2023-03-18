import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import Sec1 from "./Components/Sec1";
import WhatIsEta from "./Components/WhatIsEta";
import "bootstrap/dist/css/bootstrap.min.css";
import Commission from "./Components/Commission";
import WithDraw from "./Components/WithDraw";
import EtaProtfolio from "./Components/EtaProtfolio";
import Pagenation from "./Components/Pagenation";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Sec1></Sec1>
      <WhatIsEta></WhatIsEta>
      <Commission></Commission>
      <WithDraw></WithDraw>
      <EtaProtfolio></EtaProtfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
