import React from 'react'
import HomeSection from '../../components/Home/Home'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
function HomePage() {
    return (
        <>
            <HomeSection {...homeObjOne}/>
            <HomeSection {...homeObjTwo}/>
            <HomeSection {...homeObjThree}/>
            <HomeSection {...homeObjFour}/>
            
        </>
    )
}

export default HomePage
