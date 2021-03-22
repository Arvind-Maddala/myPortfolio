import React from "react";
//components
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import './App.css';
import image from './assets/img/parallex/background.webp'



const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
     <MyNavbar/>
     <MyCarousal/>
     <TitleMessage/>
     <div>
     <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={image}
          bgImageAlt="parallax image"
          strength={-200}
        >
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
        </Parallax>
      </div>
     
    </div>
  );
}

export default App;
