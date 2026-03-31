import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navebar"
import Stats from "./components/Stats";
import ToolSection from "./components/ToolSection";
import Footer from "./components/Footer";




function App() {
  const [cart, setCart] = useState([]);
 

  return (
    <>
     <Navbar></Navbar>
     
    

     <main>
        <section>
          {/* This is my hero section  */}
         <Banner></Banner>
          {/* This is my stats section  */}
          <Stats></Stats>

          {/* This is my tool section  */}
          <ToolSection cart={cart} setCart={setCart} />

         
        </section>
      </main>
    <Footer></Footer>
    </>
  )
}

export default App;
