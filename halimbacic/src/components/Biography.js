import { Container, Image } from '@nextui-org/react'
import React from 'react'
import '../style/biography.css'
import Stack from '@mui/material/Stack';
import { Button } from "@nextui-org/react";
import { CardMedia, Divider } from '@mui/material';
import BiographySection from './BiographySection';

const aboutMe = "This is someting about me."

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
                    sx={{heigth:'80%',width:'80%', border:'3px solid #980101', borderRadius:'10%'}}
                />
                <Stack direction='column' spacing={1} divider={<Divider orientation="horizontal" variant="middle" sx={{ backgroundColor: '#ffd333' }} flexItem></Divider>}>
                    <Button light size="sm" css={navigationButtonCss}>About me</Button>
                    <Button light size="sm" css={navigationButtonCss}>Education</Button>
                    <Button light size="sm" css={navigationButtonCss}>Experience</Button>
                    <Button light size="sm" css={navigationButtonCss}>Skills</Button>
                </Stack>
            </div>
            <div className='rightBio'>
                <Container>
                    <BiographySection name={"About me"} content={aboutMe}></BiographySection>
                </Container>
            </div>
        </div>
    )
}

export default Biography