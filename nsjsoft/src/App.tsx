/** @format */

import "./App.css";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import AboutUs from "./components/Pages/AboutUs";
import History from "./components/Pages/History";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";

function App() {
  return (
    <MainLayout>
      <Home />
      <AboutUs />
      <Services />
      <History />
      {/* <Bussiness /> */}
    </MainLayout>
  );
}

export default App;
