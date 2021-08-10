import React, {useState} from 'react'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour, HomeObjFive, HomeObjSix, HomeObjSeven, HomeObjEight } from '../../components/InfoSection/Data'
import InfoSection from '../../components/InfoSection/InfoSection'
import Navbar from '../../components/Navbar/Navbar'
import Services from '../../components/Services/Services'
import Sidebar from '../../components/Sidebar/Sidebar'



const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           
         
            <Navbar toggle ={toggle}/>
            <Sidebar isOpen = {isOpen} toggle ={toggle}/> 
            <HeroSection/>
            <InfoSection {...HomeObjOne}/>
            <InfoSection {...HomeObjSeven}/>
            <Services />
            <InfoSection {...HomeObjTwo}/>
            <InfoSection {...HomeObjThree}/>
            <InfoSection {...HomeObjFour} /> 
            <InfoSection {...HomeObjFive} /> 
            <InfoSection {...HomeObjEight} /> 

            <InfoSection {...HomeObjSix} /> 


            <Footer />

        </>
    )
}

export default Home
