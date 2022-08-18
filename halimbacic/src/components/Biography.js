import { Container, Image } from '@nextui-org/react'
import React from 'react'
import '../style/biography.css'
import Stack from '@mui/material/Stack';
import { Button } from "@nextui-org/react";
import { CardMedia, Divider } from '@mui/material';
import BiographySection from './BiographySection';

const aboutMe = "Hello. My name is Halim Bačić. I am software developer and " +
    "software engineering student in Banja Luka. This is my portfolio where you can find some " +
    "informations about me. "

const experience = "After some small projects and faculty projects, I joined Alea Partners. " +
    "I was intern for 2 months. After that time, I got full-time job as backend engineer. I want learn more "+
    "and more, you can read about it on my blog section."

const skills = "In faculty, I learned Java and C# from object-oriented programming languages and some " +
    "Android programming. Also, I know C and C++. For database managment, I use MySql. From 2016 to 2020, " +
    "I was using Linux as my primary OS, so I want to emphasize that I can work with Linux systems as Windows. ";

const navigationButtonCss =
{
    color: '#ffd333',
    fontFamily: 'Ruda, sans-serif',
    fontSize: '70%',
    padding: '3em',
    '&:hover': {
        borderRight: '4px solid #ffd333',
        borderRadius: 0
    },
    '&:focus': {
        border: '1px solid #ffd333',
        borderRadius: 0
    }
}


function Biography() {
    return (
        <div className='biographyContainer'>
            <div className='leftNavigation'>
                <CardMedia
                    component="img"
                    image={require("../resources/cvimg.jpg")}
                    sx={{ heigth: '80%', width: '80%', border: '3px solid #980101', borderRadius: '10%' }}
                />
                <Stack direction='column' spacing={1} divider={<Divider orientation="horizontal" variant="middle" sx={{ backgroundColor: '#ffd333' }} flexItem></Divider>}>
                    <Button light size="sm" css={navigationButtonCss}>About me</Button>
                    <Button light size="sm" css={navigationButtonCss}>Education</Button>
                    <Button light size="sm" css={navigationButtonCss}>Experience</Button>
                    <Button light size="sm" css={navigationButtonCss}>Skills</Button>
                </Stack>
            </div>
            <div className='rightBio'>
                <div className='scrollDiv'>
                    <Container className='bioContainer'>
                        <BiographySection name={"About me"} content={aboutMe}></BiographySection>
                        <Divider orientation="horizontal" variant="middle" sx={{ backgroundColor: '#ffd333' }}></Divider>
                        <BiographySection name={"Experience"} content={experience}></BiographySection>
                        <Divider orientation="horizontal" variant="middle" sx={{ backgroundColor: '#ffd333' }}></Divider>
                        <BiographySection name={"Skills"} content={skills}></BiographySection>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Biography