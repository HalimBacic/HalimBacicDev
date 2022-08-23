import { Grid, Table, Text } from '@nextui-org/react'
import React from 'react'
import '../style/biography.css'

const yearText = 
{
    color:'#ffd333',
    fontFamily:'Ruda, sans-serif',
    padding:'5%'
}

const myText = 
{
    color:'white',
    fontWeight:200,
    fontFamily:'Ruda, sans-serif',
    padding:'5%'
}

const textStyle = 
{
  fontFamily:'Ruda, sans-serif',
  color:'white'
}


const YearItem = ({ year }) => {

    return (
        <Text size={20} css={yearText}>
            {year}
        </Text>
    )

}

const EducationForYear = ({ text }) => {
    return (
        <Text size={23} css={myText}>
            {text}
        </Text>
    )
}

const primary = "I finished Gimnasium in 2014. In those years I learned HTML and CSS basics and" +
    " some Pascal programming. I was participating in Mtel App Builder league for basic Android " +
    "programming.";

const faculty = "After High school in 2014 I enter in Faculty of Electro-engineering in Banja Luka." +
    "I have desire to graduate in 2023. In this years I learned Java, C#, C and C++, MySql and another " +
    "techniques for software development. "

const aleaintern = "In summer 2022, I was Alea Partners intern where I learned how software industry " +
    "operate in everyday life. Thanks to Alea Partners, I was involved in some projects written in .NET "

function EducationBiographySection() {
    return (
        <div className='sectionStyle'>
            <Text size={40} extrabold css={textStyle}>Education</Text>
            <Grid.Container gap={1} Justify="space-around" alignItems='center'>
                <Grid xs={2} justify='center'>
                    <YearItem year={"2010 - 2014"}></YearItem>
                </Grid>
                <Grid xs={10} justify='center'>
                    <EducationForYear text={primary}></EducationForYear>
                </Grid>
                <Grid xs={2} justify='center'>
                    <YearItem year={"2014 - 2023"}></YearItem>
                </Grid>
                <Grid xs={10} justify='center'>
                    <EducationForYear text={faculty}></EducationForYear>
                </Grid>
                <Grid xs={2} justify='center'>
                    <YearItem year={"2022"}></YearItem>
                </Grid>
                <Grid xs={10} justify='center'>
                    <EducationForYear text={aleaintern}></EducationForYear>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default EducationBiographySection