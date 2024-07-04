import Footer from "./Componants/Footer";
import Landing_page from "./Componants/Landing_page";
import Section_1 from "./Componants/Section_1";
import Section_2 from "./Componants/Section_2";
import Section_3 from "./Componants/Section_3";
import Section_4 from "./Componants/Section_4";
// import Section_5 from "./Componants/Section_5";
import Section_6 from "./Componants/Section_6";
import Section_7 from "./Componants/Section_7";

function App() {
  return (
    <div className="bg-black overflow-hidden ">
      {/* <div className="bg-black">
        <div className="flex justify-center w-11223">
          <ul className="text-3xl flex justify-center space-x-20 w-30 border-3 border-blue-400 text-blue-400">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div> */}
      <Landing_page />
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      {/* <Section_5/> */}
      <Section_6/>
      <Section_7/>
      <Footer/>
    </div>
  );
}

export default App;
