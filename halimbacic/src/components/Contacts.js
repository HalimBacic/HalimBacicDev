import React, { useState } from 'react'
import '../style/contacts.css'
import { Text } from '@nextui-org/react';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from '@mui/material';


const fblink = "https://www.facebook.com/HalimBacic/"; const fbt = "Facebook";
const instlink = "https://www.instagram.com/_halim______/"; const instt = "Instagram";
const linkedin = "https://www.linkedin.com/in/halimbacic/"; const lnt = "LinkedIn";
const github = "https://github.com/HalimBacic"; const gtt = "Github";


const contactsStyle =
{
    color: '#ffd333',
    fontFamily: 'Ruda, sans-serif',
    fontWeight: '900',
    paddingBottom: '3vh',
}

const btnStyle = 
{
    fontSize:'20px',
    color:'white',
    '&:hover':
    {
        color:'#ffd333',
        cursor:'pointer' 
    },
    '.MuiSvgIcon-root': {
        fontSize: '40px', // Increase the font size for the icons
      },
}

function Contacts() {
    const [link, setlink] = useState("");
    const [contact, setcontact] = useState("Find me here");

    const openExternalLink = () => {
        window.open(link, '_blank');
      };

    const hoverEffect = (linkArg,textArg) => { 
        setlink(linkArg);
        setcontact(textArg);
    }

    const mouseLeaveEffect = () => { 
        console.log("Leave");
        setlink(" ");
        setcontact("Find me here");
    }

    return (
        <div className='contactsContainer'>
            <Text size={50} css={contactsStyle}>
                Contacts
            </Text>
            <div className='imagesContacts'>
                <IconButton sx={btnStyle} onClick={() => openExternalLink()} onMouseOver = { () =>{ hoverEffect(fblink, fbt) }}  onMouseLeave={ () =>{ mouseLeaveEffect() }} >
                    <FacebookIcon className='cIcon'></FacebookIcon>
                </IconButton>
                <IconButton sx={btnStyle} onClick={() => openExternalLink()} onMouseOver = { () =>{ hoverEffect(instlink, instt) }}  onMouseLeave={ () =>{ mouseLeaveEffect() }}>
                    <InstagramIcon className='cIcon'></InstagramIcon>
                </IconButton>
                <IconButton sx={btnStyle} onClick={() => openExternalLink()} onMouseOver = { () =>{ hoverEffect(linkedin, lnt) }}  onMouseLeave={ () =>{ mouseLeaveEffect() }}>
                    <LinkedInIcon className='cIcon'></LinkedInIcon>
                </IconButton>
                <IconButton sx={btnStyle} onClick={() => openExternalLink()} onMouseOver = { () =>{ hoverEffect(github, gtt) }}  onMouseLeave={ () =>{ mouseLeaveEffect() }}>
                    <GitHubIcon className='cIcon'></GitHubIcon>
                </IconButton>
            </div>
            <Text size={17} css={contactsStyle}>
                {contact}
            </Text>
            <div style={{ marginTop: '5%' }}>
                <Stack orientation='row'>
                    <Text size={20} css={contactsStyle}>
                        Halim Bačić, software developer
                    </Text>
                    <Text size={20} css={contactsStyle}>
                        bacich95@gmail.com
                    </Text>
                    <Text size={20} css={contactsStyle}>
                        Majke Jugovica 70, Banja Luka, Bosnia and Herzegovina
                    </Text>
                </Stack>
            </div>
        </div>
    )
}

export default Contacts