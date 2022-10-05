import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css"
import Footer from "./components/footer/footer";
import Left from "./components/left/left";



function App() {
  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <Navbar/>
        <Left/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App;
