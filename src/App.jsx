import React from "react";
import Home from "./Components/Home"; 


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPage from "./Components/LoginPage";

const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/LoginPage" element={<NewPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;










































// useState } from "react";
// import React from 'react';
// import "./App.css";
// import PrimarySearchAppBar from "./Components/AppBar";
// import Slider from './Components/slides';
// import Cards from './Components/cards';






// const App = () => {
 
//   return (
//     <>
      
//       <PrimarySearchAppBar/>;
//       <br/>  <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>   <br/>  <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>   <br/>  <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>   <br/>  <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>   <br/>  <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

//       <Slider/>

//       <br/>  <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
//       <Cards desc="BenQ Smart Mini Projector" imgSrc="https://f.nooncdn.com/p/v1665392506/N53356366A_1.jpg"/>
//       <Cards desc="Hisense VIDAA U6 4K" imgSrc="https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424523/e4637035-8cd6-4d56-a859-b5e1017d52ed.jpg?format=avif&amp;width=240" alt="VIDAA U6 4K Smart TV, 70 Inch UHD E6K With Dolby Vision, Pixel Tuning, Smooth Motion, Game Mode Plus 2023 New Model 70E6K Black " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards desc="JBL Cinema SB270 2.1"imgSrc="https://f.nooncdn.com/p/v1690369167/N53422649A_1.jpg?format=avif&amp;width=240" alt="Cinema SB270 2.1 Channel Soundbar With Wireless Subwoofer, Powerful 220W Output, Deep &amp; Thrilling Bass, Dolby Digital, Bluetooth Streaming, One Cable Connection HDMI ARC JBLSB270BLKUK Black " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards desc="Beauenty Makeup Kit For"imgSrc="https://f.nooncdn.com/p/pzsku/ZBB58D45F4691E9275F9AZ/45/_/1640243565/9a899467-d747-44b9-9cba-58e0274c57b1.jpg?format=avif&amp;width=240" alt="Makeup Kit For Kids " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards desc="Sharpdo Ultrasonic Inhaler"imgSrc="https://f.nooncdn.com/p/v1615231293/N20985375A_1.jpg?format=avif&amp;width=240" alt="Ultrasonic Inhaler Mesh Nebulizer " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards desc="Deerma Portable Handheld"imgSrc="https://f.nooncdn.com/p/v1668679670/N25281642A_2.jpg?format=avif&amp;width=240" alt="Portable Handheld Vacuum Cleaner 400-600W 1.2 L 400 W DX115C Black/Silver " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards  desc="MYTOYS MT760 High"imgSrc="https://f.nooncdn.com/p/v1623649517/N48140555A_1.jpg?format=avif&amp;width=240" alt="MT760 High Speed Foldable Electric Scooter 45km/h Bluetooth App Control, Quick Easy Folding, 25km Range, Front E-ABS Anti-Lock System, Rear Mechanical Disk Brake 109 x 14 x 52cm " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards  desc=""imgSrc="https://f.nooncdn.com/p/pzsku/ZBB58D45F4691E9275F9AZ/45/_/1640243565/9a899467-d747-44b9-9cba-58e0274c57b1.jpg?format=avif&amp;width=240" alt="Makeup Kit For Kids " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards  desc=""imgSrc="https://f.nooncdn.com/p/v1615220190/N13164722A_1.jpg?format=avif&amp;width=240" alt="Now Foods Extra Strenght Biotin Dietary Supplement  10 mg (10,000 mcg), 120 Veg Capsules " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards desc="" imgSrc="https://f.nooncdn.com/p/v1635349986/N47729493A_1.jpg?format=avif&amp;width=240" alt="Electric Dancing Plant Cactus Plush Stuffed Toy -Green/Brown With Music For Kids ‎32 x 27 x 11.5cm " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards desc="BenQ Smart Mini Projector" imgSrc="https://f.nooncdn.com/p/v1624194107/N48426146A_1.jpg?format=avif&amp;width=240" alt="Pack Of 20 Mystery Each Box 22cm " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards  desc="Deerma Portable Handheld"imgSrc="https://f.nooncdn.com/mpcms/EN0001/assets/b932f787-9245-4dc8-a108-52a8d40d0f30.png?format=avif" alt="/beauty-and-health/health/wellness/massage-relaxation?sort[by]=popularity&amp;sort[dir]=desc" width="100%" height="100%"/>
//       <Cards desc="Beauenty Makeup Kit For" imgSrc="https://f.nooncdn.com/p/v1685366366/N53386420A_1.jpg?format=avif&amp;width=240" alt="185 L Gross / 125 L Net, Double Door Refrigerator,  Defrost, R600a Refrigerant, 3 Star Esma, Temperature Control, Inside Light, Inside Condenser, Vegetable Crisper, Bottle Racks, Removable Gasket, Adjustable Foot 125 L NR185RSI Inox Colour " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards desc="Hisense VIDAA U6 4K" imgSrc="https://f.nooncdn.com/p/pnsku/N18938413A/45/_/1704712174/56ba35b5-a00f-47ff-800e-a129c903210d.jpg?format=avif&amp;width=240" alt="Hair Vitamins, 60 Gummies " class="sc-19edbe5f-1 dfDzbG"/>
//       <Cards desc="Beauenty Makeup Kit For" imgSrc="https://f.nooncdn.com/p/pnsku/N53398633A/45/_/1704184673/7060c16d-bcd3-4275-9431-3fef8b1a5a01.jpg?format=avif&amp;width=240" alt="58 Inch Crystal UHD 4K Smart TV 2023 58CU7000 UA58CU7000UXZN Black " class="sc-19edbe5f-1 dfDzbG"/>
//     </>
//   );
// };

// export default App;