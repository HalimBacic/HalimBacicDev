import "./App.css";
import Home from "./components/Home";
import Biography from "./components/Biography";
import Contacts from "./components/Contacts";
import React, { useRef, useState } from "react";
import "../src/style/biography.css";
import MainNavigation from "./components/MainNavigation";
import Fab from "@mui/material/Fab";
import Modal from 'react-modal';
import HomeIcon from '@mui/icons-material/Home';
import { Text } from '@nextui-org/react';

Modal.setAppElement('#root');

function App({ Component }) {
  const detailedcvRef = useRef(null);
  const homeBtnRef = useRef(null);
  const contactsRef = useRef(null);
  const homeRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false); // Stanje za provjeru da li je uređaj mobilni

  // Funkcija za provjeru veličine ekrana
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Postavite širinu prema potrebi
  }

  // Postavite osluškivanje promjene veličine ekrana
  window.addEventListener('resize', checkIsMobile);

  const scrollToComponent = (component) => {
    switch (component) {
      case "home":
        homeBtnRef.current.style.display = "none";
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "detailedcv":
        homeBtnRef.current.style.display = "block";
        detailedcvRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contacts":
        homeBtnRef.current.style.display = "block";
        contactsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="AppContainer">
      <div className="mainNavigation" ref={homeRef}>
        <MainNavigation scrollToComponent={scrollToComponent}></MainNavigation>
      </div>
      <div className="container">
        <Home></Home>
      </div>
      <div className="container biography" ref={detailedcvRef}>
        <Biography></Biography>
      </div>
      <div className="floatBtn" ref={homeBtnRef}>
        <Fab onClick={()=>{scrollToComponent("home")}} sx={{backgroundColor:"#FF5733"}} variant="extended">
            <HomeIcon sx={{color:"white", fontSize:"35px"}}></HomeIcon>
        </Fab>
      </div>
      <div className="container contacts" ref={contactsRef}>
        <Contacts></Contacts>
      </div>
      {isMobile && (
        <Modal isOpen={true}>
          <p>Ovo je dijalog za mobilne uređaje.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
