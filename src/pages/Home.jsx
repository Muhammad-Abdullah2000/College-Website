import React from 'react'
import BottomSection from './BottomSection';
import MiddleSection from './MiddleSection';
import { Top } from './Top';
import { Video } from './Video';
import Header from './header';

export const Home = () => {
    return (
        <>
              <Header /> 
            <Top /> 
            <MiddleSection /> 
            <BottomSection />
            <Video />



        </>
    )
}
