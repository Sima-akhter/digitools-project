import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar"
import Stats from "./components/Stats";
import ToolSection from "./components/ToolSection";
import Footer from "./components/Footer";
import Steps from "./components/Steps";
import Pricing from "./components/PricingSection";




function App() {
  const [cart, setCart] = useState([]);
 

  return (
    <>
    <Navbar cartCount={cart.length} />
     
    

     <main>
        <section>
          {/* This is my hero section  */}
         <Banner></Banner>
          {/* This is my stats section  */}
          <Stats></Stats>

          {/* This is my tool section  */}
          <ToolSection cart={cart} setCart={setCart} />

         <Steps></Steps>
         <Pricing></Pricing>
        </section>
      </main>
    <Footer></Footer>
    </>
  )
}

export default App;
