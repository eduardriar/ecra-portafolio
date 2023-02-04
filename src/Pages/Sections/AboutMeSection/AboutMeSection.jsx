import React, { useState, useEffect, useRef } from 'react';
import { CopiesContext } from '../../Context/Context';
import '../AboutMeSection/AboutMeSection.scss'

class AboutMeSection extends React.Component {

    render() {
        const aboutMeText = this.context.aboutMe;

        return (
            <section className='about-me-section'>
                <h1>{ aboutMeText.title }</h1>
                <p>{ aboutMeText.content}</p>
                <div className='about-me-section-image'></div>
            </section>
        )
    }
    
}

AboutMeSection.contextType = CopiesContext

export default AboutMeSection