import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import banner from "./Images/banner.jpg";
import Navigationbar from "./Components/NavigationBar";
import Bodycontent from "./Components/Bodycontent";
import Footer from "./Components/Footer";

function App() {
  return (
  <div className="App">
      <Navigationbar img={banner}></Navigationbar>
      <Bodycontent></Bodycontent>
      <Footer></Footer>
  </div>
  );
}
  
export default App;
