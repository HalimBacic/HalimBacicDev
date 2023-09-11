import { Container, Image } from "@nextui-org/react";
import React, { useRef } from "react";
import "../style/biography.css";
import Stack from "@mui/material/Stack";
import { Button } from "@nextui-org/react";
import { CardMedia, Divider } from "@mui/material";
import BiographySection from "./BiographySection";
import { Scrollbars } from "react-custom-scrollbars";
import EducationBiographySection from "./EducationBiographySection";

const aboutMe =
  "Hello. My name is Halim Bačić. I am software developer and " +
  "software engineering student in Banja Luka. This is my portfolio where you can find some " +
  "informations about me. ";

const experience =
  "After some small projects and faculty projects, I joined Alea Partners. " +
  "I was intern for 2 months. After that time, I got full-time job as backend engineer. I want learn more " +
  "and more, you can read about it on my blog section.";

const skills =
  "In faculty, I learned Java and C# from object-oriented programming languages and some " +
  "Android programming. Also, I know C and C++. For database managment, I use MySql. From 2016 to 2020, " +
  "I was using Linux as my primary OS, so I want to emphasize that I can work with Linux systems as Windows. ";

const navigationButtonCss = {
  color: "#ffd333",
  fontFamily: "Ruda, sans-serif",
  fontSize: "70%",
  padding: "3em",
  "&:hover": {
    borderRight: "4px solid #ffd333",
    borderRadius: 0,
  },
  "&:focus": {
    border: "1px solid #ffd333",
    borderRadius: 0,
  },
};

const scrollStyle = {
  color: "yellow",
};

function Biography() {
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const addidionalRef = useRef(null);
  const scrollbarRef = useRef(null);

  const scrollToComponent = (component) => {
    switch (component) {
      case "aboutme":
        aboutMeRef.current.scrollIntoView({ behavior: "smooth", block: 'start'  });
        break;
      case "education":
        educationRef.current.scrollIntoView({ behavior: "smooth", block: 'start'  });
        break;
      case "experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth", block: 'start'  });
        break;
      case "skills":
        skillsRef.current.scrollIntoView({ behavior: "smooth", block: 'start'  });
        break;
      case "additional":
        addidionalRef.current.scrollIntoView({ behavior: "smooth", block: 'start'  });
        break;
      default:
        break;
    }
  };

  return (
    <div className="biographyContainer">
      <div className="leftNavigation">
        <CardMedia
          component="img"
          image={require("../resources/cvimg.jpg")}
          sx={{
            heigth: "80%",
            width: "80%",
            border: "3px solid #980101",
            borderRadius: "10%",
          }}
        />
        {/* <Stack
          direction="column"
          spacing={1}
          divider={
            <Divider
              orientation="horizontal"
              variant="middle"
              sx={{ backgroundColor: "#ffd333" }}
              flexItem
            ></Divider>
          }
        >
          <Button
            light
            size="sm"
            onClick={(e) =>{ e.stopPropagation(); scrollToComponent("aboutme")}}
            css={navigationButtonCss}
          >
            About me
          </Button>
          <Button
            light
            size="sm"
            onClick={() => scrollToComponent("education")}
            css={navigationButtonCss}
          >
            Education
          </Button>
          <Button
            light
            size="sm"
            onClick={(e) =>{e.stopPropagation(); scrollToComponent("experience")}}
            css={navigationButtonCss}
          >
            Experience
          </Button>
          <Button
            light
            size="sm"
            onClick={() => scrollToComponent("skills")}
            css={navigationButtonCss}
          >
            Skills
          </Button>
          <Button
            light
            size="sm"
            onClick={() => scrollToComponent("additional")}
            css={navigationButtonCss}
          >
            Additional
          </Button>
        </Stack> */}
      </div>
      <div className="rightBio">
        <div className="scrollDiv" ref={scrollbarRef}>
          <Scrollbars
            renderTrackHorizontal={(props) => (
              <div
                {...props}
                style={{ display: "none", overflowY:"hidden" }}
                className="track-vertical"
              />
            )}
          >
            <Container className="bioContainer" style={{ scrollStyle }}>
              <div ref={aboutMeRef}>
                <BiographySection
                  name={"About me"}
                  content={aboutMe}
                ></BiographySection>
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  sx={{ backgroundColor: "#ffd333" }}
                ></Divider>
              </div>
              <div ref={educationRef}>
                <EducationBiographySection></EducationBiographySection>
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  sx={{ backgroundColor: "#ffd333" }}
                ></Divider>
              </div>
              <div ref={experienceRef}>
                <BiographySection
                  name={"Experience"}
                  content={experience}
                ></BiographySection>
                <Divider
                  orientation="horizontal"
                  variant="middle"
                  sx={{ backgroundColor: "#ffd333" }}
                ></Divider>
              </div>
              <BiographySection
                ref={skillsRef}
                name={"Skills"}
                content={skills}
              ></BiographySection>
            </Container>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}

export default Biography;
