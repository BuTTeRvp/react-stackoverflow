import Navbar from "./components/navbar/navbar";
import "./App.css"
import Footer from "./components/footer/footer";
import Rightpanel from "./components/left/rightpanel";



function App() {
  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <Navbar/>
        <Rightpanel/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App;
