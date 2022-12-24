import React from 'react'
import {FirstSection} from './sectionDetails/section1';
import { SecondSection } from './sectionDetails/section2';
import { SectionFold } from './sectionDetails/section3folder';
export const Main =()=>{
    return(
        <>
          <FirstSection/>
          <SecondSection/>
          <SectionFold/>
        </>
    )
}