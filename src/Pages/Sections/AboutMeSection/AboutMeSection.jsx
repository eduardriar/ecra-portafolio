import React, { useState, useEffect, useRef } from 'react';
import { CopiesContext } from '../../Context/Context';
import '../AboutMeSection/AboutMeSection.scss'

class AboutMeSection extends React.Component {

    render() {
        const aboutMeText = this.context.aboutMe;

        return (
            <section className='about-me-section'>
                <div className='about-me-section-container'>
                    <div className='about-me-section-content'>
                        <h1>{ aboutMeText.title }</h1>
                        <p>{ aboutMeText.content}</p>
                    </div>
                    <div className='about-me-section-image'>
                        <img src="" alt="" className='about-me-image' />
                    </div>
                </div>
            </section>
        )
    }
    
}

AboutMeSection.contextType = CopiesContext

export default AboutMeSection